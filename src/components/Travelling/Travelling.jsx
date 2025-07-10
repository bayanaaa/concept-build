import React, { useState } from "react";
import scss from "./Travelling.module.scss";
import { travelArr, travelData } from "../../constants/Travelling";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Travelling() {
  const [chosen, setChosen] = useState("City");

  const choices = travelArr.map(({ icon: Icon, title }, index) => (
    <div
      key={index}
      className={`${scss.choice} ${chosen === title ? scss.active : ""}`}
      onClick={() => setChosen(title)}
    >
      <p className={scss.icon}>
        <Icon />
      </p>
      {title}
    </div>
  ));

  const filtered_cards = travelData.filter((el) => el.type === chosen);

  const cards = filtered_cards.map((el, index) => (
    <div
      key={index}
      className={scss.card}
      style={{ background: `url(${el.image})` }}
    >
      <div className={scss.rating}>
        <p className={scss.star}>
          <FaStar />
        </p>
        {el.rating}
      </div>
      <div className={scss.info}>
        <span className={scss.city}>
          {el.city}
          <span>{el.price}</span>
        </span>
        <div className={scss.country}>
          <p className={scss.location}>
            <IoLocationOutline size={22} />
          </p>
          {el.country}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>
        <h1>
          Travel the world stress free with <br /> our expert agency support
        </h1>
        <nav>{choices}</nav>
        <main>{cards}</main>
        <div className="d-flex justify-content-center">
          <Link to="/" className={scss.moreBtn}>
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Travelling;
