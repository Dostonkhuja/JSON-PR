import React from 'react';

import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import {Pagination} from "antd";

const Users = React.memo((props) => {
    if (props.users === null) {return <Preloader />}

    let onPaginationValueChange = (pageNumber, pageSize,) => {
        // props.updateCurrentPage(pageNumber)
        // props.updatePageSize(pageSize)
    }
    return <div>
        <Pagination
            showQuickJumper
            defaultCurrent={1}
            defaultPageSize={10}
            total={10}
            onChange={onPaginationValueChange}
        />
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