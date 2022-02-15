import React from 'react';

export default function Pagination(props) {

    const { pagination, handleOnchangePages } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    // console.log('page', _page)
    function handlePageChange(newPage){
        if(handleOnchangePages){
            handleOnchangePages(newPage);
        }else{
            console.log("Error");
        }
    }
    return (
        <>
            <button disabled={_page <= 1} onClick={()=>{handlePageChange(_page - 1)}}>Prev</button>
            <button disabled={_page >= totalPages} onClick={()=>{handlePageChange(_page + 1)}}>Next</button>
        </>
    )
}
