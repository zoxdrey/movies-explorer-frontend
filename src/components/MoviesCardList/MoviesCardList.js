import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ filmsList }) => {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__list">
        {filmsList &&
          filmsList.map((film) => (
            <MoviesCard iconType={1} film={film} key={film.id} />
          ))}
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </div>
  );
};

export default MoviesCardList;
