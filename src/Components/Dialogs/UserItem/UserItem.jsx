import React from 'react';
import {Avatar} from "antd";

const UserItem = React.memo((props) => {
    const onSendingCurrentUser=()=>{
        props.getCurrentUser(props.user.id,props.user.username)
    }

    return (<div>
            <div style={{cursor:'pointer'}} onClick={onSendingCurrentUser}>
                <Avatar
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

        </div>
    );
});

export default UserItem;