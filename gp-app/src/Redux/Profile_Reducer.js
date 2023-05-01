import store from "./redux_store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_NEW_POST_TEXT = 'UPDATE_NEW_NEW_POST_TEXT';
    let initialState = {
        Posts: [
            {id:1,Post:'Hi its test case', Img_link:"https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"},
            {id:2,Post:'Hi its test case2', Img_link:"https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"}
        ],
        New_Post_Text: ''
    }

    const Profile_Reducer = (state = initialState, action) => {
        let state_copy = {...state}
        state_copy.Posts = [...state.Posts]
        switch (action.type) {
            case ADD_POST:
                let NewPost = {
                    id: 5,
                    Post: action.New_Post_Text,
                    Img_link: "https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"
                }
                state_copy.Posts.push(NewPost);
                break;
                case UPDATE_NEW_NEW_POST_TEXT:
                    state_copy.New_Post_Text = action.New_Post_Text;
                    break;
            default: return state_copy;
        }
        return state_copy;
    }
export const Add_Post_Action_Creator = (New_Post_Text) => {
    console.log(New_Post_Text)
    debugger
        return {
        type: ADD_POST,
        New_Post_Text: New_Post_Text
    }
}

export const Update_New_Post_Text_Creator = (New_Post_Text) => {
    return {
        type: UPDATE_NEW_NEW_POST_TEXT,
        New_Post_Text: New_Post_Text
    }

}
export default Profile_Reducer;