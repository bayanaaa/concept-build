import React from "react";
import scss from "./Visa.module.scss";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/imagee.jpg";
import { visaArr, visaArr2 } from "../../constants/Visa";
import { LuSearch } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";

function Visa() {
  const cards = visaArr.map(({ id, icon: Icon, title, desc }) => (
    <div key={id} className={scss.card}>
      <span className={scss.icon}>
        <Icon color="#005B7D" />
      </span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  ));

  const data = visaArr2.map((el, index) => (
    <div key={index} className={scss.block}>
      <div className={scss.header}>
        {" "}
        <span>№</span> <span>Страна</span>{" "}
        <span>Максимальный срок пребывания</span>
      </div>
      <main className={scss.main}>
        {el.info.map(({ flag, num, name, days }) => (
          <div className={scss.item} key={num}>
            <span className={scss.num}>{num}</span>
            <div className={scss.country}>
              <img src={flag} alt="flag" />
              {name}
            </div>
            <p className={scss.days}>{days}</p>
          </div>
        ))}
      </main>
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Визовая поддержка"}
          text={
            "Помогаем с оформлением виз в более чем 50 стран быстро, надёжно и с заботой о каждой детали"
          }
        />
        <div className={scss.visa1}>
          <img src={image} alt="image" />
          <section className={scss.info}>
            <article>
              <h2>Что такое визовая поддержка?</h2>
              <span>
                Это профессиональная помощь в подготовке, оформлении и подаче
                документов для получения визы в консульства различных стран. Мы
                помогаем туристам, студентам, бизнесменам и другим категориям
                граждан получить визу без лишнего стресса.
              </span>
            </article>
          </section>
        </div>
        <div className={scss.visa2}>
          <h2>
            Кому подойдёт <br /> визовая поддержка?
          </h2>
          <div className={scss.cards}>{cards}</div>
        </div>
        <div className={scss.visa3}>
          <h2>Узнайте всё о визе в нужную страну</h2>
          <span>
            Введите название страны, чтобы быстро получить актуальную информацию
            о визах
          </span>
          <div className={scss.search_bar}>
            <span>
              <LuSearch size={18} />
            </span>
            <input
              type="text"
              placeholder="Введите страну для визовой информации"
            />
            <span>
              <FaAngleDown />
            </span>
          </div>
          <iframe
            style={{ marginTop: "40px", borderRadius: "30px" }}
            src="https://yandex.com/map-widget/v1"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <div className={scss.visa4}>
          <h2>Страны с безвизовым режимом для въезда в Кыргызстан</h2>
          <p>
            В соответствии с Законом КР, от виз освобождаются граждане ряда
            стран сроком до 60 <br /> дней. Актуальную информацию уточняйте на сайте
            МИД: mfa.gov.kg
          </p>
          <main>{data} {data}</main>
        </div>
      </div>
    </div>
  );
}

export default Visa;
