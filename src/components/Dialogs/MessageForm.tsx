import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/ProfileFormControls";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
export type MessageFormType = {
    newMessageBody: string
}
const maxLength10 = maxLengthCreator(10)
const MessageForm: React.FC<InjectedFormProps<MessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea}  validate={[requiredField,maxLength10]} name='newMessageBody' placeholder='Enter your message'/></div>
            <button>Send</button>
        </form>
    );
};
const AddMessageFormRedux = reduxForm<MessageFormType>({
    form:'dialogAddMessageForm'
})(MessageForm)
export default AddMessageFormRedux;