import React, {HTMLInputTypeAttribute} from 'react';
import s from './ProfileFormControls.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

type FormControlType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autofocus?: boolean


}
const FormControl: React.FC<FormControlType> = ({input, meta, children, ...props}) => {
    const isError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (isError ? s.error : '')}>
            {children}
            {isError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};
export const Input: React.FC<FormControlType> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
};

