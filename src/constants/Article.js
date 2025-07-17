import { GiCommercialAirplane } from "react-icons/gi";
import { PiChairFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import scss from '../pages/Articles/Article.module.scss'

export const artArr = [
  {
    img: i1,
    heading: "VIP и Бизнес-залы в аэропортах Бишкека, Оша и Алматы",
    desc: "Бронирование и премиальные услуги для тех, кто ценит комфорт, скорость и персональный подход.",
  },
  {
    img: i3,
    heading: "Как получить визу быстро и без ошибок",
    desc: "Полный список документов, советы от экспертов и частые ошибки",
  },
  {
    img: i2,
    heading: "5 приложений для путешественника",
    desc: "Сэкономь, найди маршрут и не потеряй багаж — всё в телефоне",
  },
];

export const artNav = [
  {
    icon: GiCommercialAirplane,
    title: "Рейсы",
  },
  {
    icon: PiChairFill,
    title: "Визы",
  },
  {
    icon: FaCar,
    title: "Сборы",
  },
  {
    icon: FaCar,
    title: "Аэропорт",
  },
  {
    icon: FaUmbrellaBeach,
    title: "Приложения",
  },
  {
    icon: PiChairFill,
    title: "Места",
  },
  {
    icon: FaUmbrellaBeach,
    title: "Сезон",
  },
];

export const artPost = [
  {
    image: i1,
    type: "",
    category: "Рейсы",
    date: "28 июня 2025",
    heading: "Как получить визу быстро и без ошибок",
    desc: "Полный список документов, советы от экспертов и частые ошибки",
    styles: scss.reisy
  },
  {
    image: i2,
    type: "",
    category: "Лайфхаки",
    date: "28 июня 2025",
    heading: "5 приложений для путешественника",
    desc: "Сэкономь, найди маршрут и не потеряй багаж — всё в телефоне",
     styles: scss.lifehacks
  },
  {
    image: i3,
    type: "",
    category: "Сборы",
    date: "28 июня 2025",
    heading: "Как собрать чемодан за 10 минут",
    desc: "Упаковочный чек-лист и трюки от часто летающих",
     styles: scss.sbory
  },
  {
    image: i4,
    type: "",
    category: "Лайфхаки",
     styles: scss.lifehacks,
    date: "28 июня 2025",
    heading: "Пересадка между рейсами: что нужно знать",
    desc: "Как рассчитать время, что делать в аэропорту ожидания",
  },
  {
    image: i5,
    type: "",
    category: "Сборы",
    date: "28 июня 2025",
    heading: "Медицинская страховка в поездке: нужна или нет?",
    desc: "Разбор, где она обязательна и сколько стоит",
     styles: scss.sbory
  },
  {
    image: i6,
    type: "",
    category: "Рейсы",
    date: "28 июня 2025",
    heading: "Ночная посадка: лайфхаки",
    desc: "Как высыпаться в перелётах и не потеряться в темноте",
     styles: scss.reisy
  },
  {
    image: i4,
    type: "",
    category: "Лайфхаки",
    date: "28 июня 2025",
    heading: "Пересадка между рейсами: что нужно знать",
    desc: "Как рассчитать время, что делать в аэропорту ожидания",
     styles: scss.lifehacks
  },
  {
    image: i5,
    type: "",
    category: "Сборы",
    date: "28 июня 2025",
    heading: "Медицинская страховка в поездке: нужна или нет?",
    desc: "Разбор, где она обязательна и сколько стоит",
     styles: scss.sbory
  },
  {
    image: i6,
    type: "",
    category: "Рейсы",
    date: "28 июня 2025",
    heading: "Ночная посадка: лайфхаки",
    desc: "Как высыпаться в перелётах и не потеряться в темноте",
     styles: scss.reisy
  },
];
