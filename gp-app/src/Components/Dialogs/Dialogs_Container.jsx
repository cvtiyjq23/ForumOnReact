
import Dialogs from "./Dialogs";
import {Send_Message_Creator, Update_New_Message_Text_Creator} from "../../Redux/Dialogs_Reducer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs_Container = (props) => {
    let local_state = props.store.getState();

    let New_Message_Text = local_state.Dialogs_Reducer.Dialogs_Page.new_message_text;
    let On_Send_Message_Click = () => {
        let text = local_state.Dialogs_Reducer.new_message_text;
        props.store.dispatch(Send_Message_Creator(text))
    }
    let On_NewMessage_Change = (New_Text_Message) => {
        let text = New_Text_Message;
        props.store.dispatch(Update_New_Message_Text_Creator(text))
    }
    //-------- Сверху логика обмена данными с State
// -------- Ниже процесс мапинга данных из state и их упаковка в массив компонент готовых к выводу

    let Dialog_Elements = local_state.Dialogs_Reducer.Dialogs_Page.Dialogs.map(d => <Dialog Dialog_Valu={d.dialog} Dialog_Id={d.id}/>);
    let Message_Elements = local_state.Dialogs_Reducer.Dialogs_Page.Messages.map(d => <Message Message_Valu={d.Message} Message_Id={d.id}/>);
    return (
        <Dialogs New_Message_Text = {New_Message_Text}
                 On_Send_Message_Click = {On_Send_Message_Click}
                 On_NewMessage_Change = {On_NewMessage_Change}
                 Message_Elements = {Message_Elements}
                 Dialog_Elements = {Dialog_Elements}
        />
    )
}
export default Dialogs_Container;
