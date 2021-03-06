import "./Promo.css";
import logo from "../../images/promo-logo.svg";
const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__content">
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#about-project" className="promo__link">
            Узнать больше
          </a>
        </div>
        <div className="promo__logo-wrapper">
          <img className="promo__logo" src={logo} alt="Промо логотип" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
