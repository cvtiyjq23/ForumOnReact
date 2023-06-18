import s from './Users.module.css'
import React from "react";
import axios, * as others from 'axios';


const Users = (props) => {

    axios.get(
        "https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {props.set_users (response)})

    return (
        <div className={s.Users_Wrapper}>
            {
                props.Users.map(u => <div key={u.data} className={s.User_item}>
                    <div className={s.User_Avatar_Block}>
                        <div className={s.User_Avatar}>
                            <img src={u.avatar}/>
                        </div>
                        <div className={s.User_follow_Button}>
                            <button onClick={ // Через тернарный оператор проверяем статус кнопки в стэйте и исходя из эз этого вставляем функцию диспача (на подписку или отписку) далее в тексте кнопки проверяем статус и пишем текст подходящий текущему статусу;
                                u.followed === true
                                    ? () => {props.UnFollow(u.id)}
                                    : () => {props.Follow(u.id)}
                            }> {u.followed === true ? "Follow":"UnFollow"}</button>
                        </div>
                    </div>

                    <div className={s.User_Profile_Block}>
                        <div className={s.User_Name}> <p>{u.name}</p></div>
                        <div className={s.User_Country}><p>{u.status}</p></div>

                    </div>
                </div>)
            }
        </div>
        )
}
export default Users;