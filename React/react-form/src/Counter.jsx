import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
//   let [countx, setCountx] = useState(0);
  let incCount = () => {
    setCount((currCount) => currCount + 1);
  };
  useEffect(function sideEffect(){
    console.log("this is the side effect");
  },[count]);
  return (
    <>
      <h3>Count= {count}</h3>
      <button onClick={incCount}>+1</button>
    </>
  );
}
