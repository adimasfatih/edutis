import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css"; // Import the CSS file

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`}>View Course</Link>
    </div>
  );
};

export default CourseCard;
