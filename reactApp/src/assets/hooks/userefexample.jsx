import { useState,useEffect } from "react";

export default function usesrefexample(){
    const[count,setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        console.log(count)
    },[count]);
    
    return(
        <div>
            <h1 style={ {fontFamily:"cursive",color:"brown" } } >UseRef Example</h1>
            <h2>Number: {count}</h2>
            <button onClick={handleClick} > Click </button>
        </div>
    );
}