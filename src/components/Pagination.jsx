import React from 'react';
import '../styles/Pagination.module.css';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((page) => (
                    <li key={page} className='page-item'>
                        <a
                            href='#'
                            className={currentPage === page ? 'page-link active' : 'page-link'}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;