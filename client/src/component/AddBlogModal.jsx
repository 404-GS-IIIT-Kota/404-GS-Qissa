import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddBlogModal = ({ onClose }) => {
  return (
    <div className="fixed top-3 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl flex justify-center items-center relative left-34 top-0 w-3/5 h-auto max-md:w-11/12 max-md:h-auto">
        {/* Add your content for the modal */}

        <div className="w-4/5 h-full py-5">
          <div className="flex justify-between items-center  mb-5 flex-wrap md:flex-nowrap">
            <h1 className="font-bold text-3xl hover:cursor-pointer">
              Add a BlogPost
            </h1>
            <select
              id="blogtype"
              name="blogtype"
              className="w-full md:w-2/5 px-4 py-2 mt-4 md:mt-0 border rounded-md focus:outline-none focus:border-slate-500 border-gray-300"
            >
              <option value="Dc">Discrimination</option>
              <option value="Rc">Racism</option>
              <option value="Lg">Legal</option>
              <option value="Ms">Miscellaneous</option>
            </select>
          </div>
          <textarea
            type="text"
            id="Topic"
            name="Topic"
            placeholder="What is your blog about...?"
            className="w-full h-14 px-4 py-2 resize-none overflow-scroll no-scrollbar border rounded-md focus:outline-none focus:border-blue-600 border-gray-400 "
          />
          <textarea
            type="text"
            id="Blog"
            name="Blog"
            placeholder="Write your blog here..."
            className="w-full h-56 px-4 py-2 resize-none overflow-scroll no-scrollbar border rounded-md focus:outline-none focus:border-blue-600 border-gray-400 "
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-md focus:outline-none focus:ring focus:ring-gray-400 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-blue-400 transition duration-300 ease-in-out">
              Post
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default AddBlogModal;
