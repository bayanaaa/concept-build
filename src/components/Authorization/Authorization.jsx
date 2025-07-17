import React, { useEffect, useRef, useState } from "react";
import scss from "./Authorization.module.scss";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import google from "../../assets/google.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const arr = ["Войти", "Регистрация"];

function Authorization({ setAuthOpen }) {
  const [method, setMethod] = useState("Войти");
  const [passwordHidden, setPasswordHidden] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setAuthOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, [setAuthOpen]);

  const types = arr.map((el, index) => (
    <p
      onClick={() => setMethod(el)}
      key={index}
      className={method === el ? scss.active : ""}
    >
      {el}
    </p>
  ));

  return (
    <div className={scss.wrapper}>
      <div className={scss.window} ref={wrapperRef}>
        <div className={scss.aut_methods}>{types}</div>
        <div className={scss.content}>
          {method === "Войти" ? (
            <>
              <h2>Вход в аккаунт</h2>
              <p className={scss.welcoming_text}>
                Добро пожаловать! Войдите, чтобы продолжить.
              </p>
              <form>
                <div className={scss.input_wrapper}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Введите ваш email"
                  />
                </div>
                <div className={`${scss.input_wrapper} ${scss.input_wrapper2}`}>
                  <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                      type={!passwordHidden ? "password" : "text"}
                      name="password"
                      placeholder="Введите ваш пароль"
                    />
                  </div>
                  <p
                    className={scss.icon}
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  >
                    {!passwordHidden ? <FaRegEyeSlash size={18} /> : <FaEye />}
                  </p>
                </div>
                <section className={scss.bottom}>
                  <div className={scss.remember}>
                    <input type="checkbox" name="remember" />
                    <label htmlFor="remember">Запомнить меня</label>
                  </div>
                  <p className={scss.forget}>Забыли пароль?</p>
                </section>
                <button type="submit">Войти</button>
              </form>
            </>
          ) : (
            <>
              <h2>Создайте аккаунт</h2>
              <p className={scss.welcoming_text}>Это займёт всего минуту!</p>
              <form>
                <div className={scss.input_wrapper}>
                  <label htmlFor="name">Имя</label>
                  <input type="text" name="name" placeholder="Ваше имя" />
                </div>
                <div className={scss.input_wrapper}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Введите ваш email"
                  />
                </div>
                <div className={scss.inpWrap}>
                  <div>
                    <PhoneInput
                      country={"kg"}
                      inputProps={{ required: true, readOnly: true }}
                      containerClass={`${scss.input_wrapper} ${scss.inp}`}
                    />
                  </div>
                  <div className={scss.input_wrapper}>
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Введите номер телефона"
                    />
                  </div>
                </div>
                <div className={`${scss.input_wrapper} ${scss.input_wrapper2}`}>
                  <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                      type={!passwordHidden ? "password" : "text"}
                      name="password"
                      placeholder="Введите ваш пароль"
                    />
                  </div>
                  <p
                    className={scss.icon}
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  >
                    {!passwordHidden ? <FaRegEyeSlash size={18} /> : <FaEye />}
                  </p>
                </div>
                <div className={`${scss.input_wrapper} ${scss.input_wrapper2}`}>
                  <div>
                    <label htmlFor="password2">Подтвердите пароль</label>
                    <input
                      type={!passwordHidden ? "password" : "text"}
                      name="password2"
                      placeholder="Повторите пароль"
                    />
                  </div>
                  <p
                    className={scss.icon}
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  >
                    {!passwordHidden ? <FaRegEyeSlash size={18} /> : <FaEye />}
                  </p>
                </div>
                <div className={scss.remember}>
                  <input type="checkbox" name="agree" />
                  <label htmlFor="agree">
                    Я принимаю условия использования и политику конфиденциальности
                  </label>
                </div>
              </form>
            </>
          )}
          <section className={scss.other_meth}>
            <div className={scss.intro}>
              <span className={scss.line}></span>
              <p className={scss.text}>Или войдите через</p>
              <span className={scss.line}></span>
            </div>
            <div className={scss.withGoogle}>
              <img src={google} alt="google logo" />
              <span>Продолжить с Google</span>
            </div>
            <div className={scss.noAcc}>
              {method === "Войти" ? (
                <>
                  <p>Нет аккаунта? </p>
                  <span onClick={() => setMethod("Регистрация")}>
                    Зарегистрироваться
                  </span>
                </>
              ) : (
                <>
                  <p>Уже есть аккаунт? </p>
                  <span onClick={() => setMethod("Войти")}>Войти</span>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
