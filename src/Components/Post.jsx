import React from 'react';

function Post({ post }) {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-white shadow-md rounded-lg">
      <p className="text-gray-700 mb-2">{post.text}</p>
      {post.image && (
        <img src={post.image} alt="Post" className="w-32 h-32 object-cover mb-2 mx-auto" />
      )}
      {post.link && (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {post.link}
        </a>
      )}
      <p className="text-gray-500 text-sm mt-2">
        Scheduled for: {new Date(post.scheduleDate).toLocaleString()}
      </p>
    </div>
  );
}

export default Post;
