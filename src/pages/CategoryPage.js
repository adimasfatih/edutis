import React from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { categories } from "../data/categories";
import { courses } from "../data/courses";
import "./CategoryPage.css"; // Import the CSS file

const CategoryPage = () => {
  const { category } = useParams();
  const categoryData = categories.find((cat) => cat.name === category);
  const categoryCourses = courses.filter(
    (course) => course.category === category
  );

  return (
    <div className="category-page">
      <h1>{categoryData.name} Courses</h1>
      <p>{categoryData.description}</p>
      <div className="courses-section">
        {categoryCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
