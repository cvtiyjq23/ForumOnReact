
import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    Follow_User_Action_Creator,
    Set_Users_Action_Creator,
    UnFollow_User_Action_Creator
} from "../../Redux/Users_Reducer";


const map_state_to_props = (state) => {
    return{
        Users: state.Users_Reducer.Users
    }
}
const map_Dispatch_To_Props  = (dispatch) => {
    return{
        Follow: (user_id) => {
            dispatch(Follow_User_Action_Creator(user_id))
        },
        UnFollow: (user_id) => {
            dispatch(UnFollow_User_Action_Creator(user_id))
        },
        set_users: (Users) => {
            dispatch(Set_Users_Action_Creator(Users))
        }
    }
}

const Users_Container = connect (map_state_to_props, map_Dispatch_To_Props) (Users);


export default Users_Container;