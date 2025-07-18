import React, { useState } from "react";
import scss from "./Help.module.scss";
import Banner from "../../components/Banner/Banner";
import { IoSearch } from "react-icons/io5";
import { helpArr } from "../../constants/Help";
import { FaChevronDown } from "react-icons/fa6";

function Help() {
  const [open, setOpen] = useState(null);

  const cards = helpArr.map((el, index) => (
    <div key={index} className={scss.block}>
      <h2>{el.title}</h2>
      <article>
        {el.info.map(({ id, question, answer }) => (
          <div key={id} className={scss.item}>
            <div
              className={scss.top}
              onClick={() => setOpen(open === id ? null : id)}
            >
              <h3>{question}</h3>
              <span
                className={`${scss.arrow} ${open === id ? scss.rotated : ""}`}
              >
                <FaChevronDown color="#282828" />
              </span>
            </div>
            {open === id && (
              <div className={`${scss.answer} ${open ? scss.opened : ""}`}>
                {answer.map((ans, idx) => (
                  <p key={idx}>
                    {ans}
                    <br />
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </article>
    </div>
  ));
  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Нужна помощь?"}
          text={
            "Мы собрали ответы на самые популярные вопросы, чтобы вы нашли решение быстрее. Если не нашли нужную информацию — напишите нам."
          }
        />
        <div className={scss.heading}>
          <h2>Часто задаваемые вопросы?</h2>
          <div className={scss.search_bar}>
            <span>
              <IoSearch size={22} color="#9E9E9E" />
            </span>
            <input
              type="text"
              placeholder="Введите вопрос или ключевое слово"
            />
          </div>
        </div>
        <main>{cards}</main>
      </div>
    </div>
  );
}

export default Help;
