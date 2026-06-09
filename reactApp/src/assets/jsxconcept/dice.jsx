import { useState } from "react";

export default function dice(){
    const[count,setCount]=useState(0);
    function random(){
        setCount(Math.floor(Math.random()*100))
    }
    return(
        <div>
            <h1>Dice: {count}</h1>
            <button onClick={random}>generate random</button>
        </div>
        
    );
}