const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SEND_MESSAGEe = 'SEND_MESSAGEe';

let Store = {
    _State: {
        Profile_Page:{
            Posts: [
                {id:1,Post:'Hi its test case', Img_link:"https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"},
                {id:2,Post:'Hi its test case2', Img_link:"https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"}
            ]
        },
        Dialogs_Page:{
            Dialogs: [
                {id: 1, dialog: 'Андрей'},
                {id: 2, dialog: 'Борис'},
                {id: 3, dialog: 'Олег'},
                {id: 4, dialog: 'Катя'},
            ],
            Messages: [
                {id:1, Message: 'Привет, это тестовое сообщение'},
                {id:2, Message: 'Привет, это тестовое сообщение2'},
                {id:3, Message: 'Привет, это тестовое сообщение33'},
                {id:4, Message: 'Привет, это тестовое сообщение4'}
            ],
            New_Message_Body: ''
        }
    },
    Get_State () {
        return this._State;
    },
    _Coll_Subscriber (){
        console.log('logggg')
    },

    Subscribe  (Observer) {
        this._Coll_Subscriber = Observer;
    },
    Dispatch (Action) {
        if (Action.Type === ADD_POST){
            let New_Post = {
                id:5,
                Post: Action.New_Text
            }
            this._State.Profile_Page.Posts.push(New_Post);
            this._Coll_Subscriber (this._State);
        } else if (Action.Type === UPDATE_NEW_MESSAGE_BODY) {
            this._State.Dialogs_Page.New_Message_Body = Action.New_Text_Message;
            this._Coll_Subscriber(this._State)
        }else if (Action.Type === SEND_MESSAGE) {
            let Body = '';
                Body = this._State.Dialogs_Page.New_Message_Body; // текст в textArea при клике на отправить
            this._State.Dialogs_Page.Messages.push({id:6, Message: Body});
            console.log(Body)
            this._State.Dialogs_Page.New_Message_Body = ''; //Зануление textArea после отправки
            this._Coll_Subscriber(this._State);
        }
    }

}
export const Add_Post_Action_Creator = (text) => {
    return {
        Type: ADD_POST,
        New_Text: text
    }
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

export default Store;
Window._Store = Store;