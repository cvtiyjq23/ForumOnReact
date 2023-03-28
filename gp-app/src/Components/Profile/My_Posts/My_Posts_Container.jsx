import React from "react";
import {Add_Post_Action_Creator, Update_New_Post_Text_Creator} from "../../../Redux/Profile_Reducer";
import My_Posts from "./My_Posts";



const My_Posts_Container = (props) => {

    // let Posts_Elements = Props.Profile_Page.Posts.map(
    //     d => <Post Post_Text={d.Post} Post_Img={d.Img_link}/>);
    // let New_Post_Element = React.createRef();
    // let Add_Post = () => {
    //     let text = New_Post_Element.current.value;
    //     let Action = Add_Post_Action_Creator (text);
    //     Props.Dispatch(Action);
    // }
let local_state = props.store.getState();
let Profile_Page = local_state.Profile_Reducer
    let add_post = () => {
        let New_Post_Text = local_state.Profile_Reducer.New_Post_Text
        props.store.dispatch(Add_Post_Action_Creator(New_Post_Text));

    }
    let On_Change_New_Post_Text = (New_Post_Text) => {
        props.store.dispatch(Update_New_Post_Text_Creator(New_Post_Text));

    }
    return (<My_Posts Profile_Page = {Profile_Page} add_post = {add_post} On_Change_New_Post_Text={On_Change_New_Post_Text} />)
}

export default My_Posts_Container;
