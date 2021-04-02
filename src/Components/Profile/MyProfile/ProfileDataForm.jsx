import React from 'react'

import {Button} from "antd";
import {reduxForm} from "redux-form";
import s from '../../Login/login.module.css'
import {required} from "../../../utils/validators/validators";
import {createField, Input2} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, error,}) => {
    return (<>
            <div className={s.wrapperFormData}>
            <form onSubmit={handleSubmit}>
                <br/>
                <div><Button htmlType="submit">save</Button></div>

                {error && <div>{error}</div>}

                <div className={s.inputItem}>
                    <span> User name: </span> {createField("User name", 'username', [required], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> Name: </span> {createField("Name", 'name', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> Company:</span> {createField("Company", 'company', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> Catch phrase:</span> {createField("Catch phrase", 'catchPhrase', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> Bs:</span> {createField("Bs", 'bs', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> Adress:</span> {createField("Adress", 'adress', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> email:</span>{createField("email", 'email', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span> web site:</span> {createField("web site", 'webSite', [], Input2)}
                </div>
                <div className={s.inputItem}>
                    <span>phone:</span> {createField("phone", 'phone', [], Input2)}
                </div>
            </form>
            </div>
        </>
    )
}

const ProfileDataReduxForm = React.memo(reduxForm({form: "edit-profile"})(ProfileDataForm))

export default ProfileDataReduxForm;
