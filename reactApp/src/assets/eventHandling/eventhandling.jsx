export default function eventhandling(){
    function handlejsx(){
        alert("clicked")
        //event.target -> (accessing) event object automatically created by react
        //event.target.value -> accessing information filled (input) by the user 
    }
    return(
        <div>
            <h1>Event handling</h1>
            <button onClick={handlejsx} >click here</button>
        </div>
    );
}