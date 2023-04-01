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
    let pagesStart: Array<number> = [];
    let pagesEnd: Array<number> = []
    for (let i = 1; i <= 5; i++) {
        pagesStart.push(i)
    }
    for (let i = pagesCount - 4; i <= pagesCount; i++) {
        pagesEnd.push(i)
    }
    return (
        <div className={s.pagesBox}>
            <button className={s.button} onClick={() => onPageChanged(currentPage - 1)}
                    disabled={currentPage === 1}> {'<'} </button>
            {currentPage > 5 ?
                <span><span onClick={() => onPageChanged(1)}>1 ... </span>

                    {currentPage > pagesCount - 5 ? null :
                        <span>
                            <span className={s.pages}>{currentPage - 1}</span>

                        <span className={s.selected}>
                    {currentPage}
                        </span>


                        <span className={s.pages}>
                    {currentPage + 1}
                        </span>
                    </span>}
                </span>
                : pagesStart.map((page, index) => <span key={index} onClick={() => onPageChanged(page)}
                                                        className={currentPage === page ? s.selected : s.pages}>{page}</span>)}

            {currentPage < pagesCount - 4 ?

                <span onClick={() => onPageChanged(pagesCount)}> ... {pagesCount}</span> : pagesEnd.map((page, index) =>
                    <span key={index}
                          className={page === currentPage ? s.selected : s.pages}
                          onClick={() => onPageChanged(page)}>{page}</span>)

            }


            <button className={s.button} onClick={() => onPageChanged(currentPage + 1)}
                    disabled={currentPage === pagesCount}> {'>'} </button>
        </div>
    );
};

