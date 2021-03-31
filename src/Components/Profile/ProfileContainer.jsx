import React, {PureComponent} from 'react';

import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import MyProfile from "./MyProfile/MyProfile";
import OtherProfile from "./OthersProfile/OtherProfile";
import {savePhoto, setMyProfile} from "../../reducers/auth-reducer";
import {getComments, getPosts, getProfile} from "../../reducers/profile-reducer";
import {
    getProfileCommentsRs,
    getProfilePostsRs,
    getProfileRs,
    getProfileSignInRs,
    getUserPhotoRs
} from "../../reselect/ProfileReselect";

class ProfileContainer extends PureComponent {
    refreshProfile() {
        let userId = this.props.match.params.userId
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
                        userPhoto={this.props.userPhoto}
                        setMyProfile={this.props.setMyProfile}
                    />
                }
                {
                    this.props.match.params.userId !== undefined &&
                    <OtherProfile
                        posts={this.props.posts}
                        profile={this.props.profile}
                        comments={this.props.comments}
                        getComments={this.props.getComments}
                    />
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: getProfileRs(state),
    posts: getProfilePostsRs(state),
    userPhoto: getUserPhotoRs(state),
    signIn: getProfileSignInRs(state),
    comments: getProfileCommentsRs(state),
})

export default compose(
    connect(mapStateToProps, {getProfile, getPosts, setMyProfile, savePhoto, getComments}),
    withRouter
)(ProfileContainer);