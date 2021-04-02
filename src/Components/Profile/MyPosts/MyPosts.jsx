import React, {createElement, useState} from 'react';

import {Button, Card, Tooltip} from "antd";
import { v4 as uuidv4 } from 'uuid';
import {Field, reduxForm} from "redux-form";
import s from "../../Login/login.module.css";
import {Textarea2} from "../../common/FormsControls/FormsControls";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, MessageOutlined} from "@ant-design/icons";

const MyPostsForm =React.memo( (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div className={s.inputItemTextarea}>
                <h2>My Posts</h2>
                <Field placeholder={""} name={'newPost'} component={Textarea2} />
                <div> <Button block type={'primary'} htmlType="submit">ADD POST</Button> </div>
            </div>
            {props.error && <div>{props.error}</div>}
        </form>
    );
});

const ReduxMyPostsForm=React.memo(reduxForm({form:'myPost'})(MyPostsForm))

const MyPosts = React.memo( ({myPost,addNewPost,isAuth}) => {
    const onSubmit = (formData) => {
        addNewPost(formData)
    }

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

    return (<>
            <ReduxMyPostsForm onSubmit={onSubmit} />
            {myPost !=='' && myPost.map(p=>
                <Card className={s.myPost} key={uuidv4()}>
                    {p}
                    <div className={s.commentsLike}>
                        <div className={s.comments}
                             onClick={() => {editMode ? setEditMode(false) : setEditMode(true)}}>
                            <MessageOutlined/> Comments </div>
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
                </Card>)}
        </>
    );
});

export default MyPosts;