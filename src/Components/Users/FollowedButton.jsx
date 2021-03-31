import React from 'react';

import {Button} from "antd";

const FollowedButton = (props) => {
    return <div>
            {
                props.user.followed
                    ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                              onClick={() => {props.unfollow(props.user.id)}}> Unfollow
                      </Button>
                    : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                              onClick={() => {props.follow(props.user.id)}}> Follow
                      </Button>
            }
        </div>
};

export default FollowedButton;