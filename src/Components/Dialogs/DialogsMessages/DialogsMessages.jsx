import React from 'react';
import s from '../dialogs.module.css'
import {createField, Textarea2} from "../../common/FormsControls/FormsControls";
import {Button} from "antd";
import {reduxForm} from "redux-form";

const DialogsMesagesForm = React.memo((props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div className={s.inputItem}>
            {createField("your message", 'message', [], Textarea2)}
            </div>
            <Button type={'primary'} htmlType="submit">send</Button>
            {props.error && <div>{props.error}</div>}
        </form>
    );
});

const ReduxDialogsForm = reduxForm({form: 'messages'})(DialogsMesagesForm)

const DialogsMessages = ({owner,sendMessage,currentUser,isAuth}) => {
    const onSubmit = (formData) => {
        const userId=currentUser[0].userId
        sendMessage(userId,formData)
    }
    return (<>
            <ReduxDialogsForm onSubmit={onSubmit} />
        </>
    );
}

export default DialogsMessages;