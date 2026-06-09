export default function formsubmit(){

    function handle(){
        alert("form submitted")
    }

    return(
        <div>
            <h1>Form submission</h1>
            <form >
                <input type="text" ></input>
                <button  onClick={handle}  >submit</button>
            </form>
        </div>
    );
}