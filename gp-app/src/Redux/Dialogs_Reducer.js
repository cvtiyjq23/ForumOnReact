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
        new_message_text: ''
    }
}
const Dialogs_Reducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            let state_copy = {...state}
            state_copy.Dialogs_Page.new_message_text = action.New_Text_Message;
        return state_copy
        }
        case SEND_MESSAGE: {
            let state_copy = {...state}
            state_copy.Dialogs_Page.Messages = [...state.Dialogs_Page.Messages]
            let Body = '';
            Body = state_copy.Dialogs_Page.new_message_text; // текст в textArea при клике на отправить
            state_copy.Dialogs_Page.Messages.push({id: 6, Message: Body});
            state_copy.Dialogs_Page.new_message_text = ''; //Зануление textArea после отправки
            return state_copy
        }
        default:  return state;
    }

    return state;
}

export const Send_Message_Creator = (text) => {
    return {
        type: SEND_MESSAGE,
        New_Text: text
    }
}
export const Update_New_Message_Text_Creator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        New_Text_Message: text
    }
}
export default Dialogs_Reducer;