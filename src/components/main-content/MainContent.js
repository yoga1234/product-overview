import React from "react";
import LeftSide from "./left-side/LeftSide";
import "./MainContent.css";
import RightSide from "./right-side/RightSide";

const MainContent = () => {
  return (
    <div className="main-content">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default MainContent;
