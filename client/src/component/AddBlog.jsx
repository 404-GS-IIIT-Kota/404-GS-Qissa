import React, { useState } from "react";
import Discrimination from "../assets/descrimination.jpg";

function AddBlog() {
  const [mainDivHeight, setMainDivHeight] = useState(80); // Default height in pixels, adjust as needed

  const handleClick = () => {
    if (mainDivHeight === 80) {
      setMainDivHeight(400); // Change height to 400 pixels when clicked
    } else {
      setMainDivHeight(80); // Restore normal height when clicked again
    }
  };

  return (
    <div
      style={{
        height: `${mainDivHeight}px`,
        transition: "height 0.5s ease-in-out" // Add smooth transition
      }}
      className="w-full rounded-2xl bg-gray-200 shadow-2xl mb-5 relative overflow-hidden hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="w-[5rem] h-[5rem] shadow-2xl rounded-full left-2 mr-2 absolute top-0 flex justify-center items-center hover:cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={Discrimination}
          alt="Discrimination"
          className="rounded-full md:w-[4rem] sm:w-[3rem] max-sm:w-[4rem] cursor-pointer"
          style={{ transition: "transform 0.3s" }}
        />
      </div>
      <div className="md:w-[85%] max-md:w-[75%] sm:w-[80%] max-sm:w-[75%] h-[5rem] max-md:p-0 absolute right-0 top-5 items-center overflow-scroll no-scrollbar">
        <p className="text-3xl md:text-2xl sm:text-xl max-sm:text-lg ">
          Wondering how to create your blogs on the Legal Advocacy Hub?
        </p>
      </div>
      <div className="h-[18rem] w-full absolute p-5 top-[6rem] overflow-scroll no-scrollbar">
        <p className="text-2xl md:text-xl sm:text-lg max-sm:text-lg text-center">
          step1 : click on the add post button <br />
          step2: choose your blog post's domain <br />
          step3: enter your blog's heading <br />
          step4: enter your blog post's content <br />
          step5: click submit!
        </p>
      </div>
    </div>
  );
}

export default AddBlog;
