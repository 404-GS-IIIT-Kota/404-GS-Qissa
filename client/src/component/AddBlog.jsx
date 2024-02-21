import React, { useState } from "react";
import Discrimination from "../assets/descrimination.jpg";

function AddBlog() {
  const [mainDivHeight, setMainDivHeight] = useState(80); // Default height in pixels, adjust as needed

  const handleClick = () => {
    if (mainDivHeight === 80) {
      setMainDivHeight(300); // Change height to 400 pixels when clicked
    } else {
      setMainDivHeight(80); // Restore normal height when clicked again
    }
  };

  return (
    <div
      style={{
        height: `${mainDivHeight}px`,
        transition: "height 0.5s ease-in-out", // Add smooth transition
      }}
      className="w-full rounded-2xl bg-gray-200 shadow-2xl mb-5 max-sm:mt-10 relative overflow-hidden hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-[5rem] absolute top-0">
        <div
          className="w-[5rem] h-full shadow-2xl rounded-full left-2 mr-2 absolute top-0 flex justify-center items-center hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={Discrimination}
            alt="Discrimination"
            className="rounded-full md:w-[4rem] sm:w-[3rem] max-sm:w-[4rem] cursor-pointer"
            style={{ transition: "transform 0.3s" }}
          />
        </div>
        <div className="w-auto h-full ml-24 flex justify-center items-center overflow-scroll no-scrollbar">
        <p className="text-3xl md:text-2xl sm:text-xl max-sm:text-sm pt-2 pb-2">
          Wondering how to create your blogs on the Legal Advocacy Hub?
        </p>
        </div>
      </div>
      <div className="h-[18rem] w-full absolute p-5 top-[6rem] overflow-scroll no-scrollbar">
        <p className="text-2xl md:text-xl sm:text-lg max-sm:text-sm text-center">
          {/* step1 : click on the add post button <br />
          step2: choose your blog post's domain <br />
          step3: enter your blog's heading <br />
          step4: enter your blog post's content <br />
          step5: click submit! */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat maxime blanditiis earum, eligendi laboriosam illum corrupti quaerat officiis aperiam quasi ex cum, at ut, est porro dolorem tempore atque necessitatibus nihil eaque deserunt ea molestias minus. Magni repudiandae eius modi totam ipsa fugiat cupiditate distinctio natus? Quas, facilis officiis?
        </p>
      </div>
    </div>
  );
}

export default AddBlog;
