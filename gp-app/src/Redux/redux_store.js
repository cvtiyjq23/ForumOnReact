import {combineReducers, legacy_createStore as createStore} from "redux";
import Profile_Reducer from "./Profile_Reducer";
import Dialogs_Reducer from "./Dialogs_Reducer";


let  reducers = combineReducers (
    {
        Profile_Reducer: Profile_Reducer,
        Dialogs_Reducer: Dialogs_Reducer
    }
)

let store = createStore(reducers);

export default store;
