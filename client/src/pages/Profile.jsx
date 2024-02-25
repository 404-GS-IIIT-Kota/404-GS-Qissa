import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProfileCarousel from "../component/ProfileCarousel";

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

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  //profile m user data laayenge boss, main website m demo h usme dikhara api call likhi he nhi hai bhai tumne kaise dikhau krke, yes abhi profile wale k liye nai hua hain, no worries boss, aapne jo message kia h waise karlenge

  // const cookies = localStorage.getItem("cookies"); aaise cookies mil jayegii isko header me set krke call krna
  // ok boss hum middleware se verify karare h

  const items = [1, 2, 3, 4];

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
                <Link to="/happenings">Happenings</Link>
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
            <div className="bg-[#e1e1e1]  shadow-xl h-[230px] w-[200px] translate-x-[8rem] rounded-2xl p-4 z-30 translate-y-10">
              <ul className="h-full flex flex-col gap-5 ">
                <li className="hover:cursor-pointer">
                  <Link to="/happenings">Happenings</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/beautiful-experiences">Beautiful Experiences</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/coming-out-stories">Coming Out Stories</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/legal-advocacy-hub">Legal Advocacy Hub</Link>
                </li>
                <li className="hover:cursor-pointer ">
                  <Link to="/profile">Your Profile</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-100 z-10 w-11/12 bg-white rounded-2xl shadow-2xl absolute top-24 left-[1rem] md:left-10 xl:left-16 flex justify-center items-center">
          <div className="w-[90%] h-[100%] max-md:w-full p-5 max-md:p-3 overflow-scroll no-scrollbar">
            <div className="w-full h-[60%] max-md:h-auto  flex max-lg:flex-col max-md:justify-center max-md:itesms-center max-md:gap-10 justify-between items-center">
              <div className="bg-red-500 ml-10 mr-10 max-md:mt-10 h-56 w-56 max-md:h-36 max-md:w-36 rounded-full"></div>
              <div className="p-10 w-[80%] flex flex-col max-md:justify-center gap-1 max-md:w-full h-full ">
                <p className="text-2xl max-md:text-lg text-gray-600 font-semibold">
                  @aaryan9
                </p>
                <h1 className="md:text-[2rem] max-md:text-[1.125rem] tracking-wider text-gray-800 font-bold">
                  Aaryan Anil Kumar Singh
                </h1>
                <p className="text-xl max-md:text-lg text-gray-600">He/Him</p>
                <p className="text-lg max-md:text-lg text-gray-600">
                  19 , India
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum mollitia rerum praesentium veniam consequatur aliquid
                  distinctio fugiat tempora! Mollitia doloremque fuga vitae
                  deserunt eius minus ipsam dicta necessitatibus corrupti
                  commodi.
                </p>
              </div>
            </div>
            <div className="w-full h-[25rem] p-10 border">
              <ProfileCarousel items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
