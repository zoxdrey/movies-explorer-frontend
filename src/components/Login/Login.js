import "./Login.css";
import logo from "../../images/logo.svg";
const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="логотип" />
      </div>

      <form className="login-form">
        <h2 className="login-form__title">Рады видеть!</h2>
        <label for="email" className="login-form__label">
          {" "}
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
        <a href="#" className="login__link">
          Регистрация
        </a>
      </p>
    </div>
  );
};

export default Login;
