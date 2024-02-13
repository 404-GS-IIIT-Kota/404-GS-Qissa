import PostPlaceholder from "../assets/postPlaceholder.jpg";
import AddComment from "./AddComment";

const Post = () => {
  return (
    <>
      <div
        className="w-10/12 ml-24 absolute bottom-10 flex"
        style={{ height: "28rem" }}
      >
        <div className="w-1/2 h-full rounded-bl-lg rounded-tl-lg bg-gray-300 flex items-center justify-center">
          <div className="w-96 h-96">
            <img src={PostPlaceholder} />
          </div>
        </div>
        <div className="w-1/2 h-full rounded-br-lg rounded-tr-lg bg-gray-300">
          <div className="absolute top-0 w-1/2">
            <h1 className="p-3 font-bold">Comments</h1>
          </div>
          <div className="absolute bottom-0 w-1/2">
            <AddComment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
