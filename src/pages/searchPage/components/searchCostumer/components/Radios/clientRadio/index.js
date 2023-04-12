import "../style.css";

export default function ClientRadio() {
  return (
    <div className="radioGroup">
      <div className="radio">
        <input type="radio" name="clientRadio" value="all"></input>
        <p className="radioText">Todos os dados</p>
      </div>
      <div className="radio">
        <input type="radio" name="clientRadio" value="cpf/cnpj"></input>
        <p className="radioText">CPF/CNPJ</p>
      </div>
      <div className="radio">
        <input type="radio" name="clientRadio" value="orderNumber"></input>
        <p className="radioText">Número do pedido</p>
      </div>
      <div className="radio">
        <input type="radio" name="clientRadio" value="osNumber"></input>
        <p className="radioText">Número da OS</p>
      </div>
    </div>
  );
}
