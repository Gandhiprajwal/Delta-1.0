import PropTypes from "prop-types";
import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {ticket.map((num, index) => (
        <TicketNum key={index} num={num} />
      ))}
    </div>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.array.isRequired,
};
