const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    Dialogs_Page: {
        Dialogs: [
            {id: 1, dialog: 'Андрей'},
            {id: 2, dialog: 'Борис'},
            {id: 3, dialog: 'Олег'},
            {id: 4, dialog: 'Катя'},
        ],
        Messages: [
            {id: 1, Message: 'Привет, это тестовое сообщение'},
            {id: 2, Message: 'Привет, это тестовое сообщение2'},
            {id: 3, Message: 'Привет, это тестовое сообщение33'},
            {id: 4, Message: 'Привет, это тестовое сообщение4'}
        ],
        New_Message_Body: ''
    }
}
const Dialogs_Reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.New_Message_Body = action.New_Text_Message;
            break;
        case SEND_MESSAGE:
            let Body = '';
            Body = state.New_Message_Body; // текст в textArea при клике на отправить
            state.Messages.push({id: 6, Message: Body});
            state.New_Message_Body = ''; //Зануление textArea после отправки
            break;
        default:  return state;
    }

    return state;
}

export const Send_Message_Creator = (text) => {
    return {
        Type: SEND_MESSAGE,
        New_Text: text
    }
}
export const Update_New_Message_Body_Creator = (text) => {
    return {
        Type: UPDATE_NEW_MESSAGE_BODY,
        New_Text_Message: text
    }
}
export default Dialogs_Reducer;