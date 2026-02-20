import { memo } from 'react';
import "./Books.css";

const Books = memo(function Books({ data, page }: { data: any, page: number }) {

    if (data.length === 0) {
        return <div>Список книг пуст</div>;
    }

    const obj = data[page - 1];

    const result = obj ? obj.map((arr: any, index: number) => (
        <li key={index}>{arr["title"]}</li>
    )) : '';
    
    return (
        <>
            <ul className='book'>
                {obj ? result : ''}
            </ul>
        </>
    );
});

export default Books;
