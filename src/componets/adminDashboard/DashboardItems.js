import React from "react";
import "./AdminDashboard.css";
import DashboardItem from "./DashboardItem";

function DashboardItems() {
  return (
    <>
      <div id="mainContainerDashBoard">
        <h2>Admin DashBoard</h2>
        <hr />
        <div className="boxDash">
          <div className="mainDash">
            <div
              className=" isPlaceholders"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-evenly",
                justifyContent: "space-evenly",
              }}
            >
              <DashboardItem
                iconClass="fa-users"
                bgColor="#8561C8"
                link="#"
                count="10"
                title="NGOs"
              />
              <DashboardItem
                iconClass="fa-user"
                bgColor="#00B8ED"
                link="#"
                count="20"
                title="Users"
              />
              <DashboardItem
                iconClass="fa-comment"
                bgColor="#68C182"
                link="#"
                count="5"
                title="Reviews"
              />
              <DashboardItem
                iconClass="fa-blog"
                bgColor="#FFB54D"
                link="#"
                count="8"
                title="Blog"
              />
              <DashboardItem
                iconClass="fa-info-circle"
                bgColor="#989fa8"
                link="#"
                count="3"
                title="Report"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardItems;
