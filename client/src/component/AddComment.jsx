// AddComment.js

import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import CloseIcon from '@mui/icons-material/Close';

const AddComment = ({ postId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emojiData) => {
    const emoji = emojiData.emoji;
    setMessage(message + emoji);
  };

  const handleCloseEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Message submitted:", message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`chat-${postId}`} className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-800">
          <button
            type="button"
            onClick={handleEmojiClick}
            className="p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 hover:text-white hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"    
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
            <span className="sr-only">Add emoji</span>
          </button>
          <textarea
            id={`chat-${postId}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="1"
            className="block mx-4 resize-none p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a comment..."
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </div>
      </form>
      {showEmojiPicker && (
        <div className="absolute bottom-12 right-4 z-10 bg-white p-2 rounded-lg shadow-lg">
          <div className="flex justify-end mb-1">
            <button
              onClick={handleCloseEmojiPicker}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 "
            >
              <CloseIcon />
            </button>
          </div>
          <EmojiPicker
            onEmojiClick={handleEmojiSelect}
            disableSearchBar
          />
        </div>
      )}
    </div>
  );
};

export default AddComment;
