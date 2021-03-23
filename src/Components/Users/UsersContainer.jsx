import React from 'react';

import Users from "./Users";
import {compose} from "redux";
import {connect} from "react-redux";
import {follow, getPosts, getUsers, unfollow} from "../../reducers/users-reducer";

class UsersContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return <Users
            users={this.props.users}
            posts={this.props.posts}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    posts: state.usersPage.posts,
    followingInProgress: state.usersPage.followingInProgress,
})

export default compose(
    connect(mapStateToProps, {getUsers, getPosts,unfollow,follow})
) (UsersContainer);