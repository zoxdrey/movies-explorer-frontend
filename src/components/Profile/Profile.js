import Header from "../Header/Header";
import { useContext } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { updateUser } from "../../utils/MainApi";
const Profile = ({ setCurrentUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  function handleExitLinkClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("filmList");
    navigate("../");
  }

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    fetchError,
    setFetchError,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(values, localStorage.getItem("token"))
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        if (err) {
          setFetchError(JSON.parse(err).message);
        }
      });
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
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                placeholder={currentUser.name}
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
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                placeholder={currentUser.email}
              ></input>
            </div>
            <span className="profile__info-error">{errors.email}</span>
            <span className="profile__info-error">{fetchError}</span>
          </div>
          <button
            className={`profile__info-button ${
              isValid && `profile__info-button_active`
            }`}
            disabled={!isValid}
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
