import { useState } from "react";
import { getTicket, sum } from "./helper";

export default function LotteryTicket() {
  let [number, setNumber] = useState(getTicket(3));
  let isWinning = sum(number) === 15;
  let generateLottery = () => {
    setNumber(getTicket(3));
  };
  return (
    <>
      <h2>Lottery!</h2>
      <div className="ticket">
        {
          number.map(()=>{
            return number;
          })
        }
      </div>
      <br />
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
      <button onClick={generateLottery}>Get New Ticket</button>
    </>
  );
}
