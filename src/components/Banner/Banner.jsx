import React from "react";
import scss from "./Banner.module.scss";

function Banner({ title, text }) {
  return (
    <div className={scss.banner}>
      <h2>{title}</h2>
      <p className={scss.intro}>{text}</p>
    </div>
  );
}

export default Banner;
