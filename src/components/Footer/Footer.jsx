import React from "react";
import scss from "./Footer.module.scss";
import { footerArr, socialArr } from "../../constants/Footer";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  const navigations = footerArr.map(({ heading, info }, index) => (
    <div key={index} className={scss.block}>
      <h1>{heading}</h1>
      <div className={scss.nav_items}>
        {info.map(({ title, link, icon: Icon }, index) => (
          <a href={link} key={index}>
            {Icon && (
              <div className={scss.icon}>
                <Icon />
              </div>
            )}
            {title}
          </a>
        ))}
      </div>
    </div>
  ));

  const socials = socialArr.map((Icon, index) => (
    <div
      key={index}
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "40px",
        height: "40px",
        background: "#fff",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <Icon color="#005B7D" size={24} />
    </div>
  ));

  return (
    <div className="containerr">
      <div
        className={scss.content}
        style={pathname !== "/" ? { marginLeft: "80px" } : {}}
      >
        <div className="d-flex justify-content-between flex-wrap gap-5">
          <div className={scss.main}>{navigations}</div>
          <div className="d-flex gap-4">{socials}</div>
        </div>
        <p className={scss.bottom}>
          © 2025 Kyrgyz Concept. Все права защищены.
        </p>
      </div>
    </div>
  );
}

export default Footer;
