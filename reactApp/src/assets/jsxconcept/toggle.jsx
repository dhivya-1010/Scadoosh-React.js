import { useState } from "react";

export default function toggle(){
    const[change,setChange] = useState(false);
    function changeVariable(){
        setChange(!change);
    }
    return(
        <div>
            <h1> changed value: {change ?"ON":"OFF"}</h1>
            <button onClick={changeVariable} style={{color:"blue", fontFamily:"math" }}> toggle</button>
        </div>

    );
}