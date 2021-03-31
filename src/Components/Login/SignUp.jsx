import React from 'react';

import {Button} from 'antd';
import {compose} from "redux";
import s from './login.module.css'
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../reselect/LoginReselect";
import {setMyProfile} from "../../reducers/auth-reducer";
import {required} from "../../utils/validators/validators";
import {createField, Input2} from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit,...props}) => {

    return (<form className={s.form} onSubmit={handleSubmit}>
            <h1 className={s.title}>SIGN UP</h1>
            <div className={s.inputItem}>
                <span> User name: </span> {createField("User name",'username',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> Name: </span> {createField("Name",'name',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> Company:</span> {createField("Company",'company',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> Catch phrase:</span> {createField("Catch phrase",'catchPhrase',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> Bs:</span>  {createField("Bs",'bs',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> Adress:</span> {createField("Adress",'adress',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> email:</span>{createField("email",'email',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span> web site:</span> {createField("web site",'webSite',[required],Input2)}
            </div>
            <div className={s.inputItem}>
                <span>phone:</span> {createField("phone",'phone',[required],Input2)}
            </div>

            <div className={s.signUpButton}> <Button type={'primary'} htmlType="submit">SIGN UP</Button> </div>
            {props.error && <div>{props.error}</div>}
        </form>
    );
};


const ReduxLoginForm=reduxForm({form:'login'})(LoginForm)


const SignUp = ({setMyProfile,isAuth}) => {
    const onSubmit = (formData) => {
        setMyProfile(formData)
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (<>
            <ReduxLoginForm onSubmit={onSubmit} />
        </>
    );
};

const mapStateToProps= (state)=> ({
    isAuth:getIsAuth(state)
})

export default compose(
    connect(mapStateToProps,{setMyProfile}) //loginRequest
)(SignUp);