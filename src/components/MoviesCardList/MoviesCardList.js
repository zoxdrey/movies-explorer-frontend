import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__list">
        <MoviesCard iconType={1} />
        <MoviesCard iconType={2} />
        <MoviesCard iconType={3} />
        <MoviesCard iconType={1} />
        <MoviesCard iconType={2} />
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </div>
  );
};

export default MoviesCardList;
