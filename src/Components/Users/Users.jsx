import React from 'react';
import User from "./User";

const Users =React.memo( (props) => {
    if (props.users === null) {
        return <div>Loading...</div>
    }
    return (<div>
            {props.users.map(u => <User
                key={u.id}
                user={u}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
            />)}
        </div>
    );
});

export default Users;