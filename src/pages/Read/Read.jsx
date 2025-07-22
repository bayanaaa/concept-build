import React from "react";
import scss from "./Read.module.scss";
import i1 from "../../assets/pppp.jpg";
import { artPost } from "../../constants/Article";
import { FaRegHeart } from "react-icons/fa";
import profilepic from "../../assets/profilepic.svg";
import { smArr } from "../../constants/Contacts";
import Blog from "../../components/Blog/Blog";

function Read() {
  const socials = smArr.slice(0, 4).map((Icon, index) => (
    <span className={scss.sm} key={index}>
      <Icon color="#005B7D" size={22} />
    </span>
  ));
  return (
    <div className="containerr">
      <div className={scss.content}>
        <div className={scss.banner}></div>
        <div className={scss.main}>
          <div className={scss.info_section}>
            <div className={scss.header}>
              <div className={scss.header_child1}>
                <span className={scss.category}>Рейсы</span>
                <span className={scss.dot}></span>
                <span className={scss.date}>28 июня 2025</span>
                <span className={scss.dot}></span>
                <span className={scss.date}>Читать 6 минут</span>
              </div>
              <div className={scss.header_child2}>
                <span className={scss.icon}>
                  <FaRegHeart color="#2B2929" />
                </span>
                Сохранить
              </div>
            </div>
            <div className={scss.heading}>
              <h1>Как получить визу быстро и без ошибок</h1>
              <p>
                Полный список документов, советы от экспертов и частые ошибки
              </p>
            </div>
            <article>
              Для посещения ряда европейских стран требуется «шенген» —
              разрешение на пересечение границ государств, подписавших
              соответствующее соглашение. На данный момент их насчитывается
              двадцать шесть, а еще четыре ожидают положительного решения.
              Основной плюс такой визы в том, что получив ее через консульство
              одной страны, вы имеете право впоследствии перемещаться по всей
              территории, которую охватывает шенгенское соглашение. Самое
              главное правило: начать свой маршрут необходимо именно с того
              государства, представитель которого выдал вам разрешение. Прежде
              чем приступить к сбору документов и планированию поездки, стоит
              определиться с тем, как вы будете оформлять шенгенскую визу: через
              специализированное агентство или самостоятельно? Для посещения
              ряда европейских стран требуется «шенген» — разрешение на
              пересечение границ государств, подписавших соответствующее
              соглашение. На данный момент их насчитывается двадцать шесть, а
              еще четыре ожидают положительного решения. Основной плюс такой
              визы в том, что получив ее через консульство одной страны, вы
              имеете право впоследствии перемещаться по всей территории, которую
              охватывает шенгенское соглашение. Самое главное правило: начать
              свой маршрут необходимо именно с того государства, представитель
              которого выдал вам разрешение. Прежде чем приступить к сбору
              документов и планированию поездки, стоит определиться с тем, как
              вы будете оформлять шенгенскую визу: через специализированное
              агентство или самостоятельно?
            </article>
          </div>
          <div className={scss.author}>
            <div className={scss.author_header}>
              <img src={profilepic} alt="profile" />
              <aside>
                <h3>Иван Иванов</h3>
                <p>ivanov@example.com</p>
              </aside>
            </div>
            <div className={scss.share}>
              <h2>Поделиться с друзьями</h2>
              <div className={scss.smedia}>{socials}</div>
            </div>
          </div>
        </div>
        <div className={scss.suggestions}>
          <h1>Читайте также</h1>
          <Blog />
        </div>
        <div className={scss.follow}>
          <article>
            <h2>Подписывайтесь на свежие статьи</h2>
            <p>
              Оставьте свою почту, чтобы получать полезные материалы и новости
              без спама.
            </p>
            <form >
              <input type="email" placeholder="Email" />
              <button>Подписаться</button>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Read;
