import { useState } from "react";

export default function changeApp(){
    const[change,setChange]=useState(0);

    function onInc(){
        setChange(change+1);
    }
    function onDec(){
        setChange(change-1);
    }

    return(
        <div>
            <h1>count: {change}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
        </div>
    );
}