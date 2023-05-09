
import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import state from "../../Redux/State";

const map_state_to_props = (state) => {
    return{
        state
    }
}
const map_Dispatch_To_Props  = (dispatch) => {
    let nulll;
    return (

        nulll = () =>{
            return null
        }
    )
}

const Users_Container = connect (map_state_to_props, map_Dispatch_To_Props) (Users);


export default Users_Container;