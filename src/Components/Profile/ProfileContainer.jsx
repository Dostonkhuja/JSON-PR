import React, {PureComponent} from 'react';

import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getComments, getPosts, getProfile} from "../../reducers/profile-reducer";
import MyProfile from "./MyProfile/MyProfile";
import {savePhoto, setMyProfile} from "../../reducers/auth-reducer";
import OtherProfile from "./OtherProfile";

class ProfileContainer extends PureComponent {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.signIn !== null) {
                userId = this.props.signIn.id
            }
            if (!userId) {
                this.props.history.push("/signin")
            }
        }
        this.props.getProfile(userId)
        this.props.getPosts(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    render() {
        return (
            <div>
                {
                    this.props.signIn !== null &&
                    this.props.match.params.userId === undefined &&
                    <MyProfile
                        signIn={this.props.signIn}
                        savePhoto={this.props.savePhoto}
                        setMyProfile={this.props.setMyProfile}
                        userPhoto={this.props.userPhoto}
                    />
                }
                {
                    this.props.match.params.userId !== undefined &&
                    <OtherProfile
                        comments={this.props.comments}
                        profile={this.props.profile}
                        posts={this.props.posts}
                        getComments={this.props.getComments}
                    />
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    signIn: state.auth.signIn,
    userPhoto:state.auth.userPhoto,
    comments:state.profilePage.comments,
})

export default compose(
    connect(mapStateToProps, {getProfile, getPosts,setMyProfile,savePhoto,getComments}),
    withRouter
)(ProfileContainer);