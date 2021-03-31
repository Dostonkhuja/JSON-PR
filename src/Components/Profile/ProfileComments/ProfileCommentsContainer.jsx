import React, {Component} from 'react';

import {Spin} from "antd";
import ProfileComments from "./ProfileComments";

class ProfileCommentsContainer extends Component {
    componentDidMount() {
        const postId=this.props.postId
        this.props.getComments(postId)
    }

    render() {
        if(this.props.comments === null){return <Spin size="large" />}
        return <div>
                {
                    this.props.comments.map(c=> c.postId === this.props.postId &&
                    <ProfileComments comments={c} key={c.id} />)
                }
            </div>
    }
}


export default ProfileCommentsContainer;