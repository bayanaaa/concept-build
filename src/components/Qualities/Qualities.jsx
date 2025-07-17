import React from "react";
import scss from "./Qualities.module.scss";
import { qualityArr } from "../../constants/Qualities";

function Qualities() {
  const cards = qualityArr.map(({ num, title, desc }, index) => (
    <div key={index} className={scss.card}>
      <div className={scss.block1}>
        <span>{num}.</span> <span>{title}</span>
      </div>
      <div className={scss.block2}>{desc}</div>
    </div>
  ));

  return (
    <div className={scss.content}>
      <section className={scss.box1}>
        <div>
          7 качеств сотрудников <p>Kyrgyz Concept</p>
        </div>
        <span>
          Мы верим, что сила компании в людях. Наши сотрудники это не просто
          специалисты, а носители ценностей, которые формируют культуру и успех
          Kyrgyz Concept.
        </span>
      </section>
      <section className={scss.box2}>{cards}</section>
    </div>
  );
}

export default Qualities;
