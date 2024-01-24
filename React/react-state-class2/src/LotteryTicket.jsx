import { useState } from "react";
import { getTicket} from "./helper";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

export default function LotteryTicket({ n=3, winCondition}) {
  let [number, setNumber] = useState(getTicket(n));
  let isWinning = winCondition(number);
  let generateLottery = () => {
    setNumber(getTicket(n));
  };
  return (
    <>
      <h2>Lottery!</h2>
      <Ticket ticket={number} />
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
      <button onClick={generateLottery}>Get New Ticket</button>
    </>
  );
}

LotteryTicket.propTypes = {
  n: PropTypes.number.isRequired,
  winCondition: PropTypes.func.isRequired,
};

LotteryTicket.propTypes = {
  n: PropTypes.number.isRequired,
  winningSum: PropTypes.number.isRequired,
};
