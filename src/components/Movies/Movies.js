import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getAllFilms } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import { getMovies } from "../../utils/MainApi";
import { deleteMovie } from "./../../utils/MainApi";
const Movies = () => {
  const [filmsList, setFilmsList] = useState([]);
  const [filmsListFiltered, setFilmsListFiltered] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [query, setQuery] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const token = localStorage.getItem("token");

  function handleSearchSubmit(value) {
    if (value) {
      setQuery(value);
      getAllMovies(value);
      setFilmsListFiltered(
        filmsList.filter((item) => {
          return item.nameRU.indexOf(value) + 1;
        })
      );
    }
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

  function getAllMovies(value) {
    if (localStorage.getItem("filmList")) {
      const films = JSON.parse(localStorage.getItem("filmList"));
      setFilmsList(films);
      return;
    }
    getAllFilms()
      .then((data) => {
        setFilmsList(data);
        localStorage.setItem("filmList", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="movies">
      <Header />
      <SearchForm
        isButtonDisabled={isButtonDisabled}
        handleSubmit={handleSearchSubmit}
      />
      <MoviesCardList
        onCardButtonClick={onCardButtonClick}
        filmsList={filmsListFiltered}
        savedMovies={savedMovies}
      />
      <Footer />
    </div>
  );
};

export default Movies;
