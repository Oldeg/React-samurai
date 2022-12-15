import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/ProfileFormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {login} from "../../Redux/Reducers/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/ProfileFormControls.module.css'
import {AppStateType} from "../../Redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength10 = maxLengthCreator(20)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} validate={[requiredField, maxLength10]} name={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} validate={[requiredField, maxLength10]}
                       name={'password'} type='password'/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
type LoginType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>


}

export default connect(mapStateToProps, {login})(Login);