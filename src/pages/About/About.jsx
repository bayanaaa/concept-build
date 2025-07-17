import React from "react";
import scss from "./About.module.scss";
import banner from "../../assets/banner.svg";
import Info from "../../components/Info/Info";
import Beliefs from "../Beliefs/Beliefs";
import Guarantee from "../Guarantee/Guarantee";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { Rotate } from "hamburger-react";
import Qualities from "../../components/Qualities/Qualities";
import Vacancies from "../Vacancies/Vacancies";

function About() {
  return (
    <div className="containerr">
      <div className={scss.content}>
        <img src={banner} className={scss.banner} alt="banner" />
        <Info />
        <Beliefs />
        <Guarantee />
        <section className={scss.parent}>
          <a href="/interests" className={scss.child1}>
            <h3>Положение о конфликте интересов</h3>
            <span className={scss.icon}>
              <FaArrowUp style={{ transform: "rotate(45deg)" }} />
            </span>
          </a>
          <a href="/sustainable-development" className={scss.child2}>
            <h3>Устойчивое развитие</h3>
            <span className={scss.icon}>
              <FaArrowUp style={{ transform: "rotate(45deg)" }} />
            </span>
          </a>
        </section>
        <Qualities />
        <Vacancies />
        <section className={scss.more_block}>
          <article>
            <h2>Хотите узнать о нас больше?</h2>
            <span>
              Свяжитесь с нами — мы открыты к диалогу и всегда готовы <br />{" "}
              рассказать больше о себе.
            </span>
            <a href="/contacts">Связаться с нами</a>
          </article>
        </section>
      </div>
    </div>
  );
}

export default About;
