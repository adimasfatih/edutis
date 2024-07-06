import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories"; // Correct import path
import "./LandingPage.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Selamat Datang Di Edutis</h1>
      <h2>Platform edukasi gratis untuk anak bangsa indonesia</h2>
      <div className="categories-section">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <h2>{category.name}</h2>
            <Link to={`/category/${category.name}`}>
              Explore {category.name} Courses
            </Link>
          </div>
        ))}
        <h2>Silakahkan pilih mata pelajaran yang ingin anda pelajari</h2>
      </div>
    </div>
  );
};

export default LandingPage;
