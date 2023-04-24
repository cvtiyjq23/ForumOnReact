import s from './My_Posts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Add_Post_Action_Creator} from "../../../Redux/Profile_Reducer";
import {Update_New_Message_Body_Creator} from "../../../Redux/Dialogs_Reducer";



const My_Posts = (props) => {

    //let Posts_Elements = props.Profile_Page.Posts.map(d => <Post Post_Text={d.Post} Post_Img={d.Img_link}/>);
    let New_Message_Text_Body = props.New_Message_Text_Body;
    let On_NewMessage_Chenge = (Event) => {
        let New_Post_Text = Event.target.value;
       props.On_Change_New_Post_Text(New_Post_Text);
    }
    let add_post = () => {
        props.add_post ();
    }

    return (
        <div className={s.My_Posts_Wrapper}>
            <div className={s.My_Posts_Header}>
                <h1>Лента постов </h1>
                <textarea value={New_Message_Text_Body} onChange={On_NewMessage_Chenge} ></textarea>
                <button onClick={add_post}>Add post</button>
            </div>
            <div className={s.My_Posts}>
                {props.Posts_Elements}

            </div>

        </div>
    )
}
export default My_Posts;
