import "./Header.css";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Логотип" />
      </div>
      <div className="header__nav-bar">
        <a href="#" className="header__nav-bar-item">
          Регистрация
        </a>
        <a href="#" className="header__nav-bar-item">
          Войти
        </a>
      </div>
    </div>
  );
};

export default Header;
