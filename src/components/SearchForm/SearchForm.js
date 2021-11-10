import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
const SearchForm = () => {
  return (
    <div className="search-form-wrapper">
      <form className="search-form" name="search-from">
        <div className="search-form__search">
          <img
            className="search-form__icon"
            src={searchIcon}
            alt="иконка поиска"
          />
          <input
            className="search-form__input"
            id="search"
            name="search"
            placeholder="Фильм"
            required
          />
          <button
            aria-label="Save"
            className="search-form__button"
            type="submit"
          >
            Найти
          </button>
        </div>
        <div className="search-form__checkbox-wrapper">
          <div className="search-form__devider"></div>
          <input
            className="search-form__input-checkbox"
            id="short-film"
            name="short-film"
            type="checkbox"
            required
          />
          <label
            htmlFor="short-film"
            className="search-form__input-checkbox-label"
          >
            Короткометражки
          </label>
        </div>
      </form>
      <div className="search-form-wrapper__devider"></div>
    </div>
  );
};

export default SearchForm;
