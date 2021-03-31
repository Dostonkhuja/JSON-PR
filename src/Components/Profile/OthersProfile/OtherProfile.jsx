import React from 'react';
import Profile from "../Profile";
import ProfilePost from "./ProfilePost";
import {Spin} from "antd";

const OtherProfile = React.memo( (props) => {
    if (props.profile === null || props.posts === null) {
        return <Spin size="large" />
    }
    return (
        <div>
            {
                props.profile.map(p => <Profile
                key={p.id}
                profile={p}
            />)}
            {props.posts.map(p => <ProfilePost getComments={props.getComments} comments={props.comments} key={p.id} post={p}
            />)}
        </div>
    );
});

export default OtherProfile;