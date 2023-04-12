import "./style.css";
import { ReactComponent as Calendar2 } from "../../../../../../assets/icons/calendar2.svg";

export default function DateGroup() {
  return (
    <div className="DateGroup">
      <div className="date-group">
        <div className="date">
          <label className="label">Criação</label>
          <div className="date-container">
            <p className="placeholder">De</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label"></label>
          <div className="date-container">
            <p className="placeholder">Até</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label">Agendamento</label>
          <div className="date-container">
            <p className="placeholder">De</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label"></label>
          <div className="date-container">
            <p className="placeholder">Até</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
      </div>
      <div className="date-group2">
        <div className="date">
          <label className="label">Criação</label>
          <div className="date-container">
            <p className="placeholder">De</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label"></label>
          <div className="date-container">
            <p className="placeholder">Até</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label">Agendamento</label>
          <div className="date-container">
            <p className="placeholder">De</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
        <div className="date">
          <label className="label"></label>
          <div className="date-container">
            <p className="placeholder">Até</p>
            <Calendar2 className="calendar2" />
          </div>
        </div>
      </div>
    </div>
  );
}
