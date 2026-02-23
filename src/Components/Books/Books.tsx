import { memo, useEffect, useState } from 'react';
import "./Books.css";

const Books = memo(function Books({ data, page }: { data: any, page: number }) {
    const numPuge = page - 1;
    const [currentData, setCurrentData] = useState(data ? data[numPuge] : undefined);

    useEffect(() => {
        setCurrentData(data ? data[numPuge] : undefined);
    }, [data, page]);

    const result = currentData ? currentData.map((arr: any, index: number) => (
        <li key={index}>{arr["title"]}</li>
    )) : '';

    return (
        <>
            <ul className='book'>
                {currentData ? result : ''}
            </ul>
        </>
    );
});

export default Books;
