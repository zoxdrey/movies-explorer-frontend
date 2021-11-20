import "./MoviesCard.css";
import { FILM_POSTER_URL } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
const MoviesCard = ({
  iconType,
  film,
  onLikeClick,
  onDislikeClick,
  onDeleteClick,
}) => {
  const navigate = useNavigate();

  function onLikeClickHandler() {
    onLikeClick(film);
  }

  function onDislikeClickHandler() {
    onDislikeClick(film);
  }

  function onDeleteClickHandler() {
    onDeleteClick(film);
  }
  const getIconType = (iconType) => {
    switch (iconType) {
      case 1:
        return (
          <button
            className="movies-card__like-button"
            onClick={onLikeClickHandler}
          ></button>
        );
      case 2:
        return (
          <button
            className="movies-card__like-button_active"
            onClick={onDislikeClickHandler}
          ></button>
        );
      case 3:
        return (
          <button
            className="movies-card__delete-button"
            onClick={onDeleteClickHandler}
          ></button>
        );
      default:
        return <button className="movies-card__like-button"></button>;
    }
  };

  const getFilmDuration = (duration) => {
    const hours = duration / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  };

  const getCardImageUrl = () => {
    return (film.image.url && FILM_POSTER_URL + film.image.url) || film.image;
  };

  const handleCardClick = (e) => {
    if (e.target.className.includes("like-button")) return;
    window.open(film.trailerLink);
  };

  return (
    <div className="movies-card" onClick={handleCardClick}>
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{film.nameRU}</h2>
          <div className="movies-card__time">
            {getFilmDuration(film.duration)}
          </div>
        </div>
        {getIconType(iconType)}
      </div>
      <div className="movies-card__image-wrapper">
        <img
          className="movies-card__image"
          src={getCardImageUrl()}
          alt="постер"
        />
      </div>
    </div>
  );
};

export default MoviesCard;
