import React, { useState } from "react";

const AddComment = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji) => {
    setMessage(message + emoji);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to submit the message
    console.log("Message submitted:", message);
  };

  // Define emojis array
  const emojis = ["😊", "😂", "❤️", "😍", "👍", "🙌", "🎉", "🔥", "🥳", "🚀", "💯", "✨", "🌟", "🎈", "💥", "🎶", "🌈", "💻"];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <button
            type="button"
            onClick={handleEmojiClick}
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
            id="chat"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="1"
            className="block mx-4 resize-none p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
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
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
      {showEmojiPicker && (
        <div className="absolute bottom-12 right-4 z-10 bg-white p-2 rounded-lg shadow-lg">
          {/* Emoji list */}
          <div className="grid grid-cols-6 gap-2">
            {/* Map over the emojis array and render buttons */}
            {emojis.map((emoji, index) => (
              <button key={index} onClick={() => handleEmojiSelect(emoji)}>{emoji}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddComment;
