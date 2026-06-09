import { useState } from "react";

export default function eventtarget(){
    const[text,setText]=useState("");
    function handlechange(){
        console.log(event.target);
        console.log(event.target.value);
        setText(event.target.value)
    }
    return(
        <div>
            <h2>Event-target-value</h2>
            <h2>{text}</h2>
            <input type="text" placeholder="enter text" onChange={handlechange}></input>
            
        </div>
    );
}