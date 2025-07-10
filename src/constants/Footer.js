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
    heading: "Company",
    info: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Careers",
        link: "/careers",
      },
      {
        title: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Cookie Settings",
        link: "/cookie-settings",
      },
    ],
  },
  {
    heading: "Travelers",
    info: [
      {
        title: "How It Works",
        link: "/how-it-works",
      },
      {
        title: "My Bookings",
        link: "/my-bookings",
      },
      {
        title: "Payment & Refunds",
        link: "/payment-and-refunds",
      },
      {
        title: "Help Center",
        link: "/help-center",
      },
      {
        title: "Travel Tips & Articles",
        link: "/travel-tips",
      },
    ],
  },
  {
    heading: "Contact",
    info: [
      {
        icon: CiLocationOn,
        title: "123 Toktogul Street, Bishkek",
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
        title: "Mon–Sat, 9:00–18:00",
        onlyInfo: true,
      },
    ],
  },
];
