import React, { useState } from "react";
import scss from "./Vip.module.scss";
import Banner from "../../components/Banner/Banner";
import { gallaryArr, vipArr } from "../../constants/Vip";
import { GrLocation } from "react-icons/gr";
import icon from "../../assets/icon.svg";

const navArr = ["Бишкек", "Алмата", "Ош", "Бизнес зал"];

function Vip() {
  const [chosen, setChosen] = useState("Бишкек");

  const navs = navArr.map((el, index) => (
    <div
      onClick={() => setChosen(el)}
      className={chosen === el ? scss.active : ""}
      key={index}
    >
      {el}
    </div>
  ));

  const cards2 = vipArr
    .filter((el) => el.location === chosen)
    .map((el, idx) => (
      <div key={idx} className={scss.wrapper}>
        <h1>Услуги</h1>
        {el.service.map((item, index) => (
          <div key={index} className={scss.block}>
            <h2>{item.heading}</h2>
            <article>
              {item.serv_info.map((i, index) => (
                <div key={idx}>
                  <img src={icon} alt="icon" />
                  {i}
                </div>
              ))}
            </article>
          </div>
        ))}
      </div>
    ));

  const cards = vipArr
    .filter((el) => el.location === chosen)
    .map((el, idx) => (
      <div key={idx}>
        {el.info.map((item, index) => (
          <div key={index} className={scss.info}>
            <section className={scss.box1}>
              <h2>{item.title}</h2>
              <div>
                <span className={scss.icon}>
                  <GrLocation />
                </span>
                {item.place}
              </div>
            </section>
            <section className={scss.box2}>
              <span>{item.text1}</span>
              <span>{item.text2}</span>
              <span>{item.text3}</span>
              <span></span>
            </section>
          </div>
        ))}
      </div>
    ));

  const gallary = gallaryArr.map((el, index) => (
    <div key={index} className={scss.gallary}>
      <img src={el} alt="image" />
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"VIP и Бизнес-залы в аэропортах Бишкека, Оша и Алматы"}
          text={
            "Бронирование и премиальные услуги для тех, кто ценит комфорт, скорость и персональный подход."
          }
        />
        <div className={scss.nav_wrapper}><div className={scss.nav}>{navs}</div></div>
        <main>{cards}</main>
        <section>{cards2}</section>
        <section className={scss.section}>{gallary}</section>
      </div>
    </div>
  );
}

export default Vip;
