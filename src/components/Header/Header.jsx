import React, { useState } from "react";
import scss from "./Header.module.scss";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo2.svg";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { mainArr } from "../../constants/Main";
import ru from "../../assets/ru.svg";

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = mainArr.map((el, index) => (
    <div key={index} className={scss.nav_block}>
      {el.map(({ icon: Icon, title, link, soon }, index) => (
        <Link
          key={index}
          to={link}
          className={`${scss.link} ${
            pathname === link ? scss.active : scss.nonActive
          }`}
        >
          <div className={scss.icon}>
            <Icon />
          </div>
          <span
            className={scss.title}
            style={!menuOpen ? { display: "none" } : {}}
          >
            {title}{" "}
            {soon && (
              <span
                className={scss.soon}
                style={
                  pathname !== "/" &&
                  pathname !== "/transport" &&
                  pathname !== "/visa-support"
                    ? { background: "#9EA9B7" }
                    : {}
                }
              >
                Скоро
              </span>
            )}
          </span>
        </Link>
      ))}
      <p className={scss.line}></p>
    </div>
  ));
  return (
    <div className={scss.parent}>
      <div className="containerr">
        <div className={scss.content}>
          <div
            className={scss.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Hamburger size={24} toggled={menuOpen} toggle={setMenuOpen} />
          </div>
          <Link className={scss.logo} to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link className={scss.login_bar}>
            <span>
              <FaUser />
            </span>
            Войти
          </Link>
          <nav>
            {navigation}
            <div className={scss.lang_bar}>
              <img src={ru} alt="ru" />
              <span style={!menuOpen ? { display: "none" } : {}}>Русский</span>
            </div>
            {menuOpen && (
              <div
                className={scss.nav_bg}
                onClick={() => setMenuOpen(false)}
              ></div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
