import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { register } from "../../utils/MainApi";
import { login } from "../../utils/MainApi";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

const Register = () => {
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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    register(values)
      .then((res) => {
        if (res) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          login({ email: res.data.email, password: values.password }).then(
            (res) => {
              localStorage.setItem("token", res.token);
              navigate("../movies", { replace: true });
            }
          );
        }
      })
      .catch((err) => {
        if (err) {
          setFetchError(JSON.parse(err).message);
        }
      });
  }

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
          value={values.name}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
        ></input>
        <span className="register-form__input-error">{errors.name}</span>
        <label htmlFor="email" className="register-form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="register-form__input"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
        ></input>
        <span className="register-form__input-error">{errors.email}</span>
        <label htmlFor="password" className="register-form__label">
          Пароль
        </label>
        <input
          className="register-form__input"
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
          aria-label="register"
          className="register-form__button"
          type="submit"
          disabled={!isValid}
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
