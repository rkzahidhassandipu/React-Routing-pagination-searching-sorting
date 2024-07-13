import React from 'react';

const Pagination = ({totalPages, currentPage, onHandleCurrentPage}) => {

    const handleFirstPage = () => {
            onHandleCurrentPage(1);
    }
    const handleLastPage = () => {
            onHandleCurrentPage(totalPages);
    }
    const handlePreviousChange = () => {
        if(currentPage > 1){
            onHandleCurrentPage(currentPage - 1);
        }
    }
    const handleNextChange = () => {
        if(currentPage < totalPages){
            onHandleCurrentPage(currentPage + 1);
        }
    }
    const getVisiblePageNumbers = () => {
        const visiblePage = 6;
        const page = [];

        let startPage = Math.max(1, currentPage - Math.floor(visiblePage / 2));
        let endtPage = Math.min(totalPages, startPage + visiblePage - 1);

        if(endtPage - startPage < visiblePage - 1){
            startPage = Math.max(1, endtPage - visiblePage + 1);
        }

        for(let i = startPage; i < endtPage; i++){
            page.push(i);
        }
        
        return page;        
    }
    const visiblePageNumbers = getVisiblePageNumbers();


  return (
    <div className="pagination">
        <button onClick={handleFirstPage} disabled={currentPage === 1} aria-label='First page'>&laquo;  &laquo;</button>
        <button onClick={handlePreviousChange} disabled={currentPage === 1} aria-label='previous page'>&laquo;</button>
        {visiblePageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                onClick={() => onHandleCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
            >
                {pageNumber}
            </button>
        ))}
        {/* {Array.from({length: totalPages}, (_, index) => {
            return (
                <button key={index} onClick={() => onHandleCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                    {index + 1}
                </button>
            )
        })} */}
        <button onClick={handleNextChange} disabled={currentPage === totalPages } aria-label='next page'>&raquo;</button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages} aria-label='last-page'>&raquo; &raquo;</button>
    </div>
  )
}

export default Pagination;