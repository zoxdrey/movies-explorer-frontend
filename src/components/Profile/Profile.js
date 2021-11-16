import Header from "../Header/Header";
import { useContext } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
const Profile = () => {
  const currentUser = JSON.parse(useContext(CurrentUserContext));

  return (
    <div className="profile__container">
      <Header showAuthNav={false} />
      <div className="profile">
        <div className="profile__info">
          <div className="profile__title">Привет, {currentUser.name}!</div>
          <div className="profile__row">
            <div className="profile__text">Имя</div>
            <div className="profile__text">{currentUser.name}</div>
          </div>
          <div className="profile__devider"></div>
          <div className="profile__row">
            <div className="profile__text">E-mail</div>
            <div className="profile__text">{currentUser.email}</div>
          </div>
        </div>
        <div className="profile__bottom">
          <div className="profile__bottom-text">Редактировать</div>
          <div className="profile__link">Выйти из аккаунта</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
