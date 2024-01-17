import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState(["no moves"]);
  let updateBlue = () => {
    setMoves((prevVal) => {
      return { ...prevVal, blue: moves.blue + 1 };
    });
    setArr((prevVal) => {
      return [...prevVal, "blue moves "];
    });
    // setMoves({ ...moves, blue: moves.blue + 1 });
    // arr.push("blue moves");
    // setArr(arr);
    // console.log(arr);
  };
  let updateYellow = () => {
    setMoves((prevVal) => {
      return { ...prevVal, yellow: moves.yellow + 1 };
    });
    setArr((prevVal) => {
      return [...prevVal, "yellow moves "];
    });
  };
  let updateGreen = () => {
    setMoves((prevVal) => {
      return { ...prevVal, green: moves.green + 1 };
    });
    // setMoves({ ...moves, blue: moves.blue + 1 });
    setArr((prevVal) => {
      return [...prevVal, "green moves "];
    });
  };

  let updateRed = () => {
    setMoves((prevVal) => {
      return { ...prevVal, red: moves.red + 1 };
    });
    setArr((prevVal) => {
      return [...prevVal, "red moves "];
    });
  };
  return (
    <>
      <p>Game Begins!</p>
      <div className="board">
        <p>{arr}</p>
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </>
  );
}
