import "./Portfolio.css";
import arrowIcon from "../../images/arrow-icon.svg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <div className="portfolio__list-item-text">Статичный сайт</div>
          <div className="portfolio__list-item-icon">
            <img src={arrowIcon} alt="иконка"></img>
          </div>
        </li>
        <div className="portfolio__list-devider"></div>
        <li className="portfolio__list-item">
          <div className="portfolio__list-item-text">Адаптивный сайт</div>
          <div className="portfolio__list-item-icon">
            <img src={arrowIcon} alt="иконка"></img>
          </div>
        </li>
        <div className="portfolio__list-devider"></div>
        <li className="portfolio__list-item">
          <div className="portfolio__list-item-text">
            Одностраничное приложение
          </div>
          <div className="portfolio__list-item-icon">
            <img src={arrowIcon} alt="иконка"></img>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
