import { useLocation } from "react-router-dom";
import AddPostWidget from "./AddPostWidget";

const AddPost = () => {
  const location = useLocation();

  return (
    <div className="w-10/12 h-16 absolute top-6 max-md:top-0 left-24 flex max-md:flex-col max-sm:w-full max-sm:left-0 justify-center items-center">
      <div className="w-1/3 max-md:w-full h-full">
        <AddPostWidget />
      </div>
      <div className="w-2/3 max-md:hidden h-full flex flex-col items-end">
      </div>
    </div>
  );
};

export default AddPost;
