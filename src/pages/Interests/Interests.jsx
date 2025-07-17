import React from "react";
import scss from "./Interests.module.scss";
import Banner from "../../components/Banner/Banner";
import { interArr } from "../../constants/Interests";
import icon from "../../assets/icon.svg";

function Interests() {
  const cards = interArr.map((el, index) => (
    <div key={index} className={scss.card}>
      <img src={icon} alt="Icon" />
      {el}
    </div>
  ));
  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Положение о конфликте интересов"}
          text={"Текст положения"}
        />
        <main>{cards}</main>
      </div>
    </div>
  );
}

export default Interests;
