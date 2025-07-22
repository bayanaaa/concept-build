import React, { useState } from "react";
import scss from "./AirTickets.module.scss";
import { FaArrowTrendUp } from "react-icons/fa6";
import Switch from "../../components/UI/Switch/Switch";
import { FaAngleDown } from "react-icons/fa6";
import { PiSuitcaseRollingLight } from "react-icons/pi";
import { GiRollingSuitcase } from "react-icons/gi";
import sf from "../../assets/sf.svg";
import { ticketNav, ticketsArr } from "../../constants/Tickets";
import { FiHeart } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import luggage from "../../assets/luggage.svg";
import suitcase from "../../assets/suitcase.svg";
import Advertisement from "../../components/Advertisement/Advertisement";
import { FaHeart } from "react-icons/fa6";
import photo from "../../assets/photo.svg";

function AirTickets() {
  const [save, setSave] = useState(null);
  const [type, setType] = useState(1);
  const [flights, setFlights] = useState(false);
  const [baggage, setBaggage] = useState(false);
  const [timeTakes, setTimeTakes] = useState(false);
  const [transfers, setTransfers] = useState(false);
  const [company, setCompany] = useState(false);
  const [models, setModels] = useState(false);
  const [time, setTime] = useState(false);
  const [sort, setSort] = useState(false);

  const ticket = ticketsArr.map((el) => (
    <div className={scss.ticket} key={el.id}>
      <section className={scss.section1}>
        <header>
          <div className={scss.btns}>
            <div className={scss.btn}>
              <span className={scss.icon} onClick={() => setSave(el.id)}>
                {save !== el.id ? (
                  <FiHeart color="#2B2929" />
                ) : (
                  <FaHeart color="#fff" />
                )}
              </span>
              Сохранить
            </div>
            <div className={scss.btn}>
              <span className={scss.icon}>
                <RiShareForwardLine color="#2B2929" />
              </span>
              Отправить
            </div>
          </div>
          <p className={scss.category}>{el.category}</p>
        </header>
        <article>
          <img src={sf} alt="logo" />
          <div className={scss.departure}>
            <span>{el.depart}</span>
            <p>{el.from}</p>
          </div>
          <div className={scss.flight_time}>
            <div className={scss.top}>
              <span className={scss.icon}>
                <FaPlaneDeparture />
              </span>
              <p className={scss.time}>{el.time}</p>
              <span className={scss.icon}>
                <FaPlaneArrival />
              </span>
            </div>
            <div className={scss.middle}>
              <span className={scss.line}></span>
            </div>
            <div className={scss.bottom}>
              <span>{el.transfer_type}</span>
            </div>
          </div>
          <div className={scss.departure}>
            <span>{el.arrive}</span>
            <p>{el.to}</p>
          </div>
        </article>
        <article>
          <img src={sf} alt="logo" />
          <div className={scss.departure}>
            <span>{el.depart}</span>
            <p>{el.from}</p>
          </div>
          <div className={scss.flight_time}>
            <div className={scss.top}>
              <span className={scss.icon}>
                <FaPlaneDeparture />
              </span>
              <p className={scss.time}>{el.time}</p>
              <span className={scss.icon}>
                <FaPlaneArrival />
              </span>
            </div>
            <div className={scss.middle}>
              <span className={scss.line}></span>
            </div>
            <div className={scss.bottom}>
              <span>{el.transfer_type}</span>
            </div>
          </div>
          <div className={scss.departure}>
            <span>{el.arrive}</span>
            <p>{el.to}</p>
          </div>
        </article>
      </section>
      <div className={scss.section2}>
        <div className={scss.makeSure}>
          <div className={scss.upperPart}>
            <span>Багаж включен</span> <span className={scss.price}>+1020</span>{" "}
            <Switch />
          </div>
          <div className={scss.things}>
            <img src={luggage} alt="ручная кладь" />
            Ручная кладь 1×3 кг
          </div>
          <div className={scss.things}>
            <img src={suitcase} alt="багаж" />
            Багаж 1×20 кг
          </div>
        </div>
        <h3>2000 с</h3>
        <h2>Эконом</h2>
        <button>Выбрать</button>
      </div>
    </div>
  ));

  const navs = ticketNav.map((el) => (
    <div
      className={`${scss.navigation} ${type === el.id ? scss.selected : ""} `}
      onClick={() => setType(el.id)}
      key={el.id}
    >
      <p>{el.title}</p>
      <h3>{el.price}</h3>
      <p>{el.time_takes}</p>
    </div>
  ));

  return (
    <div className={scss.parent}>
      <div className="containerr">
        <div className={scss.content}>
          <img
            src={photo}
            alt=""
            style={{ width: "100%", marginBottom: "16px" }}
          />
          <div className={scss.main_content}>
            <div className={scss.block1}>
              <section className={scss.notify}>
                <div className={scss.notify_header}>
                  <span>
                    <FaArrowTrendUp />
                  </span>
                  <h3>Отслеживание цен</h3>
                </div>
                <div className={scss.notify_content}>
                  <p>
                    Получать уведомления <br />о изменении цены
                  </p>
                  <Switch />
                </div>
              </section>
              <section className={scss.filters}>
                <div className={scss.filters_header}>
                  <h3>Фильтр</h3>
                  <div className={scss.clear}>Сбросить всё</div>
                </div>
                <div className={scss.filters_content}>
                  <div
                    className={scss.content_header}
                    onClick={() => setFlights(!flights)}
                  >
                    <h3>Пересадки</h3>
                    <div className={scss.clear}>
                      Сбросить{" "}
                      <span
                        className={`${scss.arrow} ${
                          flights ? scss.rotated : ""
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                  {flights && (
                    <div className={scss.flights_content}>
                      <div className={scss.flights}>
                        <div className={scss.input_group}>
                          <input type="checkbox" name="flights" />
                          <label htmlFor="flights">Прямые рейсы</label>
                        </div>
                        <span>800 сом</span>
                      </div>
                      <div className={scss.flights}>
                        <div className={scss.input_group}>
                          <input type="checkbox" name="flights" />
                          <label htmlFor="flights">Прямые рейсы</label>
                        </div>
                        <span>800 сом</span>
                      </div>
                      <div className={scss.flights}>
                        <div className={scss.input_group}>
                          <input type="checkbox" name="flights" />
                          <label htmlFor="flights">Прямые рейсы</label>
                        </div>
                        <span>800 сом</span>
                      </div>
                    </div>
                  )}
                  <div className={scss.baggage_content}>
                    <div
                      className={scss.content_header}
                      onClick={() => setBaggage(!baggage)}
                    >
                      <h3>Багаж</h3>
                      <span
                        className={`${scss.arrow} ${
                          baggage ? scss.rotated : ""
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                    {baggage && (
                      <div className={scss.baggage}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">
                              {" "}
                              <span className={scss.icon}>
                                <GiRollingSuitcase />
                              </span>{" "}
                              Ручная кладь
                            </label>
                          </div>
                          <span>800 сом</span>
                        </div>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">
                              {" "}
                              <span className={scss.icon}>
                                <PiSuitcaseRollingLight />
                              </span>{" "}
                              Багаж
                            </label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className={scss.content_header}
                    onClick={() => setTimeTakes(!timeTakes)}
                  >
                    <h3>Время в пути</h3>
                    <span
                      className={`${scss.arrow} ${
                        timeTakes ? scss.rotated : ""
                      }`}
                    >
                      <FaAngleDown />
                    </span>
                  </div>
                  {timeTakes && (
                    <div className={scss.timeTakes_content}>
                      <div className={scss.timeTakes}>
                        <header>
                          <span>Всего</span>
                          <div className={scss.time}>
                            <p>0ч 0м</p>
                            <span className={scss.line}></span>
                            <p>1ч 0м</p>
                          </div>
                        </header>
                        <input type="range" />
                      </div>
                      <div className={scss.timeTakes}>
                        <header>
                          <span>Время пересадок</span>
                          <div className={scss.time}>
                            <p>0ч 0м</p>
                            <span className={scss.line}></span>
                            <p>1ч 0м</p>
                          </div>
                        </header>
                        <input type="range" />
                      </div>
                    </div>
                  )}
                  <div
                    className={scss.content_header}
                    onClick={() => setTransfers(!transfers)}
                  >
                    <h3>Удобство пересадок</h3>
                    <span
                      className={`${scss.arrow} ${
                        transfers ? scss.rotated : ""
                      }`}
                    >
                      <FaAngleDown />
                    </span>
                  </div>
                  {transfers && (
                    <div className={scss.transfers_content}>
                      <div className={scss.transfers}>
                        <span>Без повторной регистрации</span>
                        <Switch />
                      </div>
                      <div className={scss.transfers}>
                        <span>Без виз на пересадках</span>
                        <Switch />
                      </div>
                      <div className={scss.transfers}>
                        <span>Без смены аэропорта</span>
                        <Switch />
                      </div>
                      <div className={scss.transfers}>
                        <span>Без смены аэропорта</span>
                        <Switch />
                      </div>
                    </div>
                  )}
                  <div
                    className={scss.content_header}
                    onClick={() => setCompany(!company)}
                  >
                    <h3>Авиакомпании</h3>
                    <span
                      className={`${scss.arrow} ${company ? scss.rotated : ""}`}
                    >
                      <FaAngleDown />
                    </span>
                  </div>
                  {company && (
                    <div className={scss.company_content}>
                      <div className={scss.company}>
                        <article>
                          <img src={sf} alt="logo" />
                          <span>Skyfru</span>
                        </article>
                        <div className={scss.side}>
                          <span>800 сом</span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <div className={scss.company}>
                        <article>
                          <img src={sf} alt="logo" />
                          <span>Skyfru</span>
                        </article>
                        <div className={scss.side}>
                          <span>800 сом</span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <div className={scss.company}>
                        <article>
                          <img src={sf} alt="logo" />
                          <span>Skyfru</span>
                        </article>
                        <div className={scss.side}>
                          <span>800 сом</span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <div className={scss.company}>
                        <article>
                          <img src={sf} alt="logo" />
                          <span>Skyfru</span>
                        </article>
                        <div className={scss.side}>
                          <span>800 сом</span>
                          <input type="checkbox" />
                        </div>
                      </div>
                      <div className={scss.company}>
                        <article>
                          <img src={sf} alt="logo" />
                          <span>Skyfru</span>
                        </article>
                        <div className={scss.side}>
                          <span>800 сом</span>
                          <input type="checkbox" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={scss.content_header}
                    onClick={() => setTime(!time)}
                  >
                    <h3>Время</h3>
                    <span
                      className={`${scss.arrow} ${time ? scss.rotated : ""}`}
                    >
                      <FaAngleDown />
                    </span>
                  </div>
                  {time && (
                    <div className={scss.timeTakes_content}>
                      <div className={scss.timeTakes}>
                        <header>
                          <span>Вылет</span>
                          <div className={scss.time}>
                            <p>0ч 0м</p>
                            <span className={scss.line}></span>
                            <p>1ч 0м</p>
                          </div>
                        </header>
                        <input type="range" />
                      </div>
                      <div className={scss.timeTakes}>
                        <header>
                          <span>Прилет</span>
                          <div className={scss.time}>
                            <p>0ч 0м</p>
                            <span className={scss.line}></span>
                            <p>1ч 0м</p>
                          </div>
                        </header>
                        <input type="range" />
                      </div>
                    </div>
                  )}
                  <div
                    className={scss.content_header}
                    onClick={() => setModels(!models)}
                  >
                    <h3>Модели самолётов</h3>
                    <div className={scss.clear}>
                      Выбрать все{" "}
                      <span
                        className={`${scss.arrow} ${
                          models ? scss.rotated : ""
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                  {models && (
                    <div className={scss.models_content}>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                      <div className={scss.models}>
                        <div className={scss.flights}>
                          <div className={scss.input_group}>
                            <input type="checkbox" name="flights" />
                            <label htmlFor="flights">AirbusA319</label>
                          </div>
                          <span>800 сом</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={scss.content_header}
                    onClick={() => setSort(!sort)}
                  >
                    <h3>Сортировка</h3>
                    <div className={scss.clear}>
                      Сбросить{" "}
                      <span
                        className={`${scss.arrow} ${sort ? scss.rotated : ""}`}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                  {sort && (
                    <div className={scss.sort_content}>
                      <div className={scss.sort}>
                        <input type="radio" name="recommended" />
                        <label htmlFor="recommended">Рекомендуемые</label>
                      </div>
                      <div className={scss.sort}>
                        <input type="radio" name="cheap" />
                        <label htmlFor="cheap">Самые дешёвые</label>
                      </div>

                      <div className={scss.sort}>
                        <input type="radio" name="early" />
                        <label htmlFor="early">С ранним вылетом</label>
                      </div>
                      <div className={scss.sort}>
                        <input type="radio" name="early2" />
                        <label htmlFor="early2">С ранним прибытием</label>
                      </div>
                      <div className={scss.sort}>
                        <input type="radio" name="short" />
                        <label htmlFor="short">С короткими пересадками</label>
                      </div>
                      <div className={scss.sort}>
                        <input type="radio" name="fast" />
                        <label htmlFor="fast">Самые быстрые</label>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
            <div className={scss.block2}>
              <nav>{navs}</nav>
              <main>{ticket}</main>
            </div>
            <Advertisement />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AirTickets;
