import React from 'react';
import s from './DialogsItem.module.scss'
import defaultUser from 'assets/images/istockphoto-1300845620-612x612.jpg'

type DialogsItemPropsType = {
    name: string
    image: string
    id: string
    selected: boolean
    onClick: (name: string) => void
}

export const DialogsItem = (props: DialogsItemPropsType) => {
    const dialogs_item_class = props.selected ? `${s.dialogs_item} ${s.active}` : `${s.dialogs_item}`
    const onClickHandler = () => {
        props.onClick(props.name)
    }
    return (

        <div className={dialogs_item_class} onClick={onClickHandler}>

            <img src={props.image ? props.image : defaultUser} alt="avatar" className={s.img}/>

            <div className={s.description}>
                <span className={s.dialogs_item_name}>{props.name}</span>

            </div>

        </div>

    );
};




