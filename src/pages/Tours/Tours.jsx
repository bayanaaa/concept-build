import React from "react";
import scss from "./Tours.module.scss";
import Banner from "../../components/Banner/Banner";
import tour from '../../assets/tour.svg'

function Tours() {
  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Откройте мир с Kyrgyz Concept"}
          text={
            "Готовые туры за рубеж из Бишкека горящие предложения, лучшие цены и безупречный сервис."
          }
        />
        <main >
        </main>
      </div>
    </div>
  );
}

export default Tours;
