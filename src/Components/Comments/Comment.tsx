import React from 'react';

import {Card} from "antd";
import {CommentsType} from "../../types/types";

type PropsType = {
    comments:CommentsType
}

const Comment:React.FC<PropsType> = (props) => {
    return (
        <Card style={{marginTop:15}}>
        <p>{props.comments.name}</p>
            <p>email : {props.comments.email} </p>
        <i>{props.comments.body}</i>
        </Card>
    );
};

export default Comment;