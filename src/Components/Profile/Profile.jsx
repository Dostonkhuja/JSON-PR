import React from 'react';

import {Avatar, Card} from "antd";
import {Link} from "react-router-dom";
import s from "../Users/user.module.css";
import {MailOutlined, UserOutlined} from "@ant-design/icons";

const Profile = (props) => {
    return <Card >
                <div className={s.UserHeader}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                    <span className={s.message}>
                        <Link to={`/dialogs/${props.profile.id}`}>
                        <MailOutlined/>
                        </Link>
                    </span>
                </div>
                <h2>{props.profile.username}</h2>
                <b>Name</b>: {props.profile.name}
                <br/>
                <b>Company</b>: {props.profile.company.name}
                <br/>
                <b>Catch phrase</b>: {props.profile.company.catchPhrase}
                <br/>
                <b>Bs</b>: {props.profile.company.bs}
                <br/>
                <b>Adress</b>: City: {props.profile.address.city},Suite: {props.profile.address.suite},
                Street: {props.profile.address.street} , Zip code: {props.profile.address.zipcode}
                <br/>
                <b>email</b>: <a href="#">{props.profile.email}</a>
                <br/>
                <b>web site</b>: <a href="#">{props.profile.website}</a>
                <br/>
                <b>phone</b>: {props.profile.phone}
                <br/>
            </Card>
};

export default Profile;