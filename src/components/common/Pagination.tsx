import React from 'react';
import style from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

type PaginationPropsType = {
    pagesCount: number
    rangePages: number
    marginPages: number
    onPageChanged: (selected: number) => void
}

function Pagination(props: PaginationPropsType) {

    const onPageChange = ({ selected } : {selected: number}) => {
        props.onPageChanged(selected + 1)
    }

    return (
        <ReactPaginate
            containerClassName={style.buttons}
            disabledClassName={style.buttonDisabled}
            activeClassName={style.buttonActive}
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={props.pagesCount}
            onPageChange={onPageChange}
            pageRangeDisplayed={props.rangePages}
            marginPagesDisplayed={props.marginPages}
        />
    );
}

export default Pagination;

