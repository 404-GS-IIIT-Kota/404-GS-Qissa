import React from "react";
import AddComment from "./AddComment";

const PostItem = ({ post }) => {
  return (
    <div className="w-full h-full max-md:mt-0 border border-black"><div className="flex flex-col md:flex-row"> {/* Changed flex to flex-col on max-md */}
      {/* A POST */}
      <div className="md:w-1/2 h-full rounded-bl-lg rounded-tl-lg bg-gray-300 flex items-center justify-center">
        <div className="w-[100%] h-full">
          <img
            src={post.image}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="Post Placeholder"
          />
        </div>
      </div>
      <div className="md:w-1/2 h-full rounded-br-lg rounded-tr-lg bg-gray-100 flex flex-col justify-between">
        <div>
          <h1 className="p-3 font-bold">Comments</h1>
          {/* Render comments here */}
        </div>
        <div className="border border-black w-full h-[21.5rem] overflow-scroll no-scrollbar"></div>
        <div>
          {/* Render AddComment component here */}
          <AddComment postId={post.id} />
        </div>
      </div>
      {/* POST END */}
    </div>
    </div>
  );
};

export default PostItem;
