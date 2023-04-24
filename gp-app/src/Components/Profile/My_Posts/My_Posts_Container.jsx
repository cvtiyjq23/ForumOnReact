import React from "react";
import {Add_Post_Action_Creator, Update_New_Post_Text_Creator} from "../../../Redux/Profile_Reducer";
import My_Posts from "./My_Posts";
import Post from "./Post/Post";
import {connect} from "react-redux";


let map_state_to_props = (state) => {
    let Posts_Elements = state.Profile_Reducer.Posts.map(d => <Post Post_Text={d.Post} Post_Img={d.Img_link}/>);

    return {
        Posts_Elements: Posts_Elements,
        New_Message_Text_Body: state.Profile_Reducer.New_Post_Text,
        New_Post_Text:state.Profile_Reducer.New_Post_Text
    }

}
let map_Dispatch_To_Props = (dispatch) => {


    return {
        On_Change_New_Post_Text: (New_Post_Text) => {
            dispatch(Update_New_Post_Text_Creator(New_Post_Text))
        },
        add_post: (New_Post_Text)=>{
            dispatch(Add_Post_Action_Creator(New_Post_Text));
        }
    }

}

const My_Posts_Container = connect (map_state_to_props, map_Dispatch_To_Props) (My_Posts)

export default My_Posts_Container;
