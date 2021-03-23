import React from 'react';
import {Avatar, Button, Card} from "antd";
import {MailOutlined, UserOutlined} from "@ant-design/icons";
import s from "../Users/user.module.css";

const Profile = (props) => {
    return (
        <div>
            <Card style={{}}>
                <div className={s.UserHeader}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                    <div>
                        {/*{props.followed*/}
                        {/*    ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}*/}
                        {/*              onClick={() => {*/}
                        {/*                  props.unfollow(props.user.id)*/}
                        {/*              }}>Unfollow</Button>*/}
                        {/*    : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}*/}
                        {/*              onClick={() => {*/}
                        {/*                  props.follow(props.user.id)*/}
                        {/*              }}>Follow</Button>*/}
                        {/*}*/}

                        <span className={s.message}>
                        <MailOutlined />
                    </span>

                    </div>
                </div>
                <h2>{props.profile.username}</h2>
                <b>Name</b>: {props.profile.name}
                <br/>
                <b>Company</b>: {props.profile.company.name}
                <br/>
                <b>Catch phrase</b>: {props.profile.company.catchPhrase}
                <br />
                <b>Bs</b>: {props.profile.company.bs}
                <br />
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

        </div>
    );
};

export default Profile;