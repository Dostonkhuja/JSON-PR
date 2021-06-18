import React from 'react';

import {Avatar} from "antd";
import s from '../dialogs.module.css'
import {useDispatch} from "react-redux";
import {UserType} from "../../../types/types";

export type PropsType = {
    user:UserType
    getCurrentUser:(userId: number, userName: string)=> void
}

const UserItem:React.FC<PropsType> = React.memo((props) => {

    const onSendingCurrentUser=()=>{
        props.getCurrentUser(props.user.id,props.user.username)
    }


    return <div className={s.userMessages} onClick={onSendingCurrentUser}>
                <Avatar
                    className={s.avatar}
                    style={{
                        backgroundColor:'orange',
                        marginRight:"7px",
                        marginTop:"7px",
                    }}
                    size="large"
                >
                    {props.user.username[0]}
                </Avatar>
                { props.user.username}
            </div>
})

export default UserItem;