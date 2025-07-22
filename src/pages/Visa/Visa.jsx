import React, { useState } from "react";
import scss from "./Visa.module.scss";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/imagee.jpg";
import {
  dataArr,
  visaArr,
  visaArr2,
  visaArr3,
  visaArr4,
} from "../../constants/Visa";
import { LuSearch } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Visa() {
  const [open, setOpen] = useState(null);

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
        <div className={scss.group}>
          <span>№</span> <span>Страна</span>
        </div>{" "}
        <span>Максимальный срок пребывания</span>
      </div>
      <main className={scss.main}>
        {el.info.map(({ num, name, days }) => (
          <div className={scss.item} key={num}>
            <div className={scss.group}>
              {" "}
              <span className={scss.num}>{num}</span>
              <div className={scss.country}>
                <div className={scss.img}></div>
                <span>{name}</span>
              </div>
            </div>
            <span className={scss.days}>{days}</span>
          </div>
        ))}
      </main>
    </div>
  ));

  const company_info = visaArr3.map((el, index) => (
    <div className={scss.info_card} key={index}>
      <h2>{el.heading}</h2>
      <p className={scss.intro}>{el.intro}</p>
      <div className={scss.texts}>
        {el.info.map(({ img, title }, idx) => (
          <article key={idx}>
            <img src={img} alt="icon" />
            {title}
          </article>
        ))}
      </div>
    </div>
  ));

  const proccess = dataArr.map((el) => (
    <div className={scss.proccess_block}>
      <div key={el.num} className={scss.proccess_card}>
        <h4>{el.num}</h4> <span>{el.desc}</span>
      </div>
      <p className={scss.line}></p>
    </div>
  ));

  const QA = visaArr4.map((el) => (
    <div className={scss.qa_card} key={el.id}>
      <article onClick={() => setOpen(open === el.id ? null : el.id)}>
        <h3>{el.ques}</h3>
        <span className={`${scss.icon} ${open === el.id ? scss.rotated : ""}`}>
          <FaChevronDown />
        </span>
      </article>

      <div
        className={`${scss.answer_wrapper} ${open === el.id ? scss.open : ""}`}
      >
        <span className={scss.answer}>{el.ans}</span>
      </div>
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
          <div className="d-flex justify-content-center ">
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
            стран сроком до 60 <br /> дней. Актуальную информацию уточняйте на
            сайте МИД: mfa.gov.kg
          </p>
          <main className={scss.information}>
            {data} {data}
          </main>
        </div>
        <div className={scss.visa4}>
          <h2>Страны куда граждане Кыргызстана могут поехать без визы</h2>
          <p>
            Перечень стран, куда граждане КР могут поехать без виз. Освобождение
            действует для <br /> владельцев всех категорий паспортов. Уточняйте
            детали на mfa.gov.kg
          </p>
          <main className={scss.information}>
            {data} {data}
          </main>
        </div>
        <div className={scss.visa6}>
          <h2>Процесс оформления</h2>
          <div className={scss.proccess}>{proccess}</div>
        </div>
        <div className={scss.visa7}>{company_info}</div>
        <div className={scss.visa8}>
          <h2>
            Часто задаваемые <br /> вопросы?
          </h2>
          <div className={scss.qa_block}>{QA}</div>
        </div>
        <div className={scss.visa9}>
          <article>
            <h2>
              Получить бесплатную консультацию <br />
              по оформлению визы
            </h2>
            <span>
              Проконсультируем, поможем советом и найдем ответы на <br /> любые
              ваши вопросы
            </span>
            <Link to="/contacts" className={scss.link}>
              Получить консультацию
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Visa;
