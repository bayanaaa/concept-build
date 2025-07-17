import React from "react";
import scss from "./Contacts.module.scss";
import Banner from "../../components/Banner/Banner";
import { contArr, filArr, smArr } from "../../constants/Contacts";
import { FaLocationDot } from "react-icons/fa6";

function Contacts() {
  const data = contArr.map(({ icon: Icon, title, link, desc }, index) => (
    <div key={index} className={scss.contacts_info}>
      <span className={scss.icon}>
        <Icon />
      </span>
      <a href={link}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </a>
    </div>
  ));

  const socials = smArr.map((Icon, index) => (
    <span className={scss.sm} key={index}>
      <Icon color="#005B7D" size={22} />
    </span>
  ));

  const offices = filArr.map((el, index) => (
    <div
      key={index}
      className={scss.office_cards}
      style={{ background: `url(${el.img})` }}
    >
      <article>
        <h3>{el.title}</h3>
        <p>{el.address}</p>
        <a href={el.link}>
          <span>
            <FaLocationDot />
          </span>
          Открыть на карте
        </a>
      </article>
    </div>
  ));

  return (
    <div className="containerr">
      <div className={scss.content}>
        <Banner
          title={"Контакты Kyrgyz Concept"}
          text={
            "Мы всегда на связи — выберите удобный способ связаться с нами или найдите ближайший офис."
          }
        />
        <div className={scss.block}>
          <form>
            <div className={scss.input_block}>
              <label htmlFor="">Имя</label>
              <input type="text" name="" placeholder="Ваше имя" />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="">Email</label>
              <input type="text" name="" placeholder="Введите ваш email" />
            </div>
            <div className={scss.input_block}>
              <label htmlFor="">Тема</label>
              <input type="text" name="" placeholder="Тема сообщения"></input>
            </div>
            <div className={scss.input_block}>
              <label htmlFor="">Cообщение</label>
              <textarea name="" placeholder="Ваше сообщение"></textarea>
            </div>
            <button type="submit">Отправить</button>
          </form>
          <section className={scss.info}>
            <h2>Следите за нами</h2>
            <p className={scss.intro}>
              Мы делимся новостями, советами, акциями и вдохновляющими историями
              в соцсетях. Подписывайтесь, чтобы всегда быть в курсе и ближе к
              нам.
            </p>
            <main className={scss.contacts}>{data}</main>
            <div className={scss.bottom}>
              Мы в социальных сетях{" "}
              <div className={scss.socials}>{socials}</div>
            </div>
          </section>
        </div>
        <iframe
          style={{ marginTop: "40px", borderRadius: "30px" }}
          src="https://yandex.com/map-widget/v1/-/CHDpaW9e"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
     <div className={scss.block2}> 
          <h2>Наши филиалы</h2>
          <section className={scss.offices}>
          {offices}
        </section></div>
      </div>
    </div>
  );
}

export default Contacts;
