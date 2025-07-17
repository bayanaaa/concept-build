import React, { useEffect, useReducer, useRef, useState } from "react";
import scss from "./Main.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { data, mainArr } from "../../constants/Main";
import { IoMdAirplane } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Authorization from "../Authorization/Authorization";

function Main() {
  const [cityMenu, setCityMenu] = useState(null);
  const [from, setFrom] = useState({ value: "", code: "" });
  const [to, setTo] = useState({ value: "", code: "" });
  const [authOpen, setAuthOpen] = useState(false);
  const cityMenuRef = useRef()
   

  useEffect(() => {
    if (authOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [authOpen]);

  const navigation = mainArr[0].map(
    ({ icon: Icon, title, link, soon }, index) => (
      <Link className={scss.nav_item} key={index} to={link}>
        <p className={scss.nav_icon}>
          <Icon />
        </p>
        {title}
        {soon && <span className={scss.soon}>Скоро</span>}
      </Link>
    )
  );

  const destinations = data
    .filter((city) =>
      cityMenu === "from"
        ? !to.value || city.city !== to.value
        : !from.value || city.city !== from.value
    )
    .map(({ city, country, code }, index) => (
      <div
        key={index}
        className={scss.block}
        onClick={() => {
          if (cityMenu === "from") {
            setFrom({ value: city, code });
          } else if (cityMenu === "to") {
            setTo({ value: city, code });
          }
          setCityMenu(null);
        }}
      >
        <div className={scss.plane_icon}>
          <IoMdAirplane style={{ transform: "rotate(45deg)" }} />
        </div>
        <div className={scss.info}>
          <p>
            {city} , {country} <span>{code}</span>
          </p>
          <span className={scss.city}>{city}</span>
        </div>
      </div>
    ));

    
  useEffect(() => {
    function handleClickOutside(event) {
      if (cityMenuRef.current && !cityMenuRef.current.contains(event.target)) {
        setCityMenu(null);
      }
    }

    if (cityMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cityMenu]);

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
              Войти
            </div>
          </div>
          {authOpen && <Authorization setAuthOpen={setAuthOpen} />}
          <main>
            <h1>
              Your gateway to the world flights tours <br /> memories
            </h1>
            <nav>{navigation}</nav>
            <form className="d-flex">
              <section className={scss.dest_section}>
                <div
                  className={`${scss.input_group} ${scss.firstInput}`}
                  onClick={() => setCityMenu("from")}
                >
                  <input
                    type="text"
                    placeholder="From"
                    value={from.value}
                    readOnly
                  />
                  <span className={scss.code}>{from.code}</span>
                </div>
                <div
                  className={scss.input_group}
                  onClick={() => setCityMenu("to")}
                >
                  <input
                    type="text"
                    placeholder="To"
                    value={to.value}
                    readOnly
                  />
                  <span className={scss.code}>{to.code}</span>
                </div>
                {cityMenu && (
                  <div className={scss.city_menu} ref={cityMenuRef}>{destinations}</div>
                )}
              </section>
              <div className={scss.input_group}>
                <input type="date" placeholder="Departure" />
              </div>
              <div className={scss.input_group}>
                <input type="date" placeholder="Return" />
              </div>
              <div className={`${scss.input_group} ${scss.lastInput}`}>
                <div className="d-flex flex-column">
                  <input type="text" value="1 passenger" />
                  <span className={scss.type}>Economy</span>
                </div>
                <p className={scss.arrow}>
                  <FaAngleDown />
                </p>
              </div>
              <button type="submit">Search flights</button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
