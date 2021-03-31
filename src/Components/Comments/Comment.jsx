import React from 'react';

import {Card} from "antd";

const Comment = (props) => {
    return (
        <Card style={{marginTop:15}}>
        <p>{props.comments.name}</p>
            <p>email : {props.comments.email} </p>
        <i>{props.comments.body}</i>
        </Card>
    );
};

export default Comment;