//METHOD 1

function Student(props){
    return(
        <>
        <h1>{props.title}</h1>
        <h1>{props.course}</h1>
        </>
        
    );
}

export default Student;

//METHOD 2

// function Student({title}){
//     return(
//         <h1>{title}</h1>

//     );
// }

// export default Student;

