import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import { useState } from "react";
const SearchForm = ({
  isButtonDisabled,
  handleSubmit,
  handleCheckboxChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(searchQuery);
  }

  function handleSearchQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="search-form-wrapper">
      <form
        className="search-form"
        name="search-from"
        onSubmit={handleFormSubmit}
      >
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
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <button
            aria-label="Save"
            className="search-form__button"
            type="submit"
            disabled={isButtonDisabled}
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
            onClick={handleCheckboxChange}
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
