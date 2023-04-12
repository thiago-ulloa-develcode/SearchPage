import { ReactComponent as ArrowIcon } from "../../../../../../assets/icons/arrow.svg";
import { ReactComponent as InfoIcon } from "../../../../../../assets/icons/info.svg";

export default function SectionTitle() {
  return (
    <div className="SectionTitle">
      <div className="section-title">
        <div className="align-left">
          <InfoIcon />
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
    </div>
  );
}
