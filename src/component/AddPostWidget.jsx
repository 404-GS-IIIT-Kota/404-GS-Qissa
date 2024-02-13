import { useState } from "react";
import PostModal from "./PostModal";

const AddPostWidget = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePostClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <form>
        <div className="mb-4 border max-sm:hidden border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 ">
            <h1 className="text-white">Something on your mind? </h1>
            <div className="flex space-x-1 rtl:space-x-reverse sm:ps-2">
              {/* Move the button inside this div */}
            </div>
            <button
              type="button"
              onClick={handlePostClick}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post
            </button>
          </div>
        </div>
      </form>
      {showModal && <PostModal onClose={handleCloseModal} />}
    </div>
  );
};

export default AddPostWidget;
