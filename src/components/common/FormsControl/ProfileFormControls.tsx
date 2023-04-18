import React, {HTMLInputTypeAttribute} from 'react';
import s from './ProfileFormControls.module.scss'
import {Field, WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

type FormControlType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autofocus?: boolean
    className: string
}
const FormControl: React.FC<FormControlType> = ({meta, children}) => {
    const isError = meta.touched && meta.error
    return (
        <div>
            {children}
        </div>
    );
}

export const Textarea: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} className={s.textArea}/></FormControl>
};
export const Input: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
};

export const createField = (placeHolder: string, name: string,
                            validators: Function[], component: React.ReactNode,
                            props = {}, text: string) => {
    return <div>
        <Field placeholder={placeHolder} validate={validators} name={name} component={component} {...props}/>
        {text}
    </div>

}
