import React, {FC} from 'react';
import {createField, Input, Textarea} from '../common/FormsControl/ProfileFormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from 'components/common/FormsControl/ProfileFormControls.module.scss'

export type EditProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    }
}
export const ProfileForm: FC<InjectedFormProps<EditProfileType>> = ({handleSubmit, initialValues, error}) => {
    const contacts = initialValues.contacts
    return <form onSubmit={handleSubmit}>
        <div>
            Full name: {createField('Full name', 'fullName', [], Input, {}, '')}
        </div>
        <div>
            Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkBox'}, '')}
        </div>

        <div>
            My professional
            skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, {}, '')}
        </div>

        <div>
            About me: {createField('About me', 'aboutMe', [], Textarea, {}, '')}
        </div>
        <div>
            contacts: {contacts && Object.keys(contacts).map(key => {
            return <div key={key}>{key} : {createField(key, 'contacts.' + key, [], Input, {}, '')}</div>
        })}
        </div>
        <button type={'submit'}>Save</button>

        {error && <div className={s.formSummaryError}>
            {error}
        </div>}


    </form>

}
export const EditProfileForm = reduxForm<EditProfileType>({
    form: 'editProfile'
})(ProfileForm)