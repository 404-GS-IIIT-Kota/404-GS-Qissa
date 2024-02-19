import { useLocation } from "react-router-dom";
import AddPostWidget from "./AddPostWidget";

const AddPost = () => {
  const location = useLocation();

  let headerText = "Qissa"; // Default text
  if (location.pathname === "/beautiful-experiences") {
    headerText = "Beautiful Experiences";
  } else if (location.pathname === "/coming-out-stories") {
    headerText = "Coming Out Stories";
  }

  return (
    <div className="w-10/12 h-16 absolute top-6 left-24 flex max-sm:w-full max-sm:left-0">
      <div className="w-1/3 h-full">
        <AddPostWidget />
      </div>
      <div className="w-2/3 h-full flex flex-col items-end">
        <h1 className="font-bold text-xl hover:cursor-pointer relative right-4 top-3">{headerText}</h1>
      </div>
    </div>
  );
};

export default AddPost;
