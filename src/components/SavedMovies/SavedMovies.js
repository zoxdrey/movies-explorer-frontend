import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { getMovies } from "../../utils/MainApi";
import { deleteMovie } from "./../../utils/MainApi";
const SavedMovies = () => {
  const [filmsList, setFilmList] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      getMovies(token).then((data) => {
        setFilmList(data);
      });
    }
  }, [token]);

  function onCardButtonClick(film) {
    deleteMovie(film._id, token)
      .then((res) => {
        setFilmList(filmsList.filter((item) => item._id !== res.movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearchSubmit(value) {
    setFilmList(filmsList.filter((item) => item.nameRU.indexOf(value) + 1));
  }

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm handleSubmit={handleSearchSubmit} />
      <MoviesCardList
        filmsList={filmsList}
        onCardButtonClick={onCardButtonClick}
        isSaved={true}
      />
      <Footer />
    </div>
  );
};

export default SavedMovies;
