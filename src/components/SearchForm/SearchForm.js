import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useState } from "react";
const SearchForm = ({ handleSubmit, handleCheckboxChange, setSearched }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [serachError, setSearchError] = useState("");
  function handleSearchChange(e) {
    if (serachError) {
      setSearchError("");
    }
    handleChange(e);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (setSearched) {
      setSearched(true);
    }
    if (!values.search) {
      setSearchError("Нужно ввести ключевое слово");
      return;
    }
    handleSubmit(values.search);
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
            type="text"
            className="search-form__input"
            id="search"
            name="search"
            placeholder="Фильм"
            value={values.search}
            onChange={handleSearchChange}
            noValidate
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
      <div className="seacrh-form_errors">{serachError}</div>
      <div className="search-form-wrapper__devider"></div>
    </div>
  );
};

export default SearchForm;
