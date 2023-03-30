import s from './Dialogs.module.css'




const Dialogs = (props) => {

    let New_Message_Text = props.New_Message_Text;
    let On_Send_Message_Click = () => {
        props.On_Send_Message_Click ();
    }
    let On_NewMessage_Change = (Event) => {
        let New_Text_Message = Event.target.value;
        props.On_NewMessage_Change (New_Text_Message)
    }
    return (
        <div className={s.Dialogs_Wrapper}>
            <div>{props.Dialog_Elements}</div>
            <div>
                <div>{props.Message_Elements}</div>
                <div>
                    <div>
                        <textarea value={New_Message_Text}
                                  onChange={On_NewMessage_Change}>

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
