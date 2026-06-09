import { useState } from "react";

export default function eventtarget(){
    function handlechange(){
        console.log(event.target);
        console.log(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="enter text" onChange={handlechange}></input>
        </div>
    );
}