import React from "react";
import scss from "./Offers.module.scss";
import { offerArr } from "../../constants/Offers";

function Offers() {
  const cards = offerArr.map(({ image, title }, index) => (
    <div key={index} style={{ background: `url(${image})` }}>
      <p>{title}</p>
    </div>
  ));
  return (
    <div className="containerr">
      <div className={scss.content}>
        <main>{cards}</main>
      </div>
    </div>
  );
}

export default Offers;
