import React from "react";
import scss from "./Beliefs.module.scss";
import Banner from "../../components/Banner/Banner";
import { belArr1 } from "../../constants/Beliefs";
import icon from "../../assets/icon.svg";
import camera from "../../assets/L-Camera.svg";
import link from "../../assets/L-Link.svg";
import goal from "../../assets/L-Goal.svg";
import light from "../../assets/L-Lightning.svg";
import search from "../../assets/L-Search.svg";
import { useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Beliefs() {
  const { pathname } = useLocation();

  const info = belArr1.map(({ title, text }, index) => (
    <div className={scss.info_card} key={index}>
      <img src={icon} alt="icon" />
      <article>
        <span className={scss.title}>{title}</span>
        <span className={scss.text}>{text}</span>
      </article>
    </div>
  ));

  return (
    <>
      {pathname !== "/about" ? (
        <div className="containerr">
          <div className={scss.content}>
            <Banner
              title={"Кто мы и во что верим?"}
              text={
                "Всё, что мы делаем, строится на доверии, уважении и ответственности. Мы работаем ради людей — клиентов, партнёров, общества — и придерживаемся принципов, которые отражают наш внутренний курс и корпоративную культуру."
              }
            />
            <section className={scss.belief1}>
              <div className={scss.box1}>
                <h2>Наша философия</h2>
                <span>
                  Мы верим, что качественные товары и услуги это не
                  единственное, что делает компанию сильной. Мы стремимся
                  развивать культуру заботы: о клиентах, друг о друге и об
                  обществе. Наша миссия создавать более благополучное и
                  устойчивое будущее, внося вклад в развитие страны.
                </span>
              </div>
              <div className={scss.box2}>{info}</div>
            </section>
            <main>
              <div className={`${scss.principle_card} ${scss.main}`}>
                <img src={camera} alt="image" />{" "}
                <article>
                  <h3>"Nomad"</h3>
                  <span>
                    Мы эффективно используем ресурсы, ценим экологичность и не
                    идём на компромиссы с этикой ради выгоды. Надёжные,
                    долгосрочные отношения важнее быстрой прибыли.
                  </span>
                </article>
              </div>
              <div className={scss.principle_card}>
                <img src={link} alt="image" />{" "}
                <article>
                  <h3>“Ferry”</h3>
                  <span>
                    Мы соединяем интересы клиентов и поставщиков, рассматривая
                    все альтернативы и выбирая лучшее решение для обеих сторон.
                  </span>
                </article>
              </div>
              <div className={scss.principle}>
                <h2>Наши принципы</h2>
              </div>

              <div className={scss.principle_card}>
                <img src={search} alt="image" />{" "}
                <article>
                  <h3>«Reasonable Doubt»</h3>
                  <span>
                    Мы действуем вдохновенно и легко. Ценности и цели нас
                    заряжают, а путь к их достижению начинается с первого
                    простого шага. Гибкость и скорость помогают нам двигаться
                    вперёд.
                  </span>
                </article>
              </div>
              <div className={scss.principle_card}>
                <img src={goal} alt="image" />{" "}
                <article>
                  <h3>«High»</h3>
                  <span>
                    Мы ставим высокие цели и достигаем их глобально думая,
                    локально действуя.
                  </span>
                </article>
              </div>
              <div className={scss.principle_card}>
                <img src={light} alt="image" />{" "}
                <article>
                  <h3>«Easy»</h3>
                  <span>
                    Мы вдохновляемся ценностями, начинаем с малого и двигаемся
                    легко, гибко и быстро.
                  </span>
                </article>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div className={scss.parent}>
          <section className={scss.child1}>
            <span>
              Мы верим в честность, уважение и стремление к лучшему. Наши
              ценности определяют стиль работы, а принципы как мы принимаем
              решения. Это не просто слова — это основа доверия и роста.
            </span>
          </section>
          <section className={scss.child2}>
            <h3>Философия, ценности, принципы.</h3>
            <a href="/beliefs"> Узнать больше
              <span className={scss.icon}>
                <FaArrowRight />
              </span>
            </a>
          </section>
        </div>
      )}
    </>
  );
}

export default Beliefs;
