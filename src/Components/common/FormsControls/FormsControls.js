import styles from  './formsControls.module.css'
import {Field} from "redux-form";
import React from "react";
import {Input} from "antd";
const { TextArea } = Input;

export const FormControl = ({input, meta:{touched,error}, children}) => {
    const hasError = touched && error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea2 = (props) => {
    const {input,meta,child, ...restProps} = props
    return <FormControl {...props}> <TextArea required rows={4} {...input}{...restProps}/> </FormControl>
}

export const Input2 = (props) => {
    const {input,meta,child, ...restProps} = props
    return <FormControl {...props}>
        <Input {...input}{...restProps}/>
    </FormControl>
}

export const createField = (placeholder,name,validators,component, props={}, tekst='') => (
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
           {...props}
    /> {tekst}
    </div>
)

