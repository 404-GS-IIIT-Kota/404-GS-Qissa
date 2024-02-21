import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import BeautifulExperiences from "./pages/BeautifulExperiences";
import ComingOutStories from "./pages/ComingOutStories";
import LegalAdvocacyHub from "./pages/LegalAdvocacyHub";
import Happenings from "./pages/Happenings";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

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
        <Route path="/happenings" element={<Happenings />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
