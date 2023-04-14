import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
import {Textarea} from "components/common/FormsControl/ProfileFormControls";
import s from './PostForm.module.scss'

export type PostFormType = {
    post_text: string
    post_img: string

}

const maxLength10 = maxLengthCreator(10)
const ProfilePostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.formContainer}>
                <div className={s.textArea}>
                    <Field placeholder={'Write something'} component={Textarea} name={'post_text'}
                           validate={[requiredField, maxLength10]}/>
                </div>
                <div className={s.btnContainer}>
                    <button type={'button'} className={s.selectBtn}>
                        <div className={s.upload}></div>
                    </button>
                    <button type={'submit'} className={s.submitBtn}>Add post</button>
                </div>
            </div>

        </form>

    );
};
const AddNewPost = reduxForm<PostFormType>({
    form: 'textarea'
})(ProfilePostForm)


export default AddNewPost;