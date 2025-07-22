import React from "react";
import scss from "./Blog.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { blogArr } from "../../constants/Blog";
import { artPost } from "../../constants/Article";

function Blog() {
  const { pathname } = useLocation();
  const navigate = useNavigate()

   const handleClick = () => {
   window.open("/articles", "_blank");
  };

  const cards = blogArr.map(({ image, title, desc }, index) => (
    <div
      key={index}
      className={scss.card}
      style={{ background: `url(${image})` }}
    >
      <section>
        <p className={scss.title}>{title}</p>
        <span className={scss.desc}>{desc}</span>
      </section>
    </div>
  ));

  const cardss = artPost
    .slice(0, 3)
    .map(({ image, type, date, category, heading, desc, styles }, index) => (
      <div key={index} className={scss.art_card} onClick={handleClick}>
        <img src={image} alt="image" />
        <div className={scss.upper_part}>
          <span className={`${scss.category} ${styles}`}>{category}</span>
          <span className={scss.date}>{date}</span>
        </div>
        <h2>{heading}</h2>
        <p className={scss.desc}>{desc}</p>
      </div>
    ));

  return (
    <>
      {pathname === "/" ? (
        <div className="containerr">
          <div className={scss.content}>
            <div className={scss.heading}>
              <h1>Наши свежие статьи</h1>
              <Link to="/blog" className={scss.moreBtn}>
                Читать далее
              </Link>
            </div>
            <main>{cardss}</main>
          </div>
        </div>
      ) : (
        <main>{cardss}</main>
      )}
    </>
  );
}

export default Blog;
