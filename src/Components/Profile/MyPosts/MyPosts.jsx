import React from 'react';
import s from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {Button, Card} from "antd";
import { v4 as uuidv4 } from 'uuid';
import {Textarea2} from "../../common/FormsControls/FormsControls";

const MyPostsForm =React.memo( (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div className={s.inputItemTextarea}>
                <Field
                    placeholder={""}
                    name={'newPost'}
                    component={Textarea2}
                />
            </div>
            <div> <Button type={'primary'} htmlType="submit">ADD POST</Button> </div>
            {props.error && <div>{props.error}</div>}
        </form>
    );
});

const ReduxMyPostsForm=React.memo(reduxForm({form:'myPost'})(MyPostsForm))

const MyPosts = React.memo( ({myPost,addNewPost,isAuth}) => {
    const onSubmit = (formData) => {
        addNewPost(formData)
    }
    return (<>
            <h2>My Posts</h2>
            <ReduxMyPostsForm onSubmit={onSubmit} />
            {myPost !=='' && myPost.map(p=>
                <Card key={uuidv4()} style={{}}> {p}</Card>
            )}
        </>
    );
});

export default MyPosts;