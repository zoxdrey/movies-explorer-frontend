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
        </div>
        <div className="promo__logo">
          <img src={logo} alt="Промо логотип" />
        </div>
      </div>

      <a href="#" className="promo__link">
        Узнать больше
      </a>
    </div>
  );
};

export default Promo;
