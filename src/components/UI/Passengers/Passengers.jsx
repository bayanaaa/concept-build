import React from "react";
import scss from "./Passengers.module.scss";
import { FiMinus, FiPlus } from "react-icons/fi";

const Passengers = ({
  people,
  setPeople,
  classType,
  setClassType,
  onClose,
}) => {
  const handlePlus = (type, e) => {
    e.stopPropagation();
    setPeople({ ...people, [type]: people[type] + 1 });
  };

  const handleMinus = (type, e) => {
    e.stopPropagation();
    const minValue = type === "adults" ? 1 : 0;
    if (people[type] > minValue) {
      setPeople({ ...people, [type]: people[type] - 1 });
    }
  };

  const handleClassSelect = (type, e) => {
    e.stopPropagation();
    setClassType(type);
  };

  return (
    <div className={scss.passenger_bar} onClick={(e) => e.stopPropagation()}>
      <h2>Количество пассажиров</h2>
      <div className={scss.quantity_bar}>
        {["adults", "children", "babies"].map((type) => (
          <div key={type} className={scss.people}>
            <div className={scss.info}>
              <h3>
                {type === "adults"
                  ? "Взрослые"
                  : type === "children"
                  ? "Дети"
                  : "Младенцы"}
              </h3>
              <span>
                {type === "adults"
                  ? "12 лет и старше"
                  : type === "children"
                  ? "от 2 до 11 лет"
                  : "Младше 2 лет, без места"}
              </span>
            </div>
            <div className={scss.quantity}>
              <span
                className={scss.minusBtn}
                onClick={(e) => handleMinus(type, e)}
              >
                <FiMinus />
              </span>
              <p>{people[type]}</p>
              <span
                className={scss.plusBtn}
                onClick={(e) => handlePlus(type, e)}
              >
                <FiPlus />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={scss.class}>
        <h2>Класс обслуживания</h2>
        {["Эконом", "Комфорт", "Бизнес", "Первый класс"].map((type) => (
          <div
            key={type}
            className={scss.class_item}
            onClick={(e) => handleClassSelect(type, e)}
          >
            <h3>{type}</h3>
            <input
              type="radio"
              name="class"
              checked={classType === type}
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passengers;
