import React, { useEffect, useRef, useState } from "react";
import scss from "../Main/Main.module.scss";
import Calendar from "../UI/Calendar/Calendar";
import { TbCalendarMonth } from "react-icons/tb";
import Passengers from "../UI/Passengers/Passengers";
import { data } from "../../constants/Main";
import { IoMdAirplane } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FindTicket() {
  const [cityMenu, setCityMenu] = useState(null);
  const [from, setFrom] = useState({ value: "", code: "" });
  const [to, setTo] = useState({ value: "", code: "" });
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState("departure");
  const [showPassengers, setShowPassengers] = useState(false);
  const [people, setPeople] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });
  const [classType, setClassType] = useState("Эконом");

  const cityMenuRef = useRef();
  const calendarRef = useRef();
  const passengersRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityMenuRef.current && !cityMenuRef.current.contains(event.target)) {
        setCityMenu(null);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
      if (
        passengersRef.current &&
        !passengersRef.current.contains(event.target)
      ) {
        setShowPassengers(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleDatesSelected = ({ departureDate, returnDate }) => {
    setDepartureDate(departureDate);
    setReturnDate(returnDate || null);
    setShowCalendar(false);
  };

  const openCalendar = (type) => {
    setCalendarType(type);
    setShowCalendar(true);
  };

  const formatPassengerText = () => {
    const total = people.adults + people.children + people.babies;
    return `${total} ${total === 1 ? "пассажир" : "пассаж."}`;
  };

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
          } else {
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

  return (
    <form className="d-flex">
      <section className={scss.dest_section}>
        <div className={`${scss.for_input} ${scss.firstInput}`}>
          <div className={scss.input_group} onClick={() => setCityMenu("from")}>
            <input
              type="text"
              placeholder="Откуда"
              value={from.value}
              readOnly
            />
            <span className={scss.code}>{from.code}</span>
          </div>
        </div>
        <div className={scss.for_input}>
          <div className={scss.input_group} onClick={() => setCityMenu("to")}>
            <input type="text" placeholder="Куда" value={to.value} readOnly />
            <span className={scss.code}>{to.code}</span>
          </div>
        </div>
        {cityMenu && (
          <div className={scss.city_menu} ref={cityMenuRef}>
            {destinations}
          </div>
        )}
      </section>

      <div className={scss.dates_data}>
        <div className={scss.for_input}>
          <div
            className={scss.input_group}
            onClick={() => openCalendar("departure")}
          >
            <input
              type="text"
              placeholder="Когда"
              value={formatDate(departureDate)}
              readOnly
            />
            <span className={scss.calendar}>
              <TbCalendarMonth color="#9EA9B7" size={22} />
            </span>
          </div>
        </div>

        <div className={scss.for_input}>
          <div
            className={scss.input_group}
            onClick={() => departureDate && openCalendar("return")}
          >
            <input
              type="text"
              placeholder="Обратно"
              value={formatDate(returnDate)}
              readOnly
              disabled={!departureDate}
            />
            <span className={scss.calendar}>
              <TbCalendarMonth color="#9EA9B7" size={22} />
            </span>
          </div>
        </div>

        {showCalendar && (
          <div className={scss.calendar_overlay} ref={calendarRef}>
            <Calendar
              onComplete={handleDatesSelected}
              initialDepartureDate={departureDate}
              initialReturnDate={returnDate}
              defaultSelection={calendarType}
            />
          </div>
        )}
      </div>

      <div className={`${scss.for_input} ${scss.lastInput}`}>
        <div
          className={scss.input_group}
          onClick={() => setShowPassengers(!showPassengers)}
          ref={passengersRef}
          style={{ position: "relative" }}
        >
          <div className="d-flex flex-column">
            <input type="text" value={formatPassengerText()} readOnly />
            <span className={scss.type}>{classType}</span>
          </div>
          <p className={`${scss.arrow} ${showPassengers ? scss.rotated : ""}`}>
            <FaAngleDown />
          </p>

          {showPassengers && (
            <div className={scss.passengers_popup}>
              <Passengers
                people={people}
                setPeople={setPeople}
                classType={classType}
                setClassType={setClassType}
              />
            </div>
          )}
        </div>
      </div>

      <Link to="/avia-tickets" className={scss.button}>
        Найти билеты
      </Link>
    </form>
  );
}

export default FindTicket;
