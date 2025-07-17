import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { WiTime3 } from "react-icons/wi";
import { RiPhoneLine } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'

export const smArr = [PiTelegramLogo, FaWhatsapp, FaInstagram, FiTwitter, FiFacebook]

export const contArr = [
  {
    icon: GrLocation,
    title: "Адрес",
    desc: "ул. Токтогула 42/1",
  },
  {
    icon: HiOutlineMail,
    title: "Email",
    link: "mailto:contact@concept.kg",
    desc: "contact@concept.kg",
  },
  {
    icon: WiTime3,
    title: "Время",
    desc: "С 9:00 до 18:00",
  },
  {
    icon: RiPhoneLine,
    title: "Телефон",
    link: "tel:+996701900883",
    desc: "+996 701 900 883",
  },
];

export const filArr = [
    {
        title: 'Головной офис',
        address: 'г. Бишкек, ул. Исанова 42/1',
        link: 'https://go.2gis.com/j69Bh',
        img: pic1,
    },
    {
        title: 'Офис на пр. Чуй',
        address: 'г. Бишкек, пр. Чуй 126',
        link: 'https://go.2gis.com/KPZi6',
        img: pic2,
    },
    {
        title: 'Офис в Globus',
        address: 'г. Бишкек, ул. Токомбаева 53/1,',
        link: 'https://go.2gis.com/dMLlG',
        img: pic3,
    },
    {
        title: 'Образовательный офис',
        address: 'г. Бишкек, ул. Тыныстанова 231',
        link: 'https://go.2gis.com/ijeHU',
        img: pic4 ,
    },
    {
        title: 'Академия Kyrgyz Concept',
        address: 'г. Бишкек, ул. Фрунзе 475/23',
        link: 'https://go.2gis.com/CLdCE',
        img: pic5,
    },
    {
        title: 'Офис в Hyatt Regency',
        address: 'г. Бишкек, ул. Абдрахманова 191',
        link: 'https://go.2gis.com/C72ud',
        img: pic6,
    },
]
