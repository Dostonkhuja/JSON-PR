import React from 'react';
import s from './user.module.css'
import {Button, Card, Avatar} from 'antd';
import {UserOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const User=React.memo( (props)=> {
    return (
        <Card style={{marginBottom: 10}}>
            <div className={s.UserHeader}>
                <Avatar size="large" icon={<UserOutlined/>}/>
                <div>
                    {props.user.followed
                        ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>Unfollow</Button>
                        : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>Follow</Button>
                    }

                    <span className={s.message}>
                        <MailOutlined />
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