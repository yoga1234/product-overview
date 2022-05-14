import React from "react";
import "./LeftSide.css";

import {
  imageProduct1,
  imageProduct1Tmb,
  imageProduct2,
  imageProduct2Tmb,
  imageProduct3,
  imageProduct3Tmb,
  imageProduct4,
  imageProduct4Tmb,
} from "../../../assets";

const LeftSide = () => {
  return (
    <div className="left-container">
      <div className="main-image">
        <img
          src={imageProduct1}
          alt="main overview"
          className="main-image-overview"
        />
      </div>
      <div className="mini-image">
        <img
          src={imageProduct1Tmb}
          alt="mini overview"
          className="mini-image-overview"
        />
        <img
          src={imageProduct2Tmb}
          alt="mini overview"
          className="mini-image-overview"
        />
        <img
          src={imageProduct3Tmb}
          alt="mini overview"
          className="mini-image-overview"
        />
        <img
          src={imageProduct4Tmb}
          alt="mini overview"
          className="mini-image-overview"
        />
      </div>
    </div>
  );
};

export default LeftSide;
