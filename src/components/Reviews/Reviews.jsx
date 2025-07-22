import React from "react";
import scss from "./Reviews.module.scss";
import { reviewArr } from "../../constants/Reviews";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

function Reviews() {
  const { pathname } = useLocation();
  const cards = reviewArr.map(
    ({ name, review_text, email, profile_pic }, index) => (
      <div key={index} className={scss.review_card}>
        <span className={scss.quot}>
          <FaQuoteLeft color="#5C5C5C" />
        </span>
        <p className={scss.text}>{review_text}</p>
        <div className={scss.header}>
          <img src={profile_pic} alt="profile picture" />
          <aside>
            <h3>{name}</h3>
            <span>{email}</span>
          </aside>
        </div>
      </div>
    )
  );

  return (
    <>
      {pathname === "/" ? (
        <div className="parent">
          <div className="containerr">
            <div className={scss.content}>
              <div className={scss.h1}>
                Присоединяйтесь к <h2>2 350 000+</h2> довольных путешественников
              </div>
              <p className={scss.heading}>
                Читайте отзывы и вдохновляйтесь на своё следующее путешествие!
              </p>
            </div>
          </div>
          <main>{cards}</main>
        </div>
      ) : (
        <main>{cards}</main>
      )}
    </>
  );
}

export default Reviews;
