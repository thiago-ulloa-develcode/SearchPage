import React from "react";
import "../style.css";

export default function AdditionalOptions() {
  return (
    <div className="radioGroup">
      <div className="radio">
        <input type="radio" name="additionalRadio" value="clientName"></input>
        <p className="radioText">Nome do cliente/fantasia</p>
      </div>
      <div className="radio">
        <input type="radio" name="additionalRadio" value="tel"></input>
        <p className="radioText">Telefone</p>
      </div>
      <div className="radio">
        <input type="radio" name="additionalRadio" value="worksiteNum"></input>
        <p className="radioText">Número do worksite</p>
      </div>
    </div>
  );
}
