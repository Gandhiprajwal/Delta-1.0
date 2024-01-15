import { useState } from "react";

export default function Counter(){
    let [count, setState] = useState(0);
    let incCount = ()=>{
        // setState(count+1);  
        // setState(count+1);  // at that time only one time state can be set
        // now it run both of the functions sync.
        setState((currCount)=>{
            return currCount + 1;
        });
        setState((currCount)=>{
            return currCount + 1;
        });
        console.log(count);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increare Count</button>
        </div>
    );
}