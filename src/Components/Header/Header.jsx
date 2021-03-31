import React from "react";
import {Button} from "antd";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {UserOutlined,} from "@ant-design/icons";
import NavbarMobile from "../../responsive/Navbar/NavbarResponsive";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png"
            />
        </div>
        <div className={s.loginBlock}>
            <div className={s.userIcon}><UserOutlined/></div>
            {props.isAuth
                ? <div><span className={s.loginName}>{props.signIn.profile.username}</span>
                    <Button className={s.logOut} type={"danger"} onClick={() => {
                        props.logout(props.signIn.profile.id)
                    }}>log out</Button></div>
                : <div>
                    <NavLink to={'/signin'} className={s.loginName}>Sign In</NavLink>
                    <NavLink to={'/signup'} className={s.loginName}>Sign Up</NavLink>
                </div>}
            <NavbarMobile/>
        </div>
    </header>
}

export default Header;