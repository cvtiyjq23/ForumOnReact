import s from './Nav_Bar.module.css'
import {NavLink} from "react-router-dom";
const Nav_Bar = () =>{
    return (
        <div className={s.Nav_Bar}>
            <li> <NavLink to="profile" className = { navData => navData.isActive ? s.active : s.item }>My Profile</NavLink></li>
            <li> <NavLink to="dialogs" className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink></li>
            <li> <NavLink to="users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink></li>
            <li> <NavLink to="music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></li>
            <li> <NavLink to="frends" className = { navData => navData.isActive ? s.active : s.item }>Frends</NavLink></li>
            <li> <NavLink to="settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></li>
        </div>
    )
}
export default Nav_Bar;
