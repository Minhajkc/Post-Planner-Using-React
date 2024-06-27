import React, { useState } from 'react';

function PostForm({ addPost,setShowPostForm}) {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ text, image, link, scheduleDate });
    setText('');
    setImage('');
    setLink('');
    setScheduleDate('');
    setShowPostForm(false)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-500 shadow-md rounded-lg ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Schedule a post</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Schedule Date:</label>
        <input
          type="datetime-local"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Schedule Post
      </button>
    </form>
  );
}

export default PostForm;
