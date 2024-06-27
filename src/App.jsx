import React, { useState, useEffect } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import Modal from './Components/Modal';

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [delayedPosts, setDelayedPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const handleOpenModal = () => {
    setSelectedPosts(posts);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const filteredPosts = posts.filter(post => new Date(post.scheduleDate) <= now);
      setDelayedPosts(filteredPosts);
    }, 1000);

    return () => clearInterval(interval);
  }, [posts]);

  const togglePostForm = () => {
    setShowPostForm(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900 mt-10 rounded-2xl p-16"> 
      <div className="text-center mb-4">
        <button
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none"
          onClick={handleOpenModal}
        >
          Scheduled Posts
        </button>
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none ml-4"
          onClick={togglePostForm}
        >
          New Post
        </button>
        <p className="text-gray-500 text-center mt-5">Posts will appear according to the scheduled date and time</p>
      </div>
      
      {showPostForm && <PostForm addPost={addPost} setShowPostForm={setShowPostForm} />}
      <PostList posts={delayedPosts} />
      <Modal show={showModal} handleClose={handleCloseModal} posts={selectedPosts} />
    </div>
  );
}

export default App;
