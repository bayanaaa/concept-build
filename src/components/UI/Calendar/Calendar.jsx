import React, { useState, useRef } from 'react';
import scss from './Calendar.module.scss';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const Calendar = ({ onComplete, initialDepartureDate = null, initialReturnDate = null }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(initialDepartureDate);
  const [returnDate, setReturnDate] = useState(initialReturnDate);
  const [oneWay, setOneWay] = useState(false);
  const calendarRef = useRef();

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  // Навигация по месяцам (переключает 2 месяца сразу)
  const navigateMonths = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -2 : 2));
    setCurrentDate(newDate);
  };

  // Обработчик выбора даты
  const handleDateClick = (day, monthOffset = 0) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );

    if (!departureDate) {
      setDepartureDate(selectedDate);
      if (oneWay) {
        onComplete({ departureDate: selectedDate, returnDate: null });
      }
    } else {
      setReturnDate(selectedDate);
      onComplete({ departureDate, returnDate: selectedDate });
    }
  };

  // Рендер одного месяца
  const renderMonth = (monthOffset = 0) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + monthOffset;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days = [];

    // Пустые дни в начале месяца
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${monthOffset}-${i}`} className={scss.empty}></div>);
    }

    // Дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isSelectedDeparture = departureDate && date.toDateString() === departureDate.toDateString();
      const isSelectedReturn = returnDate && date.toDateString() === returnDate.toDateString();
      const isDisabled = departureDate && date < departureDate;

      days.push(
        <div
          key={`day-${monthOffset}-${i}`}
          className={`
            ${scss.day} 
            ${isSelectedDeparture ? scss.selectedDeparture : ''}
            ${isSelectedReturn ? scss.selectedReturn : ''}
            ${isDisabled ? scss.disabled : ''}
          `}
          onClick={() => !isDisabled && handleDateClick(i, monthOffset)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  // Получение названия месяца и года
  const getMonthName = (monthOffset) => {
    const month = currentDate.getMonth() + monthOffset;
    const year = currentDate.getFullYear() + Math.floor(month / 12);
    return `${months[month % 12]} ${year}`;
  };

  // Переключение чекбокса "Обратный билет не нужен"
  const handleOneWayChange = () => {
    const newValue = !oneWay;
    setOneWay(newValue);
    if (newValue && departureDate) {
      onComplete({ departureDate, returnDate: null });
    }
  };

  return (
    <div className={scss.calendar} ref={calendarRef}>
      <div className={scss.header}>
        <h3>Выберите дату {!departureDate ? 'туда' : 'обратно'}</h3>
       <span 
    className={`${scss.need} ${oneWay ? scss.checked : ''}`}
    onClick={handleOneWayChange}
  >
    Обратный билет не нужен
  </span>
      </div>

      <div className={scss.month_navigation}>
        <span onClick={() => navigateMonths('prev')}><IoIosArrowBack color='#9EA9B7'/></span>
        <h4>{getMonthName(0)}</h4>
        <h4>{getMonthName(1)}</h4>
        <span onClick={() => navigateMonths('next')}><IoIosArrowForward color='#9EA9B7'/></span>
      </div>

      <div className={scss.months_wrapper}>
        {/* Первый месяц */}
        <div className={scss.month_container}>
          <div className={scss.weekdays}>
            {weekdays.map(day => (
              <span key={`left-${day}`}>{day}</span>
            ))}
          </div>
          <div className={scss.days_grid}>
            {renderMonth(0)}
          </div>
        </div>

        {/* Второй месяц */}
        <div className={scss.month_container}>
          <div className={scss.weekdays}>
            {weekdays.map(day => (
              <span key={`right-${day}`}>{day}</span>
            ))}
          </div>
          <div className={scss.days_grid}>
            {renderMonth(1)}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Calendar;