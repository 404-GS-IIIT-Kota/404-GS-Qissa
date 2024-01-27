import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./component/Loader";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
