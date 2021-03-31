import React from 'react';

import {Card} from "antd";

const Post = (props) => {
    return (
        <Card style={{marginTop: 15}}>
            <p>{props.posts.title}</p>
            <br/>
            <i>{props.posts.body}</i>
        </Card>
    );
};

export default Post;