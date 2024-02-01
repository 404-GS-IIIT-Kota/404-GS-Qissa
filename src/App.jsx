import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./component/Loader";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Temp from "./pages/Temp";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
