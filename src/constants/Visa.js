import { BsSuitcase } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiHouseBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import flag from '../assets/flagg.png'



export const visaArr = [
    {
        icon: BsSuitcase,
        title: 'Туристам',
        desc: 'Для тех, кто планирует отпуск, шопинг, экскурсии или путешествия за границу.',
        id: 1
    },
     {
        icon: SlGraduation ,
        title: 'Студентам и школьникам',
        desc: 'Обслужим без задержек и угостим горячим напитком и печеньем',
        id: 2,
    },
     {
        icon: MdOutlineBusinessCenter,
        title: 'Бизнес-путешественникам',
        desc: 'Расскажем всё, что вам нужно знать до покупки открыто и понятно.',
        id: 3
    },
    
     {
        icon: FaRegHeart ,
        title: 'Для лечения за границей',
        desc: 'Сопровождаем оформление виз в клиники и санатории по всему миру.',
        id: 4
    },
     {
        icon: PiHouseBold ,
        title: 'Для визитов к родственникам',
        desc: 'Если у вас приглашение от семьи или друзей поможем собрать пакет документов.',
        id: 5
    },
    
     {
        icon: CiGlobe ,
        title: 'Для долгосрочных целей',
        desc: 'Работа, ПМЖ, воссоединение семьи  сопровождение виз сложного формата.',
        id: 6
    },
]

export const visaArr2 =[
   {info: [
     {
        num : 1,
        flag: flag,
        name: 'Вьетнам',
        days : 'До 90 дней'
    },
    {
        num : 2,
        flag: flag,
        name: 'Вьетнам',
        days : 'До 90 дней'
    },
    {
        num : 3,
        flag: flag,
        name: 'Вьетнам',
        days : 'До 90 дней'
    },
    {
        num : 4,
        flag: flag,
        name: 'Тайланд',
        days : 'До 60 дней'
    },
    {
        num : 5,
        flag: flag,
        name: 'Индонезия',
        days : 'До 30 дней'
    },
    {
        num : 6,
        flag: flag,
        name: 'Малайзия',
        days : 'До 90 дней'
    },
    {
        num : 7,
        flag: flag,
        name: 'Индонезия',
        days : 'До 30 дней'
    }
   ]}
]