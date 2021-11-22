import "./Header.css";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/account_icon.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <div className={`header ${!currentUser.name ? "" : "header_no-auth"}`}>
        <Link to={"/"} className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        {!currentUser.name ? (
          <nav className="header-auth__nav-bar">
            <a href="/signup" className="header-auth__nav-bar-item">
              Регистрация
            </a>
            <a
              href="/signin"
              className="header-auth__nav-bar-item header-auth__nav-bar-item_active"
            >
              Войти
            </a>
          </nav>
        ) : (
          <>
            <nav className="header__nav-bar">
              <a href="/movies" className="header__nav-bar-item">
                Фильмы
              </a>
              <a href="/saved-movies" className="header__nav-bar-item">
                Сохранённые фильмы
              </a>
            </nav>
            <Link to="/profile" className="header__account">
              Аккаунт
              <div className="header__account-icon-wrapper">
                <img
                  className="header__account-icon"
                  src={accountIcon}
                  alt="иконка аккаунта"
                ></img>
              </div>
            </Link>
            <div className="menu__button" onClick={toggleMenu}>
              <div className="menu__button-row"></div>
              <div className="menu__button-row"></div>
              <div className="menu__button-row"></div>
            </div>
          </>
        )}
      </div>
      <Menu show={menuToggle} onClose={toggleMenu} />
    </>
  );
};

export default Header;
