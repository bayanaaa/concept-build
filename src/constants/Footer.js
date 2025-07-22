import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const socialArr = [PiTelegramLogo, FaWhatsapp, FaInstagram]

export const footerArr = [
  {
    heading: "Компания",
    info: [
      {
        title: "О нас",
        link: "/about",
      },
      {
        title: "Вакансии",
        link: "/vacancies",
      },
      {
        title: "Условия предоставления услуг",
        link: "/terms-of-service",
      },
      {
        title: "Политика конфиденциальности",
        link: "/privacy-policy",
      },
      {
        title: "Настройки cookie",
        link: "/cookie-settings",
      },
    ],
  },
  {
    heading: "Путешественники",
    info: [
      {
        title: "Как это работает",
        link: "/how-it-works",
      },
      {
        title: "Мои бронирования",
        link: "/my-bookings",
      },
      {
        title: "Оплата и возврат",
        link: "/payment-and-refunds",
      },
      {
        title: "Центр помощи",
        link: "/help-center",
      },
      {
        title: "Советы и статьи о путешествиях",
        link: "/blog",
      },
    ],
  },
  {
    heading: "Контакты",
    info: [
      {
        icon: CiLocationOn,
        title: "Улица Токтогула, 123, Бишкек",
        onlyInfo: true,
        link: "https://2gis.kg/tokmok/geo/70030076154952013",
      },
      {
        icon: HiOutlineMail,
        title: "support@youragency.com",
        onlyInfo: true,
        link: "mailto:support@youragency.com",
      },
      {
        icon: IoCallOutline,
        title: "+996 (312) 123-456",
        onlyInfo: true,
        link: "tel:+996312123456",
      },
      {
        icon: IoTimeOutline,
        title: "пн-сб, 9:00-18:00",
        onlyInfo: true,
      },
    ],
  },
];
