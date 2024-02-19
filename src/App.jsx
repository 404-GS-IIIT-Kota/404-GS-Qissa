import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./component/Loader";
import SignIn from './pages/Signin'
import SignUp from "./pages/Signup";
import BeautifulExperiences from "./pages/BeautifulExperiences";
import ComingOutStories from "./pages/ComingOutStories";
import LegalAdvocacyHub from "./pages/LegalAdvocacyHub";
import Notifications from "./pages/Notifications"
import Profile from "./pages/Profile"
import Signup2 from "./pages/Signup2"
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/beautiful-experiences" element={<BeautifulExperiences />} />
          <Route path="/coming-out-stories" element={<ComingOutStories />} />
          <Route path="/legal-advocacy-hub" element={<LegalAdvocacyHub />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signup-2" element={<Signup2 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
