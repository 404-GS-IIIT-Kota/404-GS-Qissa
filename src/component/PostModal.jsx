import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const PostModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg relative left-32 top-8 w-3/5 h-4/6">
        {/* Add your content for the modal */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PostModal;
