import React, { useState } from "react";
import scss from "./Article.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { artArr, artNav, artPost } from "../../constants/Article";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

function Article() {
  const [chosen, setChosen] = useState("Рейсы");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigation = artNav.map(({ icon: Icon, title }, index) => (
    <div
      key={index}
      className={`${scss.nav_item} ${chosen === title ? scss.active : ""}`}
      onClick={() => setChosen(title)}
    >
      <p className={scss.icon}>
        <Icon />
      </p>
      <span>{title}</span>
    </div>
  ));



  const cards = artPost.map(
    ({ image, type, date, category, heading, desc, styles }, index) => (
      <div key={index} className={scss.art_card}>
        <img src={image} alt="image" />
        <div className={scss.upper_part}>
          <span className={`${scss.category} ${styles}`}>{category}</span>
          <span className={scss.date}>{date}</span>
        </div>
        <h2>{heading}</h2>
        <p className={scss.desc}>{desc}</p>
      </div>
    )
  );

  return (
    <div className={scss.parent}>
      <div className="containerr">
        <div className={scss.content}>
          <Slider {...settings}>
            {artArr.map((el, index) => (
              <div key={index}>
                <section
                  className={scss.articles_banner}
                  style={{
                    backgroundImage: `url(${el.img})`,
                    minHeight: "400px",
                  }}
                >
                  <div className={scss.textWrapper}>
                    <article>
                      {" "}
                      <h1 className={scss.art_heading}>{el.heading}</h1>
                      <p className={scss.art_desc}>{el.desc}</p>
                    </article>
                    <span className={scss.icon}><FaArrowRight/></span>
                  </div>
                </section>
              </div>
            ))}
          </Slider>
          <section className={scss.articles_block}>
            <div
              className={`d-flex justify-content-between align-items-center ${scss.art_header}`}
            >
              <h1>Все статьи</h1>
              <div className={scss.search_bar}>
                <IoSearch size={20} color="#9E9E9E" />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <nav>{navigation}</nav>
            <div className={scss.articles}>{cards}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Article;
