import React from 'react';

import {createField, Textarea2} from "../../common/FormsControls/FormsControls";
import {Button, notification} from "antd";
import {reduxForm} from "redux-form";

const DialogsMesagesForm = React.memo((props) => {
    return (<form onSubmit={props.handleSubmit}>
            {createField("your message", 'message', [], Textarea2)}
                <Button block type={'primary'} htmlType="submit">send</Button>
            {props.error && <div>{props.error}</div>}
        </form>
    );
});

const ReduxDialogsForm = reduxForm({form: 'messages'})(DialogsMesagesForm)

const DialogsMessages = ({owner,sendMessage,currentUser,isAuth}) => {
    const openNotification = () => {
        notification.open({
            message: '',
            description:
            // 'habaringnizni qabul qiluvchi manzil ma'lum emas. iltimos uni belgilang!',
            // ' The recipient of your message is unknown. please mark it! ',
                'Получатель вашего сообщения неизвестен. пожалуйста отметьте это!',
        });
    };
    const onSubmit = (formData) => {
        let userId =undefined
       if(currentUser.length>0 || userId !== undefined){
            userId=currentUser[0].userId
           sendMessage(userId,formData)
       } else{
            openNotification()
        }
    }
    return (<>
            <ReduxDialogsForm onSubmit={onSubmit} />
        </>
    );
}

export default DialogsMessages;