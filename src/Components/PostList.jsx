import React from 'react';
import Post from '../Components/Post';

function PostList({ posts }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center text-gray-300">Posts</h2>
    

      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500 text-center">No posts scheduled yet.</p>
      )}
    </div>
  );
}

export default PostList;
