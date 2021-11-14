import "./Menu.css";
import accountIcon from "../../images/account_icon.svg";
import closeIcon from "../../images/close-icon.svg";
import { Link } from "react-router-dom";
const Menu = (props) => {
  return (
    props.show && (
      <div className="menu-container">
        <div className="menu__cover"></div>
        <div className="menu__nav">
          <div className="menu__nav-icon" onClick={props.onClose}>
            <img src={closeIcon} alt="иконка закрытия"></img>
          </div>
          <div className="menu__nav-items">
            <Link to="/" className="menu__nav-item">
              Главная
            </Link>
            <Link to="/movies" className="menu__nav-item">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="menu__nav-item">
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="/profile" className="menu__account">
            Аккаунт
            <div className="menu__account-icon-wrapper">
              <img
                className="menu__account-icon"
                src={accountIcon}
                alt="иконка аккаунта"
              ></img>
            </div>
          </Link>
        </div>
      </div>
    )
  );
};

export default Menu;
