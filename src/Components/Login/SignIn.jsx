import React, {useEffect} from 'react';

import {compose} from "redux";
import s from './login.module.css'
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../reselect/LoginReselect";
import {signInRequest} from "../../reducers/auth-reducer";
import {Form, Input, Button, Checkbox,notification} from 'antd';

const LoginForm = React.memo(({onFinish, ...props}) => {
    const onFinishFailed = (error) => {
    };

    return (<Form name="basic" initialValues={{remember: false,}}
                onFinish={onFinish} onFinishFailed={onFinishFailed} className={s.form}>

            <h1 className={s.title}>Sign In</h1>

                <Form.Item className={s.formItem} label="Username" name="username"
                    rules={[{required: true, message: 'Please input your username!',},]}>
                    <Input className={s.formItemInput}/>
                </Form.Item>

                <Form.Item className={s.formItem} label="Password" name="password"
                    rules={[{required: true, message: 'Please input your password!',},]}>
                    <Input.Password  className={s.formItemInput}/>
                </Form.Item>

                <Form.Item className={s.formItem} name="remember" valuePropName="checked">
                  <div  className={s.formItem}>
                      <Checkbox className={s.formItemCheckbox}>Remember me</Checkbox>
                  </div>
                </Form.Item>

                <Form.Item className={s.formItem}>
                    <Button block className={s.formItemButton} type="primary" htmlType="submit">Sign In</Button>
                </Form.Item>

                {props.error && <div className={s.error}>{props.error}</div>}

            </Form>);
});


const ReduxLoginForm = React.memo(reduxForm({form: 'login'})(LoginForm))




const SignIn = React.memo((props) => {
    useEffect(() => {
        openNotification()
    }, [])

    const onFinish = (values) => {
        const {username, password, remember} = values
        props.signInRequest(username, password, remember);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    const openNotification = () => {
        notification.open({
            message: '',
            description:
            // 'Sinash uchun istalgan login parolni kiriting!',
            // ' Enter the desired login password to try ',
                'Введите желаемый логин и пароль для входа, чтобы попробовать сайт',
        });
    };
    return (<div className={s.endForm}>
            <ReduxLoginForm onFinish={onFinish} />
        </div>
    );
});

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default compose(
    connect(mapStateToProps, {signInRequest})
)(SignIn);