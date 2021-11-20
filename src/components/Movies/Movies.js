import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getAllFilms } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import { getMovies } from "../../utils/MainApi";
import { deleteMovie } from "./../../utils/MainApi";
import Preloader from "./../Preloader/Preloader";
import { shortFilmDuration } from "../../utils/consts";
const Movies = () => {
  const [filmsList, setFilmsList] = useState([]);
  const [filmsListFiltered, setFilmsListFiltered] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const [isShortFilmSearch, setIsShortFilmSearch] = useState(false);
  const token = localStorage.getItem("token");

  const handleSearchSubmit = (value) => {
    setIsLoaderShow(true);
    if (filmsList.length !== 0 && value) {
      setFilmsListFiltered(filterData(filmsList, value));
    }
    if (value) {
      getAllMovies(value);
    }
    hideLoaderWithDelay();
  };

  const hideLoaderWithDelay = () => {
    setTimeout(() => {
      setIsLoaderShow(false);
    }, 500);
  };

  function filterData(data, query) {
    const result = data.filter((item) => {
      if (isShortFilmSearch) {
        return (
          item.nameRU?.toLowerCase().includes(query?.toLowerCase()) &&
          item.duration > shortFilmDuration
        );
      }
      return item.nameRU?.toLowerCase().includes(query?.toLowerCase());
    });
    return result;
  }

  function onCardButtonClick(film) {
    const filmObj = savedMovies.find(
      (item) => parseInt(item.movieId) === film.id
    );
    deleteMovie(filmObj._id, token)
      .then((res) => {
        getMovies(token).then((data) => {
          setSavedMovies(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (token) {
      getMovies(token).then((data) => {
        setSavedMovies(data);
      });
    }
  }, [token]);

  const handleCheckboxChange = () => {
    setIsShortFilmSearch(!isShortFilmSearch);
  };

  function getAllMovies(value) {
    setIsLoaderShow(true);
    if (localStorage.getItem("filmList")) {
      const films = JSON.parse(localStorage.getItem("filmList"));
      setFilmsList(films);
      setFilmsListFiltered(filterData(films, value));
      return;
    }
    getAllFilms()
      .then((data) => {
        setFilmsList(data);
        setFilmsListFiltered(filterData(data, value));
        localStorage.setItem("filmList", JSON.stringify(data));
        setIsLoaderShow(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaderShow(false);
      });
    hideLoaderWithDelay(false);
  }

  return (
    <div className="movies">
      <Header />

      <SearchForm
        isButtonDisabled={isButtonDisabled}
        handleSubmit={handleSearchSubmit}
        handleCheckboxChange={handleCheckboxChange}
      />
      {isLoaderShow ? (
        <Preloader />
      ) : (
        <MoviesCardList
          setSavedMovies={setSavedMovies}
          onCardButtonClick={onCardButtonClick}
          filmsList={filmsListFiltered}
          savedMovies={savedMovies}
        />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
