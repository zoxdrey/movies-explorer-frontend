import MoviesCard from "../MoviesCard/MoviesCard";
import Portfolio from "../Portfolio/Portfolio";
import "./MoviesCardList.css";

const MoviesCardList = ({ filmsList }) => {
  function handleClick() {
    console.log(filmsList);
  }
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__list">
        {filmsList &&
          filmsList.map((film, index) => (
            <MoviesCard iconType={1} film={film} key={film.id} />
          ))}
      </div>
      <button className="movies-card-list__button" onClick={handleClick}>
        Ещё
      </button>
    </div>
  );
};

export default MoviesCardList;
