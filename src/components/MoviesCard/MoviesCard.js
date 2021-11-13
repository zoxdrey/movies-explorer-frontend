import "./MoviesCard.css";
import image from "../../images/film-image-placeholder.png";
const MoviesCard = ({ iconType }) => {
  const getIconType = (iconType) => {
    switch (iconType) {
      case 1:
        return <button className="movies-card__like-button"></button>;
      case 2:
        return <button className="movies-card__like-button_active"></button>;
      case 3:
        return <button className="movies-card__delete-button"></button>;
      default:
        return <button className="movies-card__like-button"></button>;
    }
  };

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <div className="movies-card__time">1ч 42м</div>
        </div>
        {getIconType(iconType)}
      </div>
      <div className="movies-card__image-wrapper">
        <img className="movies-card__image" src={image} alt="постер" />
      </div>
    </div>
  );
};

export default MoviesCard;
