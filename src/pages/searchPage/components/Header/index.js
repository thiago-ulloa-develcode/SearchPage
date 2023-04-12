import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header content">
        <p className="busca">Busca</p>
        <div className="align-right">
          <div className="toggle-show-hide-base">
            <label>Ocultar todas as opções adicionais</label>
            <ArrowIcon />
          </div>
          <CloseIcon id="closeButton" />
        </div>
      </div>
    </div>
  );
}
