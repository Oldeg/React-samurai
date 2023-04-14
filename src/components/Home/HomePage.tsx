import React from 'react';
import s from './HomePage.module.scss'
import {News} from 'components/News/News';
import {CardType} from 'UI/Card/Card';
import {AsidePanel} from 'components/common/AsidePanel/AsidePanel';

export const Cards1: CardType[] = [
    {
        subTitle: 'Adventure',
        title: 'Travel The World', cardTitle: 'Page You May Like', isLike: true, isImage: false
    },
    {
        cardTitle: 'Latest Top News', title: 'Any one can join with us if you want',
        subTitle: '15 Min Ago',
        isLike: false, isImage: false
    }
]
export const Cards2: CardType[] = [
    {
        title: 'Any one can join with us if you want',
        subTitle: '15 Min Ago',
        isLike: false,
        cardTitle: 'Recent Notification',
        isImage: false
    },
    {
        cardTitle: 'Advertizement',
        isLike: false, isImage: true
    },
    {
        cardTitle: 'Friends Zone', title: 'Ammeya Jakson',
        subTitle: '15 Min Ago',
        isLike: true, isImage: false
    }
]
export const HomePage = () => {
    return (
        <div className={s.homeContent}>
            <AsidePanel cards={Cards1} isBanner={true}/>
            <News/>
            <AsidePanel cards={Cards2} isBanner={false}/>
        </div>

    );
};

