import React from 'react';
import s from "./Paginator.module.css";

type PaginatorType = {
    totalCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number

}
export const Paginator: React.FC<PaginatorType> = ({totalCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.pagesBox}>{pages.map((pageNumber, index) =>
            <span key={index}
                  onClick={() => onPageChanged(pageNumber)}
                  className={currentPage === pageNumber ? s.selected : s.pages}>{pageNumber}</span>)}
        </div>
    );
};

