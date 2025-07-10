import React from "react";
import scss from "./Footer.module.scss";
import { footerArr, socialArr } from "../../constants/Footer";

function Footer() {
  const naviagations = footerArr.map(({ heading, info }, index) => (
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
      <div className={scss.content}>
        <div className='d-flex justify-content-between'>
          <div className={scss.main}>{naviagations}</div>
          <div className="d-flex gap-4">{socials}</div>
        </div>
        <p className={scss.bottom}>
          © 2025 Kyrgyz Concept. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
