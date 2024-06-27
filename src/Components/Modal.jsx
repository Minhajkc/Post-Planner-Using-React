import React from 'react';

const Modal = ({ show, handleClose, posts }) => {
  // Render nothing if the 'show' prop is false
  if (!show) {
    return null;
  }

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Scheduled Posts</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={handleClose}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M16.82 15.364L13.52 12.06 16.82 8.76a1 1 0 10-1.414-1.414l-3.3 3.3-3.3-3.3a1 1 0 10-1.414 1.414l3.3 3.3-3.3 3.3a1 1 0 001.414 1.414l3.3-3.3 3.3 3.3a1 1 0 001.414-1.414z"
                />
              </svg>
            </button>
          </div>

          {/* Modal body */}
          <div className="my-4">
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.id} className="py-2">
                  <p className="text-lg">{post.text}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full my-2 rounded-lg"
                    />
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
