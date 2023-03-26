const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const Dialogs_Reducer = (State, Action) => {
    switch (Action.Type){
        case UPDATE_NEW_MESSAGE_BODY:
            State.New_Message_Body = Action.New_Text_Message;
            break;
        case SEND_MESSAGE:
            let Body = '';
            Body = State.New_Message_Body; // текст в textArea при клике на отправить
            State.Messages.push({id: 6, Message: Body});
            State.New_Message_Body = ''; //Зануление textArea после отправки
            break;
        default:  return State;
    }

    return State;
}
export default Dialogs_Reducer;