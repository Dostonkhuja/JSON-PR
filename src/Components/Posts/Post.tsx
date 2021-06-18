import React from 'react';

import {Card} from "antd";
import {PostType} from "../../types/types";

type PropsType = {
    posts:PostType
}

const Post:React.FC<PropsType> = (props) => {
    return (
        <Card style={{marginTop: 15}}>
            <p>{props.posts.title}</p>
            <br/>
            <i>{props.posts.body}</i>
        </Card>
    );
};

export default Post;