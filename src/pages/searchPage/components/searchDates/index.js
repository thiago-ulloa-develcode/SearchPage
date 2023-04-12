import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow.svg";
import { ReactComponent as CalendarIcon } from "../../../../assets/icons/calendar.svg";
import "./style.css";
import DateGroup from "./components/DateGroup";

export default function SearchDates() {
  return (
    <div className="searchDates">
      <div className="top">
        <div className="section-title">
          <div className="align-left">
            <CalendarIcon />
            <p className="title">Datas</p>
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

      <DateGroup />
    </div>
  );
}
