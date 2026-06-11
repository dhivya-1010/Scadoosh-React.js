import Profile from "./profile";

export default function navbar(props){
    return(
        <div>
            <h1>Navbar</h1>
            <Profile name={props.name} />
        </div>
    );
}