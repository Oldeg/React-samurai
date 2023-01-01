import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/ProfileFormControls";

export type PostFormType = {
    post_text: string

}

const maxLength10 = maxLengthCreator(10)
const ProfilePostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Write something'} component={Textarea} name={'post_text'} validate={[requiredField,maxLength10]}/>
            </div>
            <span>
                <button>Add post</button>
            </span>
            <span>
                <button>Remove post</button>
            </span>
        </form>

    );
};
const AddNewPost = reduxForm<PostFormType>({
    form: 'textarea'
})(ProfilePostForm)


export default AddNewPost;