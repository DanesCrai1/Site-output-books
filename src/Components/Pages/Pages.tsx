import { memo, useState } from 'react';
import './Pages.css';

const Pages = memo(function Books({ listBooks, currentPage, setCurrentPage }: { listBooks: any, currentPage: number, setCurrentPage: (num: number) => void }) {
    const items = Object.keys(listBooks).map((_, index) => {
        const pageNum = index + 1;
        return (
            <li key={pageNum} onClick={() => setCurrentPage(pageNum)}>
                {pageNum}
            </li>
        );
    });

    return (
        <>
            <ul className='pages'>
                {items}
            </ul>
        </>
    );
});

export default Pages;
