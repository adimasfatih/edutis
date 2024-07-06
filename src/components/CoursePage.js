import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CommentSection from "./CommentSection";
import "./CoursePage.css"; // Import the CSS file

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <video controls width="640" height="360">
        <source src={course.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CommentSection courseId={courseId} />
    </div>
  );
};

export default CoursePage;
