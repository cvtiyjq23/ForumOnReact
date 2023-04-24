
import Dialogs from "./Dialogs";
import {Send_Message_Creator, Update_New_Message_Text_Creator} from "../../Redux/Dialogs_Reducer";
import {connect} from "react-redux";
import store from "../../Redux/redux_store";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


let map_state_to_props = (state) =>{
    // // -------- Ниже процесс мапинга данных из state и их упаковка в массив компонент готовых к выводу
    let Dialog_Elements = state.Dialogs_Reducer.Dialogs_Page.Dialogs.map(d => <Dialog Dialog_Valu={d.dialog} Dialog_Id={d.id}/>);
    let Message_Elements = state.Dialogs_Reducer.Dialogs_Page.Messages.map(d => <Message Message_Valu={d.Message} Message_Id={d.id}/>);
    return {
        Dialogs_Page: state.Dialogs_Reducer.Dialogs_Page,
        New_Message_Text: state.Dialogs_Reducer.Dialogs_Page.new_message_text,
        Dialog_Elements: Dialog_Elements,
        Message_Elements: Message_Elements
    }
}

let map_Dispatch_To_Props = (dispatch) => {
    return{

        On_Send_Message_Click: (New_Text_Message) => {
        dispatch(Send_Message_Creator(New_Text_Message))

    },
        On_NewMessage_Change: (New_Text_Message) => {
            dispatch(Update_New_Message_Text_Creator(New_Text_Message))
        }

    }
}

// В синтаксисе connect ()() - вызывается функция конект которая возвращяет какую то функцию которая вызывается сразу после вызова
const Dialogs_Container = connect (map_state_to_props, map_Dispatch_To_Props) (Dialogs);
export default Dialogs_Container;
