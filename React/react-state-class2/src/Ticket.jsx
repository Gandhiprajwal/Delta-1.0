import PropTypes from "prop-types";
import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div>
      {ticket.map((num, idx) => {
        <TicketNum num={num} key={idx} />;
      })}
    </div>
  ); 
}

Ticket.propTypes = {
  ticket: PropTypes.array.isRequired,
};
