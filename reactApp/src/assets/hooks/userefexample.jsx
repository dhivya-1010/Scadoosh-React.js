// import { useState,useEffect } from "react";

// export default function usesrefexample(){
//     const[count,setCount] = useState(0);
    
//     function handleClick(){
//         setCount(count+1);
//     }
//     useEffect(()=>{
//         console.log(count)
//     },[count]);
    
//     return(
//         <div>
//             <h1 style={ {fontFamily:"cursive",color:"brown" } } >UseRef Example</h1>
//             <h2>Number: {count}</h2>
//             <button onClick={handleClick} > Click </button>
//         </div>
//     );
// }

import { useRef } from "react";

export default function usesrefexample(){
    const myref = useRef(0);
    console.log("component runs");
    
    function handleClick(){
        myref.current+=1;
        console.log(myref.current)   
    };
    
    return(
        <div>
            <h1 style={ {fontFamily:"cursive",color:"brown" } } >UseRef Example</h1>
            <h2>Number: {myref.current}</h2>
            <button onClick={handleClick} > Click </button>
        </div>
    );
}

