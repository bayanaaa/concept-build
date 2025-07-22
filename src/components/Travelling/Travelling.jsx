import React, { useState } from "react";
import scss from "./Travelling.module.scss";
import { travelArr, travelData } from "../../constants/Travelling";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Travelling() {
  const [chosen, setChosen] = useState("Города");

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

  // const cards = filtered_cards.map((el, index) => (
  //   <div
  //     key={index}
  //     className={scss.card}
  //     style={{ background: `url(${el.image})` }}
  //   >
  //     <div className={scss.rating}>
  //       <p className={scss.star}>
  //         <FaStar />
  //       </p>
  //       {el.rating}
  //     </div>
  //     <div className={scss.info}>
  //       <span className={scss.city}>
  //         {el.city}
  //         <span>{el.price}</span>
  //       </span>
  //       <div className={scss.country}>
  //         <p className={scss.location}>
  //           <IoLocationOutline size={22} />
  //         </p>
  //         {el.country}
  //       </div>
  //     </div>
  //   </div>
  // ));

  const cards = filtered_cards.map((el, index) => (
    <div key={index} className={scss.card}>
      <img src={el.image} alt="image" />
      <div className={scss.top}>
        <h3>{el.city}</h3>
        <h3>{el.price}</h3>
      </div>
      <p>{el.about}</p>
      <p>{el.when}</p>
      <div className={scss.country}>
        <span className={scss.icon}>
          <IoLocationOutline />
        </span>
        {el.country}
      </div>
    </div>
  ));
  return (
    <div className="containerr">
      <div className={scss.content}>
        <h1>Путешествуйте по миру без стресса с <br />поддержкой наших экспертов</h1>
        <nav>{choices}</nav>
        <main>{cards}</main>
        <div className="d-flex justify-content-center">
          <Link to="/" className={scss.moreBtn}>
            Смотреть все
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Travelling;
