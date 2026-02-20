import { useEffect, useState } from 'react'
import './App.css';
import { dataBook, fetchBook } from './functions/fetchBook/fetchBook'
import Books from './Components/Books/Books';
import Pages from './Components/Pages/Pages';

function App() {
  const [books, setBooks] = useState<dataBook[]>([]);

  const [page, setPage] = useState<number>(1);
  const [currentDataPage, setCurrentDataPage] = useState<any>();
  const [listBooks, setListBooks] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const openPage = () => {

  }

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
      setPage(page + 1);

      getCurrentData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading === false ? listBooks !== undefined ? <Books data={listBooks} page={page} /> : '' : ''}
      {isLoading === true ? <div>Загрузка страницы</div> : <button onClick={addBookInList}>Next Page</button>}
      {<Pages listBooks={listBooks} currentPage={page} setCurrentPage={setNumberPage} />}
    </>
  )
}

export default App
