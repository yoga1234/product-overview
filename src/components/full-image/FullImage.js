import React, { useState } from "react";

import "./FullImage.css";

import {
  iconNext,
  iconPrev,
  iconCloseWhite,
  imageProduct1,
  imageProduct1Tmb,
  imageProduct2,
  imageProduct2Tmb,
  imageProduct3,
  imageProduct3Tmb,
  imageProduct4,
  imageProduct4Tmb,
} from "../../assets";

const closeHandle = () => {
  document.querySelector(".fullimage-overview").style.display = "none";
  document.body.style.overflow = "visible";
};

const FullImage = () => {
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
    <div className="fullimage-overview">
      <div className="fullimage-main-image">
        <img
          src={mainActive}
          alt="main overview"
          className="fullimage-main-image-overview"
        />
        <div className="arrow-container">
          <img
            onClick={closeHandle}
            className="icon-close"
            src={iconCloseWhite}
            alt="close"
          />
          <img
            onClick={() => {
              imageActive <= 1
                ? setImageActive("4")
                : setImageActive((Number(imageActive) - 1).toString());
            }}
            className="arrow-button"
            src={iconPrev}
            alt="order prev"
          />
          <img
            onClick={() => {
              imageActive >= 4
                ? setImageActive("1")
                : setImageActive((Number(imageActive) + 1).toString());
            }}
            className="arrow-button"
            src={iconNext}
            alt="order next"
          />
        </div>
      </div>
      <div className="fullimage-mini-image">
        <img
          src={imageProduct1Tmb}
          alt="mini overview"
          className={
            imageActive === "1"
              ? "fullimage-mini-image-overview active"
              : "fullimage-mini-image-overview"
          }
          onClick={() => setImageActive("1")}
        />
        <img
          src={imageProduct2Tmb}
          alt="mini overview"
          className={
            imageActive === "2"
              ? "fullimage-mini-image-overview active"
              : "fullimage-mini-image-overview"
          }
          onClick={() => setImageActive("2")}
        />
        <img
          src={imageProduct3Tmb}
          alt="mini overview"
          className={
            imageActive === "3"
              ? "fullimage-mini-image-overview active"
              : "fullimage-mini-image-overview"
          }
          onClick={() => setImageActive("3")}
        />
        <img
          src={imageProduct4Tmb}
          alt="mini overview"
          className={
            imageActive === "4"
              ? "fullimage-mini-image-overview active"
              : "fullimage-mini-image-overview"
          }
          onClick={() => setImageActive("4")}
        />
      </div>
    </div>
  );
};

export default FullImage;
