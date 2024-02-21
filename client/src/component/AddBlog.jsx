import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import Discrimination from "../assets/descrimination.jpg"

function AddBlog() {
  const [mainDivHeight, setMainDivHeight] = useState(80); // Default height in pixels, adjust as needed
  const [icon, setIcon] = useState("add"); // Icon state: "add" or "minus"

  const handleClick = () => {
    if (icon === "add") {
      setMainDivHeight(400); // Change height to 350 pixels when clicked
      setIcon("minus"); // Change icon to Minus
    } else {
      setMainDivHeight(80); // Restore normal height when Minus icon is clicked
      setIcon("add"); // Change icon to Add
    }
  };

  return (
    <div
      style={{
        height: `${mainDivHeight}px`,
        transition: "height 0.5s ease-in-out" // Add smooth transition
      }}
      className="w-full rounded-2xl bg-gray-200 shadow-2xl mb-5 relative overflow-hidden"
    >
      <div className="w-[5rem] h-[5rem] shadow-2xl rounded-full left-2 mr-2 absolute top-0 flex justify-center items-center">
        <img src={Discrimination} className="rounded-full md:w-[4rem] sm:w-[3rem] max-sm:w-[4rem]" />
      </div>
      <div className="md:w-[85%] max-md:w-[75%] sm:w-[60%] max-sm:w-[65%] h-[5rem] p-5 absolute top-0 right-0">
        <p className="text-3xl md:text-2xl sm:text-xl max-sm:text-lg">
          Wondering how to create your blogs on the Legal Advocacy Hub?
        </p>
      </div>
      <div className="absolute top-2 md:top-5 right-1 md:right-1">
        <Button onClick={handleClick} startIcon={icon === "add" ? <AddIcon /> : <MinusIcon />} />
      </div>
      <div className="h-[18rem] w-full absolute p-5 top-[6rem] overflow-scroll no-scrollbar">
      <p className="text-2xl md:text-xl sm:text-lg max-sm:text-sm">
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
