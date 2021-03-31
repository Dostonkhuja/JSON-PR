import React from 'react';

import User from "./User";
import {Spin} from "antd";

const Users = React.memo((props) => {
    if (props.users === null) {return <Spin size="large"/>}

    return <div>
            {
                props.users.map(u => <User
                    user={u}
                    key={u.id}
                signIn={props.signIn}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
                />)
            }
        </div>
});

export default Users;