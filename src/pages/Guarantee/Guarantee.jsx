import React from "react";
import scss from "./Guarantee.module.scss";
import Banner from "../../components/Banner/Banner";
import people from "../../assets/people.svg";
import { FaArrowDown } from "react-icons/fa6";
import { guarantArr, guarantPart } from "../../constants/Guarantee";
import Reviews from "../../components/Reviews/Reviews";
import { IoCallOutline } from "react-icons/io5";

import { MdOutlineMailOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

function Guarantee() {
  const { pathname } = useLocation();

  const cards = guarantArr.map((el, index) => (
    <div key={index} className={scss.card}>
      <span>{el.num}.</span>
      <article>
        <h2>{el.title}</h2>
        <p>{el.desc}</p>
      </article>
    </div>
  ));

  const partners = guarantPart.map((el, index) => (
    <div key={index} className={scss.partner}>
      <img src={el} alt="Partner" />
    </div>
  ));

  return (
    <>
      {pathname !== "/about" ? (
        <div className="containerr">
          <div className={scss.content}>
            <Banner
              title={"10 гарантий сервиса Kyrgyz Concept"}
              text={
                "Мы отвечаем за качество  с нами вы всегда получаете честные цены, надёжный сервис и заботу. Эти 10 гарантий  наша обязанность, а не просто обещание."
              }
            />
            <section className={scss.about1}>
              <div className={scss.box1}>
                <article>
                  <h2>2 350 000+</h2>
                  <p>клиентов уже выбрали нас</p>
                </article>
                <img src={people} alt="photo" />
              </div>
              <div className={scss.box2}>
                <div>
                  <h2>
                    Нас выбирают, потому что мы даём реальные гарантии
                    честности, качества и заботы — узнай больше о наших 10
                    принципах сервиса.
                  </h2>
                  <span className={scss.icon}>
                    <FaArrowDown />
                  </span>
                </div>
              </div>
            </section>
            <section className={scss.about2}>{cards}</section>
            <section className={scss.about3}>
              {" "}
              <h2>Отзывы</h2> <Reviews />{" "}
            </section>
            <section className={scss.about4}>
              <h2>Наши партнеры</h2>
              <main>{partners}</main>
            </section>
            <section className={scss.about5}>
              <div className={scss.info}>
                <h3>Контроль качества</h3>
                <p>
                  Если какая-либо из гарантий была нарушена мы <br />{" "}
                  обязательно разберёмся и примем меры.
                </p>
                <div className={scss.contacts}>
                  <a href="tel:+996559900883">
                    <span>
                      <IoCallOutline />
                    </span>
                    +996 559 900 883
                  </a>
                  <a href="mailto:tqm@concept.kg">
                    <span>
                      <MdOutlineMailOutline />
                    </span>
                    tqm@concept.kg
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <>
          <section className={scss.about1} style={{ marginTop: "60px" }}>
            <div className={scss.box1}>
              <article>
                <h2>2 350 000+</h2>
                <p>клиентов уже выбрали нас</p>
              </article>
              <img src={people} alt="photo" />
            </div>
            <div className={scss.box2}>
              <div>
                <h2>
                  Нас выбирают, потому что мы даём реальные гарантии честности,
                  качества и заботы — узнай больше о наших 10 принципах сервиса.
                </h2>
                <a href="/guarantee" className={scss.icon}>
                  <FaArrowDown style={{ transform: "rotate(270deg)" }} />
                </a>
              </div>
            </div>
          </section>
          <section className={scss.about4} style={{ marginTop: "60px" }}>
            <h2>Наши партнеры</h2>
            <main>{partners}</main>
          </section>
        </>
      )}
    </>
  );
}

export default Guarantee;
