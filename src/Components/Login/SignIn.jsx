import React, {useEffect} from 'react';
import s from './login.module.css'
import { Form, Input, Button, Checkbox } from 'antd';
import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {signInRequest} from "../../reducers/auth-reducer";
import { notification } from 'antd';

const LoginForm =React.memo( ({onFinish,...props}) => {

    const onFinishFailed = (error) => {
    };

    return (<>
        <Form
            className={s.form}
            name="basic"
            initialValues={{remember: false,}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h1 className={s.title}>SIGN IN</h1>
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!',},]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!',},]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                className={s.rememberMe}
                name="remember"
                valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
            >
                <Button  className={s.rememberMe} type="primary" htmlType="submit">SIGN IN</Button>
            </Form.Item>
            {props.error && <div className={s.error}>{props.error}</div>}
        </Form>
        </>
    );
});

const ReduxLoginForm= React.memo( reduxForm({form:'login'})(LoginForm))

const SignIn =React.memo( (props) => {

    useEffect(()=> {
        openNotification()
    }, [])

    const onFinish = (values) => {
        const {username,password,remember} = values
        props.signInRequest(username,password,remember);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
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



    return (<>
            <ReduxLoginForm onFinish={onFinish} />
        </>
    );
});

const mapStateToProps= (state)=> ({
    isAuth:state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{signInRequest})
)(SignIn);