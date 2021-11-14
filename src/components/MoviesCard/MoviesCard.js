import "./MoviesCard.css";
import { FILM_POSTER_URL } from "../../utils/consts";
const MoviesCard = ({ iconType, film }) => {
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

  const getFilmDuration = (duration) => {
    const hours = duration / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  };

  return (
    <div className="movies-card">
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
          src={FILM_POSTER_URL + film.image.url}
          alt="постер"
        />
      </div>
    </div>
  );
};

export default MoviesCard;
