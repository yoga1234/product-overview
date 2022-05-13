import React from "react";
import LeftSide from "./left-side/LeftSide";
import "./MainContent.css";
import RightSide from "./right-side/RightSide";

const MainContent = () => {
  return (
    <div>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default MainContent;
