import React, {FC} from 'react';
import s from './AsidePanel.module.scss';
import {ProfileBanner} from 'components/Profile/ProfileBanner/ProfileBanner';
import {Card, CardType} from 'UI/Card/Card';

type AsidePanelType = {
    cards: CardType[]
    isBanner: boolean
}
export const AsidePanel: FC<AsidePanelType> = ({isBanner, cards}) => {
    return (
        <div className={s.asideContent}>
            <aside className={s.widgetArea}>
                {isBanner && <ProfileBanner/>}
                {cards.map((card, index) => {
                    return <Card cardTitle={card.cardTitle} subTitle={card.subTitle} isLike={card.isLike}
                                 title={card.title}
                                 isImage={card.isImage} isProfile={card.isProfile} key={index}/>
                })}
            </aside>
        </div>
    );
};

