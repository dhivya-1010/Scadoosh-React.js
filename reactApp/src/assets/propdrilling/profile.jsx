import UserInfo from "./userinfo";
export default function Profile(props){
    return(
        <div>
            <h1>Profile component</h1>
            <UserInfo name={props.name}/>
        </div>
    );
}