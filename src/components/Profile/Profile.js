import Header from "../Header/Header";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile__container">
      <Header showAuthNav={false} />
      <div className="profile">
        <div className="profile__info">
          <div className="profile__title">Привет, Виталий!</div>
          <div className="profile__row">
            <div className="profile__text">Имя</div>
            <div className="profile__text">Виталий</div>
          </div>
          <div className="profile__devider"></div>
          <div className="profile__row">
            <div className="profile__text">E-mail</div>
            <div className="profile__text">pochta@yandex.ru</div>
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
