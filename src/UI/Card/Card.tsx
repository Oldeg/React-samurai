import React, {FC} from 'react';
import s from './Card.module.scss'
import ava1 from 'assets/images/ava-1.webp'
import ava2 from 'assets/images/ava-2.webp'
import ava3 from 'assets/images/ava-3.webp'
import ava4 from 'assets/images/ava-4.webp'
import advertise from 'assets/images/advertise.webp'
import {CardItem} from 'UI/Card/CardItem/CardItem';


export type CardType = {
    isImage?: boolean
    title?: string
    subTitle?: string
    cardTitle?: string
    isLike?: boolean
    isProfile?: boolean
}

export const Card: FC<CardType> = ({
                                       isImage, subTitle,
                                       title, cardTitle, isLike, isProfile
                                   }) => {
    const cards = [
        {title: title, subTitle: subTitle, image: ava1},
        {title: title, subTitle: subTitle, image: ava2},
        {title: title, subTitle: subTitle, image: ava3},
        {title: title, subTitle: subTitle, image: ava4},
    ]
    const containerClasses = isProfile ? `${s.cardContainer} ${s.margin}` : `${s.cardContainer}`
    return (
        <div className={containerClasses}>
            <h4 className={s.cardTitle}>{cardTitle}</h4>
            {isImage ? <img src={advertise} alt="advertise"/> :
                cards.map((card, index) => {
                    return <CardItem image={card.image} title={card.title} subTitle={card.subTitle} isLike={isLike}
                                     key={index}/>
                })
            }
        </div>
    );
};

