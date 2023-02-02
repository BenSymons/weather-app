import React from "react";
import PropTypes from "prop-types";
import { TfiSearch } from "react-icons/tfi";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form" role="search">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        data-testid="search-input"
      />
      <button
        className="button"
        type="submit"
        onClick={onSubmit}
        data-testid="search-button"
      >
        <TfiSearch />
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
