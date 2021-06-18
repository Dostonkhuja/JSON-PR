import React from 'react';

import {Button} from "antd";
import {UserType} from "../../types/types";

type FollowedButtonPropsType = {
    user:UserType
    followingInProgress:Array<number>
    follow:(userId:number)=> void
    unfollow:(userId:number)=> void
}

const FollowedButton:React.FC<FollowedButtonPropsType> = (props) => {
    return <div>
            {
                props.user.followed
                    ? <Button disabled={props.followingInProgress.some((id:number) => id === props.user.id)}
                              onClick={() => {props.unfollow(props.user.id)}}> Unfollow
                      </Button>
                    : <Button disabled={props.followingInProgress.some((id:number) => id === props.user.id)}
                              onClick={() => {props.follow(props.user.id)}}> Follow
                      </Button>
            }
        </div>
};

export default FollowedButton;