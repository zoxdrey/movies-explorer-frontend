import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
const Movies = () => {
  return (
    <div className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
};

export default Movies;
