import {combineReducers, legacy_createStore as createStore} from "redux";
import Profile_Reducer from "./Profile_Reducer";
import Dialogs_Reducer from "./Dialogs_Reducer";
import Users_Reducer from "./Users_Reducer";


let  reducers = combineReducers (
    {
        Profile_Reducer: Profile_Reducer,
        Dialogs_Reducer: Dialogs_Reducer,
        Users_Reducer: Users_Reducer
    }
)

let store = createStore(reducers);

export default store;
