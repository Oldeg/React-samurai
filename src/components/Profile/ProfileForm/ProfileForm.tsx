import React, {FC} from 'react';
import {createField, Input, Textarea} from 'components/common/FormsControl/ProfileFormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import style from 'components/common/FormsControl/ProfileFormControls.module.scss'
import s from './ProfileForm.module.scss'

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
    return <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.form_item}>
            <span className={s.title}>Full name :</span> {createField('Full name', 'fullName', [], Input, {}, '')}
        </div>
        <div className={s.form_item} style={{justifyContent: 'flex-start'}}>
            <span
                className={s.title}
            >Looking for a job :</span> {createField('', 'lookingForAJob', [], Input, {type: 'checkBox'}, '')}
        </div>

        <div>
            <span className={s.title}>My professional
                skills :</span> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea, {}, '')}
        </div>

        <div>
            <span className={s.title}>About me :</span> {createField('About me', 'aboutMe', [], Textarea, {}, '')}
        </div>
        <div className={s.contactsContainer}>
            <span className={s.title}>contacts</span> {contacts && Object.keys(contacts).map(key => {
            return <div key={key}
                        className={s.form_item}><span
                className={s.title}>{key} :</span> {createField(key, 'contacts.' + key, [], Input, {}, '')}</div>
        })}
        </div>
        <button type={'submit'} className={s.saveBtn}>Save</button>

        {error && <div className={style.formSummaryError}>
            {error}
        </div>}


    </form>

}
export const EditProfileForm = reduxForm<EditProfileType>({
    form: 'editProfile'
})(ProfileForm)