import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>Status: {props.status || '==='}</span>
            </div>}
            {editMode && <div>
                <input value={status} onBlur={deactivateEditMode} autoFocus={true}
                       onChange={onStatusChange}/>
            </div>}
        </div>
    );


}

