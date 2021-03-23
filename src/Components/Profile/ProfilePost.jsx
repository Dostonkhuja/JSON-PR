import React, {createElement, useState} from 'react';
import {Card, Tooltip} from "antd";
import s from '../Profile/profile.module.css'
import ProfileCommentsContainer from "./ProfileComments/ProfileCommentsContainer";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";

const ProfilePost = React.memo((props) => {
    const [editMode, setEditMode] = useState(false)

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    return (
        <div>
            <Card style={{marginTop: 10}}>
                <b>{props.post.title}</b>
                <br/>
                <i>{props.post.body}</i>
                <br/> <br/>
                <div className={s.commentsLike}>
                    <div className={s.comments} onClick={() => {
                        editMode ? setEditMode(false) : setEditMode(true)
                    }}>
                        <MessageOutlined/> Comments
                    </div>
                    <div>
                        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
                        </Tooltip>,
                        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
                        </Tooltip>
                    </div>
                </div>
                {editMode &&
                <ProfileCommentsContainer getComments={props.getComments} comments={props.comments}
                                          postId={props.post.id}/>
                }

            </Card>

            <br/>


        </div>
    );
});

export default ProfilePost;