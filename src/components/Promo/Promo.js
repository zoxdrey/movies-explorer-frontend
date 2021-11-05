import "./Promo.css";
import logo from "../../images/promo-logo.svg";
const Promo = () => {
  return (
    <div className="promo">
      <div className="promo-content">
        <div className="promo-text">
          <h1 className="promo-title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo-subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <div className="promo-logo">
          <img src={logo} alt="Промо логотип" />
        </div>
      </div>

      <a href="#" className="promo-link">
        Узнать больше
      </a>
    </div>
  );
};

export default Promo;
