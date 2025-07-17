import React from "react";
import scss from "./Reviews.module.scss";
import { reviewArr } from "../../constants/Reviews";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Reviews() {
  const { pathname } = useLocation();
  const cards = reviewArr.map(
    ({ name, review_text, email, profile_pic }, index) => (
      <div key={index} className={scss.review_card}>
        <div className={scss.header}>
          <img src={profile_pic} alt="profile picture" />
          <aside>
            <h3>{name}</h3>
            <span>{email}</span>
          </aside>
        </div>
        <p className={scss.text}>{review_text}</p>
        <div className={scss.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    )
  );

  return (
    <>
      {pathname === "/" ? (
        <div className="containerr">
          <div className={scss.content}>
            <div className={scss.h1}>
              Join <h2> 5,000+ </h2> Happy Travelers
            </div>
            <p className={scss.heading}>
              Find your perfect flight today — safe, fast, and affordable.
            </p>
            <main>{cards}</main>
          </div>
        </div>
      ) : (
        <main>{cards}</main>
      )}
    </>
  );
}

export default Reviews;
