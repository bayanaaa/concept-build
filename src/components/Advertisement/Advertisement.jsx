import React from "react";
import scss from "./Advertisement.module.scss";
import ad1 from "../../assets/ad1.png";
import ad2 from "../../assets/ad2.png";
import ad3 from "../../assets/ad3.png";

const ads = [ad1, ad2, ad3, ad1, ad2, ad3];

function Advertisement() {
  const adverts = ads.map((el, index) => <img src={el} key={index} />);
  return <div className={scss.content}>{adverts}</div>;
}

export default Advertisement;
