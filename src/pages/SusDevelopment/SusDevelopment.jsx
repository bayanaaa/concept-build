import React from "react";
import scss from "./SusDevelopment.module.scss";
import Banner from "../../components/Banner/Banner";
import { GoGoal } from "react-icons/go";
import { BsArrowRepeat } from "react-icons/bs";
import { susArr, susArr2 } from "../../constants/Sus";
import icon2 from "../../assets/icon2.svg";
import icon from "../../assets/icon.svg";

function SusDevelopment() {
  const item1 = susArr.map((el, index) => (
    <div key={index} className={scss.card_text}>
      <img src={icon2} alt="Icon" />
      {el}
    </div>
  ));

  const item2 = susArr2.map((el, index) => (
    <div key={index} className={scss.card_text}>
      <img src={icon} alt="Icon" />
      {el}
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Устойчивое развитие"}
          text={"Миссия по устойчивому развитию"}
        />
        <main>
          <div className={scss.card}>
            <span className={scss.icon}>
              <BsArrowRepeat color="#005B7D" />
            </span>
            <h2>Устойчивое развитие</h2>
            <p className={scss.text}>
              В современном мире экологические, экономические и культурные
              вызовы становятся всё более актуальными. Многие из них приобретают
              кризисный характер — и это требует новых подходов. Всё больше
              стран и компаний стремятся выстроить деятельность в гармонии с
              природой и потребностями местных сообществ.
            </p>
            <p className={scss.text2}>
              Kyrgyz Concept — часть этого глобального процесса. Мы не остаёмся
              в стороне и стремимся к развитию, которое учитывает баланс между
              природой, обществом и экономикой.
            </p>
          </div>

          <div className={scss.card}>
            <h2>Что мы делаем?</h2>
            {item1}
          </div>
          <div className={scss.card}>
            <h2>Наш подход</h2>
            <p className={scss.p}>
              Мы адаптируем международные стандарты устойчивого развития в сфере
              туризма, чтобы:
            </p>
            {item2}
          </div>
          <div className={scss.card}>
            <span className={scss.icon2}>
              <GoGoal color="#7FA629" />
            </span>
            <h2>Почему это важно?</h2>
            <p className={scss.t1}>
              Мы верим, что туризм может быть силой добра — и стать источником
              поддержки для природы, людей и культур. <br /> Устойчивое развитие
              — это не тренд.
            </p>
            <p className={scss.t2}>
              Это обязательство. <br />И мы берём на себя эту ответственность.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SusDevelopment;
