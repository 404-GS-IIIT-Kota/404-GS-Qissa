import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-orange-400 text-xl">JSK JSS</h1>
      <Link to="/signin">
        <button className="bg-red-500 text-white ">Signin</button>
      </Link>
    </>
  );
};

export default Home;
