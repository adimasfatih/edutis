// src/pages/HomePage.js
import React from "react";
import CourseList from "../components/CourseList";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Selamat Datang Di edutis</h1>
      <CourseList />
    </div>
  );
};

export default HomePage;
