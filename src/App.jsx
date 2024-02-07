import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./component/Loader";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/Signup"));
const SignIn = lazy(() => import("./pages/Signin"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
