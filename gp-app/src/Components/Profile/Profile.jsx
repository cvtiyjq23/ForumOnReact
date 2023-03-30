import s from './Profile.module.css'
import Profile_Info from "./Profile_Info/Profile_Info";
import My_Posts_Container from "./My_Posts/My_Posts_Container";


const Profile = (props) => {

    return (
        <div className={s.Profile_Wrapper}>
            <div className={s.Profile_Header}>
                <img src="https://static-cse.canva.com/blob/969480/1600w-HToPSFjwKp0.jpg"/>
            </div>
            <Profile_Info/>
            <My_Posts_Container store = {props.store} />
        </div>
    )
}
export default Profile;
