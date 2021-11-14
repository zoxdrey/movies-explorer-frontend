import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <div className="login">
      <Link to={"/"} className="login__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Рады видеть!</h2>
        <label htmlFor="email" className="login-form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="login-form__input"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
        <label htmlFor="password" className="login-form__label">
          Пароль
        </label>
        <input
          className="login-form__input"
          maxLength="20"
          minLength="2"
          id="password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button aria-label="Login" className="login-form__button" type="submit">
          Вход
        </button>
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?
        <Link to={"/signup"} className="login__link">
          Регистрация
        </Link>
      </p>
    </div>
  );
};

export default Login;
