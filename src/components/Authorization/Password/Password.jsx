import React from "react";
import scss from "./Password.module.scss";

function Password() {
  return (
    <div className={scss.wrapper}>
      <div className={scss.window}>
        <h2>Забыли пароль?</h2>
        <span className={scss.intro}>
          Введите email или номер телефона, и мы пришлём вам код для
          восстановления.
        </span>
        <form>
          <div className={scss.input_group}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Password;
