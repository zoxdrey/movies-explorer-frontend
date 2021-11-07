import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </div>
  );
};

export default MoviesCardList;
