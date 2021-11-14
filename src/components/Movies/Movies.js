import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { getAllFilms } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
const Movies = () => {
  const [filmsList, setFilmsList] = useState([]);

  useEffect(() => {
    getAllFilms().then((data) => setFilmsList(data));
  }, []);
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList filmsList={filmsList} />
      <Footer />
    </div>
  );
};

export default Movies;
