import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import BeautifulExperiences from "./pages/BeautifulExperiences";
import ComingOutStories from "./pages/ComingOutStories";
import LegalAdvocacyHub from "./pages/LegalAdvocacyHub";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Profile1 from "./pages/Profile1"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/beautiful-experiences"
          element={<BeautifulExperiences />}
        />
        <Route path="/coming-out-stories" element={<ComingOutStories />} />
        <Route path="/legal-advocacy-hub" element={<LegalAdvocacyHub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
};

export default App;
