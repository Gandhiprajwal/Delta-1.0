import PropTypes from 'prop-types';
import './TicketNum.css';

export default function TicketNum({num}){
    return <span className="TicketNum">{num}</span>;
}

TicketNum.propTypes = {
    num: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired
};
