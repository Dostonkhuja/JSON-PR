// import React from 'react';
//
// import Users from "./Users";
// import {compose} from "redux";
// import {connect} from "react-redux";
// import {follow, getPosts, getUsers, unfollow} from "../../reducers/users-reducer";
// import {getFollowingInProgressRs, getUsersPostsRs, getUsersRs, getUsersSignInRs} from "../../reselect/UserReselect";
//
// class UsersContainer extends React.PureComponent {
//     componentDidMount() {
//         this.props.getUsers()
//     }
//     render() {
//         return <Users
//             users={this.props.users}
//             posts={this.props.posts}
//             signIn={this.props.signIn}
//             follow={this.props.follow}
//             unfollow={this.props.unfollow}
//             followingInProgress={this.props.followingInProgress}
//         />
//     }
// }
//
// const mapStateToProps = state => ({
//     users: getUsersRs(state),
//     posts: getUsersPostsRs(state),
//     signIn: getUsersSignInRs(state),
//     followingInProgress: getFollowingInProgressRs(state),
// })
//
// export default compose(
//     connect(mapStateToProps, {getUsers, getPosts,unfollow,follow})
// ) (UsersContainer);