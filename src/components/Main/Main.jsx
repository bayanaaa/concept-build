import React, { useEffect, useRef, useState } from "react";
import scss from "./Main.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { mainArr } from "../../constants/Main";
import Authorization from "../Authorization/Authorization";

import FindTicket from "../FindTicket/FindTicket";

function Main() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className={scss.parent}>
      <div className="containerr">
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <div className={scss.content}>
          <div className={scss.upper_part}>
            <a href="#" className={scss.text}>
              Стать партнёром
            </a>
            <div className={scss.text} onClick={() => setAuthOpen(true)}>
              <p className={scss.icon}>
                <FaUser />
              </p>
              <span>Войти</span>
            </div>
          </div>

          {authOpen && <Authorization setAuthOpen={setAuthOpen} />}

          <main style={{ overflowX: "unset" }}>
            <h1>
              Ваши ворота в мир полетов воспоминаний <br /> о турах
            </h1>
            <nav>
              {mainArr[0].map(({ icon: Icon, title, link, soon }, index) => (
                <Link className={scss.nav_item} key={index} to={link}>
                  <p className={scss.nav_icon}>
                    <Icon />
                  </p>
                  {title}
                  {soon && <span className={scss.soon}>Скоро</span>}
                </Link>
              ))}
            </nav>

            <FindTicket />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
