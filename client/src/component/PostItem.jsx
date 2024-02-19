import React from "react";
import AddComment from "./AddComment";

const PostItem = ({ post }) => {
  return (
    <div className="flex">
      {/* A POST */}
      <div className="w-1/2 h-full rounded-bl-lg rounded-tl-lg bg-gray-300 flex items-center justify-center">
        <div className="w-[100%] h-full">
          <img
            src={post.image}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="Post Placeholder"
          />
        </div>
      </div>
      <div className="w-1/2 h-full rounded-br-lg rounded-tr-lg bg-gray-100">
        <div className="absolute top-0 w-1/2">
          <h1 className="p-3 font-bold">Comments</h1>
        </div>
        <div className="absolute bottom-0 w-1/2">
          {/* Render AddComment component here */}
          <AddComment />
        </div>
      </div>
      {/* POST END */}
    </div>
  );
};

export default PostItem;
