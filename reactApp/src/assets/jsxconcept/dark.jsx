import { useState } from "react";
export default function dark(){
    const[dark,setDark]=useState(false);
    function themeChange(){
        setDark(!dark)
    }

    return(
        <div style={ {background:dark?"black":"white", color:dark?"white":"black", height:"100vh" }  } >
            <h1 style={{color:dark?"white":"black"}}> {dark?"Dark Mode":"Light Mode"} </h1>
             <button onClick={themeChange} style={{color:dark?"white":"black"}} >Theme change</button>
        </div>
       
    );
}