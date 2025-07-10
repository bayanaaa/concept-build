import { GiCommercialAirplane } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { PiListFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa6";

export const mainArr = [
  [
    {
      icon: GiCommercialAirplane,
      title: "Авиабилеты",
      link: "/avia-tickets",
    },
    {
      icon: FaUmbrellaBeach,
      title: "Туры",
      link: "/tours",
    },
    {
      icon: FaCrown,
      title: "VIP-зал",
      link: "/vip",
    },
    {
      icon: FaPassport,
      title: "Визовая поддержка",
      link: "/visa-support",
      soon: true,
    },
    {
      icon: FaCar,
      title: "Транспорт",
      link: "/transport",
      soon: true,
    },
  ],
  [
    {
      icon: FaBuilding,
      title: "О компании",
      link: "/about",
    },
    {
      icon: PiListFill,
      title: "Блог",
      link: "/blog",
    },
    {
      icon: FaUser,
      title: "Клиентам",
      link: "/for-clients",
    },
    {
      icon: IoIosCall,
      title: "Контакты",
      link: "/contacts",
    },
  ],
  [
    {
      icon: FaBriefcase,
      title: "Стать партнером",
      link: "/partnering",
    },
  ],
];

export const data = [
  {
    city: "Bishkek",
    country: "Kyrgyzstan",
    code: "FRU",
  },
  {
    city: "Tashkent",
    country: "Uzbekistan",
    code: "QQQ",
  },
  {
    city: "Almaty",
    country: "Kazakhstan",
    code: "WWW",
  },
];
