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
              # India's Supreme Court Rejects Same-Sex Marriage
        </p>
        </div>
      </div>
      <div className="h-[18rem] w-full absolute p-5 top-[6rem] overflow-scroll no-scrollbar">
        <p className="text-2xl md:text-xl sm:text-lg max-sm:text-sm text-center">
On October 17, 2023, the Supreme Court of India delivered a verdict on a batch of petitions seeking the legal recognition of same-sex marriage in the country. The verdict was a unanimous rejection of same-sex marriage, and a 3:2 rejection of civil unions for non-heterosexual couples.

The court said that there is no fundamental right to marry under the Constitution, and that it is up to the Parliament and the state legislatures to enact laws on this issue. The court also said that the Special Marriage Act of 1954, which provides a secular option for marriage, cannot be interpreted to include same-sex couples.

This verdict has implications for the rights and dignity of millions of LGBTQ people in India, who have been fighting for their equality for decades. It also affects the global movement for marriage equality, which has seen significant progress in recent years. As of now, 29 countries have legalized same-sex marriage, and many others have recognized civil unions or domestic partnerships for same-sex couples[^1^][1] [^2^][2].

The Supreme Court's verdict comes five years after the same court partially struck down Section 377 of the Indian Penal Code, which criminalized consensual same-sex relations. That judgment in 2018 was hailed as a historic victory for LGBTQ rights in India, and a catalyst for social change.

However, the court's latest verdict has left the fate of LGBTQ rights in the hands of the political class, which has shown little interest or willingness to address this issue. The court has also ignored the voices and experiences of LGBTQ people, who have faced discrimination, violence, and stigma in their everyday lives.

This blog post aims to inform the LGBTQ community worldwide about the latest development in India regarding same-sex marriage. It does not intend to provide any legal or professional advice, or to express any personal views or opinions on this issue. For more information, please refer to the sources below.
        </p>
      </div>
    </div>
  );
}

export default AddBlog;
