import { useState } from "react";
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

const pictureBigHandle = () => {
  document.querySelector(".fullimage-overview").style.display = "block";
  document.body.style.overflow = "hidden";
};

const LeftSide = () => {
  const [imageActive, setImageActive] = useState("1");
  let mainActive;
  if (imageActive === "1") {
    mainActive = imageProduct1;
  } else if (imageActive === "2") {
    mainActive = imageProduct2;
  } else if (imageActive === "3") {
    mainActive = imageProduct3;
  } else {
    mainActive = imageProduct4;
  }
  return (
    <div className="left-container">
      <div onClick={pictureBigHandle} className="main-image">
        <img
          src={mainActive}
          alt="main overview"
          className="main-image-overview"
        />
      </div>
      <div className="mini-image">
        <img
          src={imageProduct1Tmb}
          alt="mini overview"
          className={
            imageActive === "1"
              ? "mini-image-overview active"
              : "mini-image-overview"
          }
          onClick={() => setImageActive("1")}
        />
        <img
          src={imageProduct2Tmb}
          alt="mini overview"
          className={
            imageActive === "2"
              ? "mini-image-overview active"
              : "mini-image-overview"
          }
          onClick={() => setImageActive("2")}
        />
        <img
          src={imageProduct3Tmb}
          alt="mini overview"
          className={
            imageActive === "3"
              ? "mini-image-overview active"
              : "mini-image-overview"
          }
          onClick={() => setImageActive("3")}
        />
        <img
          src={imageProduct4Tmb}
          alt="mini overview"
          className={
            imageActive === "4"
              ? "mini-image-overview active"
              : "mini-image-overview"
          }
          onClick={() => setImageActive("4")}
        />
      </div>
    </div>
  );
};

export default LeftSide;
