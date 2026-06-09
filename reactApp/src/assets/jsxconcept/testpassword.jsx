import { useState } from "react";
export default function testPass(){
    const[password,setPassword]=useState(false);
    function toggleChange(){
        setPassword(!password)
    }
    return(
        <div>
            <h1>Password testing</h1>
            <input type={password?"text":"password"}></input>
            <button onClick={toggleChange}>{password ?"hide":"show"}</button>
        </div>
    );
}