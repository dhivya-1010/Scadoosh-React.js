import { useState,useEffect } from "react";

export default function usestateexample(){
    const[count,setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("API CALL")
    },[count]);
    
    return(
        <div>
            <h1 style={ {fontFamily:"cursive",color:"brown" } } >UseState Example</h1>
            <h2>Number: {count}</h2>
            <button onClick={handleClick} > Click </button>
        </div>
    );
}