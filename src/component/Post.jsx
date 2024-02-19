import React, { useState, useEffect } from "react";
import PostPlaceholder from "../assets/postPlaceholder.jpg";
import PostItem from "./PostItem";

const Post = () => {
  // State to hold posts
  const [posts, setPosts] = useState([]);

  // Simulated data for demonstration
  const dummyPosts = [
    { id: 1, image: PostPlaceholder },
    { id: 2, image: PostPlaceholder },
    { id: 3, image: PostPlaceholder },
    { id: 4, image: PostPlaceholder },
    { id: 5, image: PostPlaceholder },
    { id: 6, image: PostPlaceholder },
    // Add more post objects as needed
  ];

  // Function to load more posts
  const loadMorePosts = () => {
    // Simulated API call to fetch more posts
    // In a real application, this would be replaced with an actual API call
    // For demonstration purposes, let's assume we want to load 3 more posts
    const additionalPosts = dummyPosts.slice(posts.length, posts.length + 3);
    // Append the new posts to the existing posts
    setPosts([...posts, ...additionalPosts]);
  };

  // Effect to load initial posts
  useEffect(() => {
    // Simulated initial loading of posts
    setPosts(dummyPosts);
  }, []);

  // Function to check if the user has scrolled to the bottom
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      loadMorePosts();
    }
  };

  return (
    <div
      className="w-10/12 ml-24 absolute bottom-10 overflow-scroll no-scrollbar"
      style={{ height: "28rem" }}
      onScroll={handleScroll}
    >
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Post;
