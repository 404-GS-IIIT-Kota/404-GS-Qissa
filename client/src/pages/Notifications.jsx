import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios"; // Import axios

const Modal = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className="absolute top-[2rem] h-[10rem] w-[12rem] left-0 bg-white rounded-2xl mt-2 p-4 shadow-2xl flex flex-col justify-around items-center"
    >
      <Link to="/beautiful-experiences" className="block mb-2">
        Beautiful Experiences
      </Link>
      <Link to="/coming-out-stories" className="block mb-2">
        Coming Out Stories
      </Link>
      <Link to="/legal-advocacy-hub" className="block mb-2">
        Legal Advocacy Hub
      </Link>
    </div>
  );
};

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationData, setNotificationData] = useState([]); // State to hold notification data
  const [apiCalls, setApiCalls] = useState(0); // State to track API calls

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (apiCalls >= 5) {
        // Check if API call limit reached
        console.log("API call limit reached for this session");
        return;
      }

      const options = {
        method: "GET",
        url: "https://lgbtq-world-news-live.p.rapidapi.com/news",
        headers: {
          "X-RapidAPI-Key":
            "2b7f114c9cmshfba0d89e6bb3850p15c72ajsn0f3b600d90e6",
          "X-RapidAPI-Host": "lgbtq-world-news-live.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setNotificationData(response.data); // Update state with fetched data
        setApiCalls(apiCalls + 1); // Increment API call count
      } catch (error) {
        console.error(error);
      }
    };

    if (apiCalls < 5) {
      fetchData();
    }
  }, [apiCalls]); // Trigger effect when API call count changes

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 relative">
        <div className="w-11/12 h-16 bg-white rounded-2xl shadow-lg max-auto absolute top-4 left-[1rem] md:left-10 xl:left-16 z-20">
          <div className="relative top-4 max-w-900 flex justify-between items-center pr-16">
            <h1 className="font-bold text-xl hover:cursor-pointer relative left-4">
              <Link to="/beautiful-experiences">Qissaa</Link>
            </h1>
            <ul className="flex items-center gap-16 max-sm:hidden">
              <li className="hover:cursor-pointer">
                <Link to="/notifications">Notifications</Link>
              </li>
              <li
                onClick={toggleModal}
                className="hover:cursor-pointer relative"
              >
                Channels <ArrowDropDownIcon />
                {modalOpen && <Modal closeModal={closeModal} />}
              </li>
              <li className="hover:cursor-pointer ">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="translate-x-10 hidden max-sm:block"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          {isOpen && (
            <div className="bg-[#e1e1e1]  shadow-xl h-[150px] w-[150px] translate-x-[11.3rem] rounded-2xl p-4 z-30 translate-y-10">
              <ul className="h-full flex flex-col gap-5 ">
                <li className="hover:cursor-pointer">
                  <Link to="/notifications">Notifications</Link>
                </li>
                <li className="hover:cursor-pointer">
                  Channels <ArrowDropDownIcon />
                </li>
                <li className="hover:cursor-pointer ">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-100 z-10 w-11/12 bg-white rounded-2xl shadow-2xl absolute top-24 left-[1rem] md:left-10 xl:left-16 flex justify-center items-center">
          <div className="w-[80%] h-[100%] p-5 overflow-scroll no-scrollbar">
            {notificationData.map((notification, index) => (
              <div
                key={index}
                className="w-[100%] h-auto bg-gray-200 rounded-2xl p-5 mt-3 mb-3"
              >
                <h1 className="font-semibold max-sm:text-center courgette-regular font-sans tracking-wide text-[3rem] max-md:text-[1.8rem] text-gray-900 capitalize mb-[0.7rem]">
                  {notification.source}
                </h1>
                <p className="text-gray-800 tracking-wide max-sm:text-center  text-[1.2rem] md:text-[1rem] mb-[1.5rem]">
                  {notification.title}
                </p>

                <Link to={notification.url} target="_blank">
                  <button class="bg-gray-400 max-sm:items-center max-sm:ml-[2.6rem] hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                    <span class="tracking-wide">Read More</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
