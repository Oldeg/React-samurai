import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

import {createField, Input} from "../common/FormsControl/ProfileFormControls";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
import {login} from "Redux/Reducers/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './Login.module.scss'
import {AppStateType} from "Redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean,
    captcha: string
}
type PropsType = {
    captcha: string
}
const maxLength10 = maxLengthCreator(20)
const LoginForm: React.FC<PropsType & InjectedFormProps<FormDataType, PropsType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div className={s.inputWrapper}>
                <Field placeholder={'Email'} component={Input} validate={[requiredField, maxLength10]} name={'email'}
                       className={s.input}/>
            </div>
            <div className={s.inputWrapper}>
                <Field placeholder={'Password'} component={Input} validate={[requiredField, maxLength10]}
                       name={'password'} type='password' className={s.input}/>
            </div>
            <div className={s.checkBoxWrapper}>
                <Field type={'checkbox'} component={Input} name={'rememberMe'} className={s.checkBox}/>
                <p className={s.remember}>Remember me</p>
            </div>

            {props.captcha ? <img src={props.captcha} alt={''}/> : null}
            {props.captcha && createField('captcha', 'captcha', [requiredField], Input, {}, '')}
            {props.error && <div>
                {props.error}
            </div>}
            <div className={s.btnContainer}>
                <button className={s.btn}>Log in</button>
            </div>
        </form>

    );
};
const LoginReduxForm = reduxForm<FormDataType, PropsType>({
    form: 'login',
})(LoginForm)
type LoginType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}
type MapStateToPropsType = {
    isAuth: boolean
    captcha: string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}
const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.loginWrapper}>
        <div className={s.login}>
            <h1 className={s.loginTitle}>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    </div>


}

export default connect(mapStateToProps, {login})(Login);