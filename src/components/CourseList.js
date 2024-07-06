// src/components/CourseList.js
import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const CourseList = ({ category }) => {
  const filteredCourses = category
    ? courses.filter((course) => course.category === category)
    : courses;

  return (
    <div className="course-list">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
