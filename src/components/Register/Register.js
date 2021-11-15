import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { register } from "../../utils/MainApi";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    register({ email, name, password }).then(() => {
      resetForm();
    });
  }

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="register">
      <Link to={"/"} className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label htmlFor="name" className="register-form__label">
          Имя
        </label>
        <input
          type="text"
          id="name"
          className="register-form__input"
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="email" className="register-form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="register-form__input"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
        <label htmlFor="password" className="register-form__label">
          Пароль
        </label>
        <input
          className="register-form__input"
          maxLength="20"
          minLength="2"
          id="password"
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
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
