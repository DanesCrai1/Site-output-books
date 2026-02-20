import { memo, useState } from 'react';
import './Pages.css';

const Pages = memo(function Books({ listBooks, currentPage, setCurrentPage }: { listBooks: any, currentPage: number, setCurrentPage: (num: number) => void }) {
    const items = Object.keys(listBooks).map((items, index) => (
        <li key={index} onClick={() => setCurrentPage(index)}>{index}</li>
    ));

    console.log(currentPage);

    return (
        <>
            <ul className='pages'>
                {items}
            </ul>
        </>
    );
});

export default Pages;
