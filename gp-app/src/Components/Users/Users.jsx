import s from './Users.module.css'
import React from "react";


const Users = () => {
    return (
        <div className={s.Users_Wrapper}>
            <div className={s.User_item}>
                <div className={s.User_Avatar_Block}>
                    <div className={s.User_Avatar}>
                        <img src="https://cs14.pikabu.ru/post_img/2022/08/20/3/1660966459110589294.jpg"/>
                    </div>
                    <div className={s.User_follow_Button}>
                        <button> Follow</button>
                    </div>
                </div>

                <div className={s.User_Profile_Block}>
                    <div className={s.User_Name}> <p>Борис Микульский</p></div>
                    <div className={s.User_Country}><p>Россия</p></div>

                </div>
            </div>


        </div>
        )
}
export default Users;