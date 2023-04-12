import React from "react";
import "./style.css";
import "./components/style.css";
import { useNavigate } from "react-router-dom";
import SearchCostumer from "./components/searchCostumer";
import SearchDates from "./components/searchDates";
import SearchService from "./components/searchService";
import Header from "./components/Header";

function SearchPage() {
  let navigate = useNavigate();

  return (
    <div className="searchPage">
      <div className="container advancedSrc">
        <Header />
        <rect className="rect fill"></rect>
        <div className="content-advancedSrc">
          <div className="scrollable-content">
            <SearchCostumer />
            <SearchDates />
            <SearchService />
            aaa
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
