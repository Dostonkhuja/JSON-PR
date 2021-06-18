import React, {useEffect} from 'react';

import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {getFollowingInProgressRs, getUsersPostsRs, getUsersRs, getUsersSignInRs} from "../../reselect/UserReselect";
import {follow, getUsers, unfollow} from "../../reducers/users-reducer";
import {UserType} from "../../types/types";

const Users = React.memo((props) => {
    const dispatch = useDispatch()

    const users  = useSelector(getUsersRs)
    // const posts  = useSelector(getUsersPostsRs)
    const signIn  = useSelector(getUsersSignInRs)
    const followingInProgress  = useSelector(getFollowingInProgressRs)

    const followHandler = (userId:number)=> dispatch(follow(userId))
    const unfollowHandler = (userId:number)=> dispatch(unfollow(userId))

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    if (users === null) {return <Preloader />}

    let onPaginationValueChange:any = (pageNumber:number, pageSize:number,) => {
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
                users.map((u:any) => <User
                    user={u}
                    key={u.id}
                signIn={signIn}
                follow={followHandler}
                unfollow={unfollowHandler}
                followingInProgress={followingInProgress}
                />)
            }
        </div>
});

export default Users;