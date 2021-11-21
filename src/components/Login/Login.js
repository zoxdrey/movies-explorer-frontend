import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { login } from "../../utils/MainApi";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useState, useEffect } from "react";
import { getUser } from "./../../utils/MainApi";
const Login = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    fetchError,
    setFetchError,
  } = useFormWithValidation();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("./");
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    login(values)
      .then((res) => {
        localStorage.setItem("token", res.token);
        getUser(res.token).then((res) => {
          localStorage.setItem("currentUser", JSON.stringify(res));
          resetForm();
          navigate("../movies", { replace: true });
        });
      })
      .catch((err) => {
        if (err) {
          setFetchError(JSON.parse(err).message);
        }
      });
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
          value={values.email}
          onChange={handleChange}
        ></input>
        <span className="register-form__input-error">{errors.email}</span>
        <label htmlFor="password" className="login-form__label">
          Пароль
        </label>
        <input
          className="login-form__input"
          maxLength="20"
          minLength="2"
          id="password"
          name="password"
          type="password"
          required
          value={values.password}
          onChange={handleChange}
        ></input>
        <span className="register-form__input-error">{errors.password}</span>
        <span className="register-form__input-error">{fetchError}</span>
        <button
          aria-label="Login"
          className="login-form__button"
          type="submit"
          disabled={!isValid}
        >
          Вход
        </button>
      </form>
      <div>{fetchError}</div>
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
