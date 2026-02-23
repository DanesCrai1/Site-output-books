import { useEffect, useState } from 'react'
import './App.css';
import { dataBook, fetchBook } from './functions/fetchBook/fetchBook'
import Books from './Components/Books/Books';
import Pages from './Components/Pages/Pages';

function App() {
  const [books, setBooks] = useState<dataBook[]>([]);

  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(1);
  const [currentDataPage, setCurrentDataPage] = useState<any>();
  const [listBooks, setListBooks] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchBook()
      setCurrentDataPage(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setNumberPage = (index: number) => {
    setPage(index);
  }

  useEffect(() => {
    getCurrentData();
  }, []);


  const addBookInList = () => {
    try {
      setListBooks({ ...listBooks, [page]: currentDataPage });

      setLastPage(lastPage + 1);
      setPage(lastPage);

      getCurrentData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? <div>Загрузка страницы</div> : ''}
      {!isLoading ? <button onClick={addBookInList}>Next Page</button> : ''}
      {!isLoading ? listBooks !== undefined ? <Books data={listBooks} page={page} /> : '' : ''}
      {!isLoading ? <Pages listBooks={listBooks} currentPage={page} setCurrentPage={setNumberPage} /> : ''}
    </>
  )
}

export default App
