import React from "react";
import "./style.css";
import { ReactComponent as SearchIcon } from "../../../../../../assets/icons/search.svg";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search">
        <SearchIcon />
        <input placeholder="Buscar..." id="srcInput"></input>
      </div>
    </div>
  );
}

export default SearchBar;
