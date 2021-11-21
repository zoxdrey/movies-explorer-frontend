import Header from "../Header/Header";
import { useContext } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { updateUser } from "../../utils/MainApi";
import { useState, useEffect } from "react";
const Profile = ({ setCurrentUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [dataChanged, setDataChanged] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function handleExitLinkClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("filmList");
    navigate("../");
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, []);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    fetchError,
    setFetchError,
    setValues,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(values, localStorage.getItem("token"))
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
          setMessage("Сохранено");
          setDataChanged(true);
        }
      })
      .catch((err) => {
        if (err) {
          setFetchError(JSON.parse(err).message);
        }
      });
  }

  function handleProfileChange(e) {
    if (message) {
      setMessage("");
    }
    handleChange(e);
    if (
      values.email === currentUser.email &&
      values.name === currentUser.name
    ) {
      setDataChanged(false);
    } else {
      setDataChanged(true);
    }
  }

  return (
    <div className="profile__container">
      <Header showAuthNav={false} />
      <div className="profile">
        <form className="profile__info" name="profile" onSubmit={handleSubmit}>
          <div>
            <div className="profile__title">Привет, {currentUser.name}!</div>
            <div className="profile__row">
              <div className="profile__text">Имя</div>
              <input
                type="text"
                id="name"
                className="profile__text"
                name="name"
                required
                value={values.name}
                onChange={handleProfileChange}
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <span className="profile__info-error">{errors.name}</span>
            <div className="profile__devider"></div>
          </div>
          <div>
            <div className="profile__row">
              <div className="profile__text">E-mail</div>{" "}
              <input
                type="email"
                id="email"
                className="profile__text"
                name="email"
                required
                value={values.email}
                onChange={handleProfileChange}
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <span className="profile__info-error">{errors.email}</span>
            <span className="profile__info-error">{fetchError}</span>
            <span className="profile__info-message">{message}</span>
          </div>
          <button
            className={`profile__info-button ${
              isValid && !dataChanged && `profile__info-button_active`
            }`}
            disabled={dataChanged || !isValid}
          >
            Редактировать
          </button>
        </form>
        <div className="profile__bottom">
          <div className="profile__link" onClick={handleExitLinkClick}>
            Выйти из аккаунта
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
