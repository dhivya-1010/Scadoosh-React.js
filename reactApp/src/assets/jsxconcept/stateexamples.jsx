import {useState} from 'react';
export default function StateExample(){
    //useState
    const[counter,setCount]=useState(0);
    function changeCount(){
        setCount(counter+1);
    }
    return(
        <div>
            <h1 style={{color:"brown", fontFamily:"cursive" }} >state StateExample</h1>
            <h1>count is {counter} </h1>
            <button style={{color:"black"}} onClick={changeCount} > counter </button>
        </div>
        
    );
}