import { BsSuitcase } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiHouseBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import flag from "../assets/flagg.png";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon3.svg";
import icon3 from "../assets/icon4.svg";

export const visaArr = [
  {
    icon: BsSuitcase,
    title: "Туристам",
    desc: "Для тех, кто планирует отпуск, шопинг, экскурсии или путешествия за границу.",
    id: 1,
  },
  {
    icon: SlGraduation,
    title: "Студентам и школьникам",
    desc: "Обслужим без задержек и угостим горячим напитком и печеньем",
    id: 2,
  },
  {
    icon: MdOutlineBusinessCenter,
    title: "Бизнес-путешественникам",
    desc: "Расскажем всё, что вам нужно знать до покупки открыто и понятно.",
    id: 3,
  },

  {
    icon: FaRegHeart,
    title: "Для лечения за границей",
    desc: "Сопровождаем оформление виз в клиники и санатории по всему миру.",
    id: 4,
  },
  {
    icon: PiHouseBold,
    title: "Для визитов к родственникам",
    desc: "Если у вас приглашение от семьи или друзей поможем собрать пакет документов.",
    id: 5,
  },

  {
    icon: CiGlobe,
    title: "Для долгосрочных целей",
    desc: "Работа, ПМЖ, воссоединение семьи  сопровождение виз сложного формата.",
    id: 6,
  },
];

export const visaArr2 = [
  {
    info: [
      {
        num: 1,
        flag: flag,
        name: "Вьетнам",
        days: "До 90 дней",
      },
      {
        num: 2,
        flag: flag,
        name: "Вьетнам",
        days: "До 90 дней",
      },
      {
        num: 3,
        flag: flag,
        name: "Вьетнам",
        days: "До 90 дней",
      },
      {
        num: 4,
        flag: flag,
        name: "Тайланд",
        days: "До 60 дней",
      },
      {
        num: 5,
        flag: flag,
        name: "Индонезия",
        days: "До 30 дней",
      },
      {
        num: 6,
        flag: flag,
        name: "Малайзия",
        days: "До 90 дней",
      },
      {
        num: 7,
        flag: flag,
        name: "Индонезия",
        days: "До 30 дней",
      },
    ],
  },
];

export const dataArr = [
  {
    num: 1,
    desc: "Заявка на сайте или звонок",
  },
  {
    num: 2,
    desc: "Консультация и определение типа визы",
  },
  {
    num: 3,
    desc: "Сбор и проверка документов",
  },
  {
    num: 4,
    desc: "Запись на приём подача через визовый центр",
  },
  {
    num: 5,
    desc: "Получение визы и подготовка к поездке",
  },
];

export const visaArr3 = [
  {
    heading: "Визы",
    intro: "Мы помогаем получить визу без стресса и ошибок",
    info: [
      {
        img: icon,
        title: "Туристическая виза",
      },
      {
        img: icon,
        title: "Студенческая виза",
      },
      {
        img: icon,
        title: "Рабочая виза",
      },
      {
        img: icon,
        title: "Бизнес-виза",
      },
      {
        img: icon,
        title: "Виза невесты / по приглашению",
      },
      {
        img: icon,
        title: "Транзитная виза",
      },
      {
        img: icon,
        title: "Многократные визы (multi-entry)",
      },
    ],
  },
  {
    heading: "Услуги",
    info: [
      {
        img: icon2,
        title: "Консультация по выбору типа визы",
      },
      {
        img: icon2,
        title: "Проверка пакета документов",
      },
      {
        img: icon2,
        title: "Заполнение анкеты на английском",
      },
      {
        img: icon2,
        title: "Подготовка к собеседованию",
      },
      {
        img: icon2,
        title: "Запись в консульство",
      },
      {
        img: icon2,
        title: "Страховка (если требуется)",
      },
      {
        img: icon2,
        title: "Переводы документов (если нужно)",
      },
      {
        img: icon2,
        title: "Сопровождение на каждом этапе",
      },
    ],
  },
  {
    heading: "Документы",
    intro: "Подготовьте нужные документы мы проверим и отправим правильно",
    info: [
      {
        img: icon3,
        title: "Паспорт",
      },
      {
        img: icon3,
        title: "Фото (по требованиям страны)",
      },
      {
        img: icon3,
        title: "Справка с работы или учебы",
      },
      {
        img: icon3,
        title: "Финансовые документы",
      },
      {
        img: icon3,
        title: "Подтверждение проживания и билетов",
      },
      {
        img: icon3,
        title: "Приглашение (если требуется)",
      },
      {
        img: icon3,
        title: "Анкета",
      },
      {
        img: icon3,
        title: "Страховка",
      },
    ],
  },
];

export const visaArr4 = [
  {
    ques: "Нужно ли мне ехать в консульство?",
    ans: "qwertyuiop",
    id: 1,
  },
  {
    ques: "Какие визы оформляются без личного присутствия?",
    ans: "qwertyuiop",
    id: 2,
  },
  {
    ques: "Сколько занимает процесс?",
    ans: "qwertyuiop",
    id: 3,
  },
  {
    ques: "Гарантируете ли получение визы?",
    ans: "qwertyuiop",
    id: 4,
  },
];
