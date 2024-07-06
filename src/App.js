import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import CoursePage from "./components/CoursePage";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
