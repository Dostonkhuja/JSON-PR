import React from 'react';
import Profile from "../Profile";
import ProfilePost from "./ProfilePost";
import Preloader from "../../common/Preloader/Preloader";

const OtherProfile = React.memo( (props) => {
    if (props.profile === null || props.posts === null) {
        return <Preloader />
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