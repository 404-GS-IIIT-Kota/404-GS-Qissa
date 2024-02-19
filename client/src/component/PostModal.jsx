import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import DropZonePost from "./DropZonePost";

const PostModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl flex justify-center items-center relative left-32 top-8 w-3/5 h-4/6">
        {/* Add your content for the modal */}

        <div className="w-4/5 h-full py-5">
          <h1 className="font-bold text-3xl pb-5 hover:cursor-pointer">Add a Post</h1>
        <textarea
                type="text"
                id="Caption"
                name="Caption"
                placeholder="Write the caption..."
                className="w-full h-14 px-4 py-2 resize-none overflow-hidden border rounded-md focus:outline-none focus:border-blue-600 border-gray-400 "
              />
          <DropZonePost />
          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition duration-300 ease-in-out">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-blue-400 transition duration-300 ease-in-out">
              Post
            </button>
          </div>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PostModal;
