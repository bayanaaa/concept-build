import React from "react";
import scss from "./Vacancies.module.scss";
import Banner from "../../components/Banner/Banner";
import { IoSearch } from "react-icons/io5";
import { vacArr } from "../../constants/Vacancies";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { PiBuildingsBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";

function Vacancies() {
  const { pathname } = useLocation();

  const cards = vacArr.map((el, index) => (
    <div key={index} className={scss.card}>
      <div className={scss.upper_part}>
        <p className={scss.icon}>
          <PiBuildingsBold color="#005B7D" size={20} />
        </p>
        <span>{el.date}</span>
      </div>
      <h2>{el.position}</h2>
      <p className={scss.employed_at}>{el.where}</p>
      <div className={scss.info}>
        <div className={scss.info_child}>
          <p className={scss.icon2}>
            <CiLocationOn size={18} />
          </p>
          {el.info}
        </div>
        <div className={scss.info_child}>
          <p className={scss.icon2}>
            <FaBriefcase size={18} />
          </p>
          {el.info2}
        </div>
      </div>
      <div className={scss.skills}>
        <p>Требуемые навыки</p>
        <span className={scss.skills_child}>{el.skills}</span>
        <span className={scss.skills_child}>{el.skills2}</span>
        <span className={scss.skills_child}>{el.skills3}</span>
      </div>
      <p className={scss.btn}>
        <a href="#">Откликнуться</a>
      </p>
    </div>
  ));

  const cards2 = vacArr.slice(0, 3).map((el, index) => (
    <div key={index} className={scss.card}>
      <div className={scss.upper_part}>
        <p className={scss.icon}>
          <PiBuildingsBold color="#005B7D" size={20} />
        </p>
        <span>{el.date}</span>
      </div>
      <h2>{el.position}</h2>
      <p className={scss.employed_at}>{el.where}</p>
      <div className={scss.info}>
        <div className={scss.info_child}>
          <p className={scss.icon2}>
            <CiLocationOn size={18} />
          </p>
          {el.info}
        </div>
        <div className={scss.info_child}>
          <p className={scss.icon2}>
            <FaBriefcase size={18} />
          </p>
          {el.info2}
        </div>
      </div>
      <div className={scss.skills}>
        <p>Требуемые навыки</p>
        <span className={scss.skills_child}>{el.skills}</span>
        <span className={scss.skills_child}>{el.skills2}</span>
        <span className={scss.skills_child}>{el.skills3}</span>
      </div>
      <p className={scss.btn}>
        <a href="#">Откликнуться</a>
      </p>
    </div>
  ));
  return (
    <>
      {pathname !== "/about" ? (
        <div className="containerr">
          <div className={scss.content}>
            <Banner
              title={"Присоединяйтесь к команде Kyrgyz Concept!"}
              text={
                "Мы не просто компания, мы — сообщество профессионалов, объединённых общей миссией. Если вы ищете работу, где ценят рост, инициативу и заботу — вы по адресу."
              }
            />
            <div className={scss.vac_content}>
              <div className={scss.top}>
                <div className={scss.leftPart}>
                  <h2>Открытые вакансии</h2>
                  <p>Найдено 212 вакансий</p>
                </div>
                <div className={scss.search}>
                  <IoSearch size={20} color="#9E9E9E" />
                  <input type="text" placeholder="Поиск" />
                </div>
              </div>
              <main>{cards}</main>
            </div>
          </div>
        </div>
      ) : (
        <section className={scss.ver2}>
          <header>
            <h2>Открытые вакансии</h2>
            <a href="/vacancies">
             <p className="m-0"> Смотреть все вакансии{" "}</p>
              <span className={scss.icon}>
                <FaArrowUp style={{ transform: "rotate(45deg)" }} />
              </span>
            </a>
          </header>
          <main>{cards2}</main>
        </section>
      )}
    </>
  );
}

export default Vacancies;
