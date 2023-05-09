import state from "./State";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
   User: [
       // {
       //     user_id: 1,
       //     followed: true,
       //     avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
       //     user_name: 'Борис Микульский',
       //     user_country: 'Россия'
       // },
       // {
       //     user_id: 2,
       //     followed: false,
       //     avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
       //     user_name: 'Олег Майами',
       //     user_country: 'Латвия'
       // },
       // {
       //     user_id: 3,
       //     followed: false,
       //     avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
       //     user_name: 'Петрович',
       //     user_country: 'Боливия'
       // }
   ]
}
const Users_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {...state, //Копируется стейт и массив юзеров по средствам, далее через мапинг формируем копию обьекта юзер id которого совпадает с id экшена и модифицируем , если не один элемент не совпадет просто возвращаем изначальный массив юзеров.
                Users: state.User.map(u => {
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
                Users:state.User.map(u=>{
                    if (u.user_id === action.user_id){
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS: {
            return  {...state, users: [...state.User, ...action.users]}
        }



    }

    return state;
}
// -----------------Криерторы---------------------
export const Follow_User = (user_id) => {
    return {
        type: FOLLOW_USER,
        user_id: user_id
    }
}
export const UnFollow_User = (user_id) => {
    return {
        type: UNFOLLOW_USER,
        user_id: user_id
    }
}
export const Set_Users = (users) => {
    return {
        type:SET_USERS,
        users: users

    }

}

export default Users_Reducer;