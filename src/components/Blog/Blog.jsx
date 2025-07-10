import React from "react";
import scss from "./Blog.module.scss";
import { Link } from "react-router-dom";
import { blogArr } from "../../constants/Blog";

function Blog() {
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


  return (
    <div className="containerr">
      <div className={scss.content}>
        <div className={scss.heading}>
          <h1>Our latest blogs</h1>
          <Link to="/" className={scss.moreBtn}>Read more</Link>
        </div>
        <main>{cards}</main>
      </div>
    </div>
  );
}

export default Blog;
