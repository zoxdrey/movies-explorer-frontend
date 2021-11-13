import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <Link to={"/"} className="login__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <form className="login-form">
        <h2 className="login-form__title">Рады видеть!</h2>
        <label for="email" className="login-form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="login-form__input"
          name="email"
          required
        ></input>
        <label for="password" className="login-form__label">
          Пароль
        </label>
        <input
          className="login-form__input"
          maxLength="20"
          minLength="2"
          id="password"
          name="password"
          required
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
