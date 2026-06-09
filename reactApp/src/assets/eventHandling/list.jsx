export default function list(){
    const arr = ["text1","text2","text3"];
    return(

        <div>
             <h1>List</h1>
             <ul>
                {
                    arr.map((item,idx)=>{
                        return <li> {item}</li>
                    })
                }
             </ul>
        </div>
       
    );
}