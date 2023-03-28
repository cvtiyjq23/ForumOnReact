import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Send_Message_Creator, Update_New_Message_Body_Creator} from "../../Redux/Dialogs_Reducer";


const Dialogs = (Props) => {

    let New_Message_Text_Body = Props.Dialogs_Page.New_Message_Body;
    let On_Send_Message_Click = () => {
        let New_Text_Message = Props.Dialogs_Page.New_Message_Body;
        Props.Dispatch(Send_Message_Creator (New_Text_Message))
        console.log(Props.Dialogs_Page.Messages)
    }
    let On_NewMessage_Chenge = (Event) => {
        let New_Text_Message = Event.target.value;
        Props.Dispatch(Update_New_Message_Body_Creator(New_Text_Message))
    }
    let Dialog_Elements = Props.Dialogs_Page.Dialogs.map(d => <Dialog Dialog_Valu={d.dialog} Dialog_Id={d.id}/>);
    let Message_Elements = Props.Dialogs_Page.Messages.map(d => <Message Message_Valu={d.Message} Message_Id={d.id}/>);
    return (
        <div className={s.Dialogs_Wrapper}>
            <div>{Dialog_Elements}</div>
            <div>
                <div>{Message_Elements}</div>
                <div>
                    <div>
                        <textarea value={New_Message_Text_Body}
                                  onChange={On_NewMessage_Chenge}>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={On_Send_Message_Click}>Отправить</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Dialogs;
