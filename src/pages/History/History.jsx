import React from "react";
import scss from "./History.module.scss";
import Banner from "../../components/Banner/Banner";

function History() {
  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"История Kyrgyz Concept"}
          text={
            "С 1990 года мы сопровождаем перемены и создаём возможности  от первого авиабилета до международных конференций, от туров по Кыргызстану до глобального образования."
          }
        />
      </div>
    </div>
  );
}

export default History;
