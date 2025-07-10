import React from "react";
import scss from "./Info.module.scss";
import { infoArr } from "../../constants/Info";
import { Link } from "react-router-dom";

function Info() {
  const cards = infoArr.map(({ statistic, title, desc, main }, index) => (
    <div key={index} className={scss.card}>
      <h2>{statistic}</h2>
      {title && <p className={scss.title}>{title}</p>}
      <span>{desc}</span>
      {main && (
        <Link to="/" className={scss.moreBtn}>
          Узнать больше
        </Link>
      )}
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>{cards}</div>
    </div>
  );
}

export default Info;
