import { useState } from "react";

export default function Counter(){
    let [count, setState] = useState(0);
    let incCount = ()=>{
        setState(count+1);
        console.log(count);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increare Count</button>
        </div>
    );
}