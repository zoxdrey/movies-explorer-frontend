import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getAllFilms } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
const Movies = () => {
  const [filmsList, setFilmsList] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleSearchSubmit(value) {
    if (value) {
      getAllMovies();
      setSearchQuery(value);
    }
  }

  function getAllMovies() {
    getAllFilms()
      .then((data) => {
        setFilmsList(data);
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
      <MoviesCardList filmsList={filmsList} />
      <Footer />
    </div>
  );
};

export default Movies;
