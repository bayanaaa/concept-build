import React from "react";
import scss from "./Info.module.scss";
import { infoArr } from "../../constants/Info";
import { Link, useLocation } from "react-router-dom";

function Info() {
  const { pathname } = useLocation();

  const cards = infoArr.map(({ statistic, title, desc, main }, index) => (
    <div key={index} className={scss.card}>
      <h2>{statistic}</h2>
      {title && <p className={scss.title}>{title}</p>}
      <span>{desc}</span>
      {main && pathname === "/" && (
        <a href="/about" className={scss.moreBtn}>
          Узнать больше
        </a>
      )}
    </div>
  ));

  return (
    <>
      {pathname === "/" ? (
        <div className="containerr">
          <div className={scss.content}>{cards}</div>
        </div>
      ) : (
        <div className={scss.content}>{cards}</div>
      )}
    </>
  );
}

export default Info;
