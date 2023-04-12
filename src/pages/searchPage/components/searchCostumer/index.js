import React from "react";
import { ReactComponent as ShapeIcon } from "../../../../assets/icons/shape.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow.svg";
import "./style.css";
import SearchBar from "./components/searchBar";
import ClientRadio from "./components/Radios/clientRadio";
import AdditionalOptions from "./components/Radios/additionalOptions";

function SearchCostumer() {
  return (
    <div className="search-costumer">
      <div className="section-title">
        <div className="align-left">
          <ShapeIcon />
          <p className="title">Dados do cliente/pedido</p>
        </div>
        <div className="align-right">
          <div className="toggle-show-hide-base">
            <label>Ocultar opções adicionais</label>
            <ArrowIcon />
          </div>
        </div>
      </div>
      <rect className="rect fill"></rect>
      <SearchBar />
      <div className="search-radio-options">
        <ClientRadio />
        <AdditionalOptions />
      </div>
    </div>
  );
}

export default SearchCostumer;
