import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { getMovies } from "../../utils/MainApi";
import { deleteMovie } from "./../../utils/MainApi";
import { shortFilmDuration, chunkSizeDefault } from "../../utils/consts";
import Preloader from "./../Preloader/Preloader";
const SavedMovies = () => {
  const [filmsList, setFilmList] = useState([]);
  const [filmsListFiltered, setFilmsListFiltered] = useState([]);
  const token = localStorage.getItem("token");
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const [isShortFilmSearch, setIsShortFilmSearch] = useState(false);
  const [chunkSize, setChunkSize] = useState(chunkSizeDefault);
  useEffect(() => {
    setIsLoaderShow(true);
    if (token) {
      getMovies(token).then((data) => {
        setFilmList(data);
        setFilmsListFiltered(filterData(data));
        setIsLoaderShow(false);
      });
    }
    setIsLoaderShow(false);
  }, [token]);

  const hideLoaderWithDelay = () => {
    setTimeout(() => {
      setIsLoaderShow(false);
    }, 500);
  };

  function onCardButtonClick(film) {
    setIsLoaderShow(true);
    deleteMovie(film._id, token)
      .then((res) => {
        setFilmsListFiltered(
          filmsListFiltered.filter((item) => item._id !== res.movie._id)
        );
        setIsLoaderShow(false);
      })
      .catch((err) => {
        setIsLoaderShow(false);
      });
    setIsLoaderShow(false);
  }

  function handleSearchSubmit(value) {
    setIsLoaderShow(true);
    setFilmsListFiltered(filterData(filmsList, value));
    hideLoaderWithDelay();
  }

  function filterData(data, query) {
    if (!query) return data;
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

  function handleMoreClick() {
    setChunkSize(chunkSize + chunkSizeDefault);
  }

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm
        handleSubmit={handleSearchSubmit}
        setIsShortFilmSearch={setIsShortFilmSearch}
      />
      {isLoaderShow ? (
        <Preloader />
      ) : (
        <MoviesCardList
          filmsList={filmsListFiltered}
          onCardButtonClick={onCardButtonClick}
          isSaved={true}
          handleMoreClick={handleMoreClick}
          chunkSize={chunkSize}
        />
      )}
      <Footer />
    </div>
  );
};

export default SavedMovies;
