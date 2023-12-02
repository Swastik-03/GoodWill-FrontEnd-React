import React from "react";
import "./AdminDashboard.css";
import NavAdmin from "./NavAdmin";
import DashboardItems from "./DashboardItems";
import AllComments from "../Rating/AllComments";
import Graph from "./Graph";
function MainDashboard() {
  const users = {
    Harper: {
      name: "Harper",
      src: "assets/images/users/u1.png",
    },
    Maya: {
      name: "Maya",
      src: "assets/images/users/u0.png",
    },
    Oliver: {
      name: "Oliver",
      src: "assets/images/users/u3.png",
    },
    Zoe: {
      name: "Zoe",
      src: "assets/images/users/u2.png",
    },
    Sebastian: {
      name: "Sebastian",
      src: "assets/images/users/u6.png",
    },
    Ava: {
      name: "Ava",
      src: "assets/images/users/u4.png",
    },
  };

  const comments = [
    {
      UserID: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["Zoe"],
      createdAt: "2023-11-03 12:00:00",
    },
    {
      UserID: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["Maya"],
      createdAt: "2020-09-03 11:00:00",
    },
    {
      UserID: 4,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["Ava"],
      createdAt: "2022-03-03 11:00:00",
    },
    {
      UserID: 5,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["Oliver"],
      createdAt: "2023-06-02 10:00:00",
    },
    {
      UserID: 6,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur eum non!",
      author: users["Sebastian"],
      createdAt: "2022-09-03 11:00:00",
    },
  ];
  return (
    <>
      <NavAdmin />
      <DashboardItems />
      <div className="mainArea">
        <div className="graphArea">
          <Graph />
        </div>
        <div className="messagesArea">
          <center>
            <h2>Messages</h2>
          </center>
          <hr/>
          <AllComments users={users} comments={comments} showStars={false} />
        </div>
      </div>
    </>
  );
}
export default MainDashboard;
