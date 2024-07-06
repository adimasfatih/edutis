// src/components/CommentSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommentSection.css";

const CommentSection = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://edutis.et.r.appspot.com/comments/${courseId}`
        );
        setComments(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, [courseId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        const response = await axios.post(
          "https://edutis.et.r.appspot.com/comments",
          {
            courseId,
            text: comment,
          }
        );
        setComments([...comments, response.data]);
        setComment("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
          rows="3"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
