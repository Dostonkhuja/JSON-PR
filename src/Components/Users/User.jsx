import React from 'react';

import s from './user.module.css'
import {Card, Avatar} from 'antd';
import {Link} from "react-router-dom";
import FollowedButton from "./FollowedButton";
import {UserOutlined, MailOutlined} from '@ant-design/icons';

const User=React.memo( (props)=> {
    return (
        <Card style={{marginTop: 10}}>
            <div className={s.UserHeader}>
                <Avatar size="large" icon={<UserOutlined/>} />
                <div className={s.followedMessageButton}>
                    {props.signIn !== null &&
                        <FollowedButton
                            user={props.user}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />}
                    <span className={s.message}>
                        <Link to={`/dialogs/${props.user.id}`}>
                        <MailOutlined />
                        </Link>
                    </span>
                </div>
            </div>

            <h2>{props.user.username}</h2>
            <b>Name</b>: {props.user.name}
            <br/>
            <b>Company</b>: {props.user.company.name}
            <br/>
            <b>Catch phrase</b>: {props.user.company.catchPhrase}
            <br/>
            <b>Bs</b>: {props.user.company.bs}
            <br/>
            <b>Adress</b>: City: {props.user.address.city},Suite: {props.user.address.suite},
            Street: {props.user.address.street} , Zip code: {props.user.address.zipcode}
            <br/>
            <b>email</b>: <a href="#">{props.user.email}</a>
            <br/>
            <b>web site</b>: <a href="#">{props.user.website}</a>
            <br/>
            <b>phone</b>: {props.user.phone}
            <br/> <br/>
            <Link to={`/profile/${props.user.id}`}>view profile</Link>
        </Card>
    );
})

export default User;