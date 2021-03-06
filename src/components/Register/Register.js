import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <Link to={"/"} className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <form className="register-form">
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label for="name" className="register-form__label">
          Имя
        </label>
        <input
          type="text"
          id="name"
          className="register-form__input"
          name="name"
          required
        ></input>
        <label for="email" className="register-form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="register-form__input"
          name="email"
          required
        ></input>
        <label for="password" className="register-form__label">
          Пароль
        </label>
        <input
          className="register-form__input"
          maxLength="20"
          minLength="2"
          id="password"
          name="password"
          required
        ></input>
        <button
          aria-label="register"
          className="register-form__button"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <Link to={"/signin"} className="register__link">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default Register;
