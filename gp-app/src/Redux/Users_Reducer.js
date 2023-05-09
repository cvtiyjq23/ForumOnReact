import state from "./State";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
   Users:[]
}
const Users_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {...state, //Копируется стейт и массив юзеров по средствам, далее через мапинг формируем копию обьекта юзер id которого совпадает с id экшена и модифицируем , если не один элемент не совпадет просто возвращаем изначальный массив юзеров.
                Users: state.Users.map(u => {
                    if (u.user_id === action.user_id){
                        return {...u, followed: true}
                    }
                    return u;
                } )

            };
            break;

        case UNFOLLOW_USER:
            return {
                ...state,
                Users:state.Users.map(u=>{
                    if (u.user_id === action.user_id){
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS: {

            return  {...state, Users: action.Users}
        }



    }

    return state;
}
// -----------------Криерторы---------------------
export const Follow_User_Action_Creator = (user_id) => {
    return {
        type: FOLLOW_USER,
        user_id: user_id
    }
}
export const UnFollow_User_Action_Creator = (user_id) => {
    return {
        type: UNFOLLOW_USER,
        user_id: user_id
    }
}
export const Set_Users_Action_Creator = (Users) => {
    return {
        type:SET_USERS,
        Users: Users
    }



}

export default Users_Reducer;