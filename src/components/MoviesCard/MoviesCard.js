import "./MoviesCard.css";
import image from "../../images/film-image-placeholder.png";
import likeIcon from "../../images/like-icon.svg";
const MoviesCard = () => {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <div className="movies-card__time">1ч 42м</div>
        </div>
        <div className="movies-card__tike">
          <img src={likeIcon} alt="like-icon" />
        </div>
      </div>
      <div className="movies-card__image">
        <img src={image} alt="постер" />
      </div>
    </div>
  );
};

export default MoviesCard;
