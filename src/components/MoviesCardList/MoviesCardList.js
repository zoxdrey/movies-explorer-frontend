import MoviesCard from "../MoviesCard/MoviesCard";
import Portfolio from "../Portfolio/Portfolio";
import "./MoviesCardList.css";
import { FILM_POSTER_URL } from "../../utils/consts";
import { createMovie } from "./../../utils/MainApi";
import { useEffect, useState } from "react/cjs/react.development";

const MoviesCardList = ({
  filmsList,
  onCardButtonClick,
  isSaved,
  savedMovies,
  setSavedMovies,
  searched,
  handleMoreClick,
  chunkSize,
  ...props
}) => {
  function handleClick() {
    handleMoreClick();
  }

  let hideBtn = false;

  function onCardClick(film) {
    const filmToCreate = {
      country: film.country,
      director: film.director,
      duration: film.duration,
      year: film.year,
      description: film.description,
      image: FILM_POSTER_URL + film.image.url,
      trailer: film.trailerLink,
      nameRU: film.nameRU,
      nameEN: film.nameEN,
      thumbnail: FILM_POSTER_URL + film.image.formats.thumbnail.url,
      movieId: film.id,
    };
    createMovie(filmToCreate, localStorage.getItem("token"))
      .then((res) => setSavedMovies([...savedMovies, res.movie]))
      .catch((err) => {});
  }

  function getIconType(film) {
    if (isSaved) return 3;
    if (
      savedMovies.some((item) => {
        return parseInt(item.movieId) === film.id;
      })
    ) {
      return 2;
    }
    return 1;
  }

  function getFilmListChunk() {
    const filmListSliced = filmsList?.slice(0, chunkSize);
    const hideBtn = filmListSliced.length === filmsList.length;
    return filmListSliced.length !== 0 ? (
      filmListSliced.map((film, index) => (
        <MoviesCard
          iconType={getIconType(film)}
          film={film}
          key={film.id}
          onLikeClick={onCardClick}
          onDislikeClick={onCardButtonClick}
          onDeleteClick={onCardButtonClick}
        />
      ))
    ) : (
      <div className="movies-card-list_error">
        {searched ? "Ничего не найдено" : "Еще ничего не искали"}
      </div>
    );
  }

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__list">{getFilmListChunk()}</div>
      {filmsList.length > 10 && filmsList.length > chunkSize && (
        <button className="movies-card-list__button" onClick={handleClick}>
          Ещё
        </button>
      )}
    </div>
  );
};

export default MoviesCardList;
