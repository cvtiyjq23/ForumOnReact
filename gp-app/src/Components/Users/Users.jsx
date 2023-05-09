import s from './Users.module.css'
import React from "react";


const Users = (props) => {
   if (props.Users.length === 0){
       props.set_users (
           [{
               user_id: 1,
               followed: true,
               avatar: 'https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg',
               user_name: "Борис Микульский",
               user_country: 'Россия'
           }, {
               user_id: 2,
               followed: false,
               avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
               user_name: "Олег Майами",
               user_country: 'Латвия'
           }, {
               user_id: 3,
               followed: false,
               avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
               user_name: "Петрович",
               user_country: 'Боливия'
           }]



   )
   } // временный костыль

    return (
        <div className={s.Users_Wrapper}>
            {
                props.Users.map(u =>    <div key={u.user_id} className={s.User_item}>
                    <div className={s.User_Avatar_Block}>
                        <div className={s.User_Avatar}>
                            <img src={u.avatar}/>
                        </div>
                        <div className={s.User_follow_Button}>
                            <button onClick={ // Через тернарный оператор проверяем статус кнопки в стэйте и исходя из эз этого вставляем функцию диспача (на подписку или отписку) далее в тексте кнопки проверяем статус и пишем текст подходящий текущему статусу;
                                u.followed === true
                                    ? () => {props.UnFollow(u.user_id)}
                                    : () => {props.Follow(u.user_id)}
                            }> {u.followed === true ? "Follow":"UnFollow"}</button>
                        </div>
                    </div>

                    <div className={s.User_Profile_Block}>
                        <div className={s.User_Name}> <p>{u.user_name}</p></div>
                        <div className={s.User_Country}><p>{u.user_country}</p></div>

                    </div>
                </div>)
            }
        </div>
        )
}
export default Users;