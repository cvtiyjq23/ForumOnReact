const ADD_POST = 'ADD-POST';
export const Profile_Reducer = (State, Action) => {


    if (Action.Type === ADD_POST) {
        let New_Post = {
            id: 5,
            Post: Action.New_Text
        }
        State.Posts.push(New_Post);
    }


    return State;
}
export default Profile_Reducer;