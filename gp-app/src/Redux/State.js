import Profile_Reducer from "./Profile_Reducer";
import Dialogs_Reducer from "./Dialogs_Reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


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
        this._State.Profile_Page =  Profile_Reducer (this._State.Profile_Page, Action);
        this._State.Dialogs_Page =  Dialogs_Reducer (this._State.Dialogs_Page, Action);
        this._Coll_Subscriber(this._State);

    }

}



export default Store;
Window._Store = Store;