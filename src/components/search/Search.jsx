import React from "react";
import "./Search.scss";

function Search({ searchfield, searchChange }) {
  return (
    <div className="search__container">
      <input
        className="search__container-input"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  );
}

export default Search;
