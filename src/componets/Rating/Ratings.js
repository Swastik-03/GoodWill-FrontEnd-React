// Rating.js
import React, { useState,useEffect } from "react";
import "./Ratings.css";
import FeedbackRating from "../feedback/FeedbackRating";
import Comment from "./Comment";
import Navbar from "../navbar/Navbar";

const Ratings = () => {
  const [formData, setFormData] = useState({
    rating: 0,
  });

  const users = {
    ReyKan: {
      name: "ReyKan",
      src: "assets/images/users/u1.png",
    },
    anna: {
      name: "Anna",
      src: "assets/images/users/u0.png",
    },
    KP: {
      name: "KP",
      src: "assets/images/users/u3.png",
    },
    lily: {
      name: "Lily",
      src: "assets/images/users/u2.png",
    },
  };

  const [comments, setComments] = useState([
    {
      UserID: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["lily"],
      rating: 5,
      createdAt: "2023-10-03 12:00:00",
    },
    {
      UserID: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["anna"],
      rating: 4,
      createdAt: "2022-09-03 11:00:00",
    },
    {
      UserID: 3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["KP"],
      rating: 2,
      createdAt: "2023-02-02 10:00:00",
    },
  ]);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
    setFormData((prevData) => ({
      ...prevData,
      newComment: newComment,
    }));
  };

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("commentsData", JSON.stringify(data));
    console.log("Data saved:", JSON.stringify(data)[0]);
  };

  useEffect(() => {
    saveDataToLocalStorage({ comments, formData });
  }, [comments, formData]);

  return (
    <>
      <Navbar />
      <div className="mainRating">
        <FeedbackRating
          title="This NGO"
          onChange={(value) => handleInputChange("rating", value)}
          />
        <Comment
          users={users}
          comments={comments}
          addComment={addComment}
          formData={formData}
          />
      </div>
          </>
  );
};

export default Ratings;
