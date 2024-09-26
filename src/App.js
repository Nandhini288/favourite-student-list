import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import FavouriteStudent from './components/FavouriteStudent';
import StudentContextProvider from './components/StudentContextProvider';

function App() {

  const [slist, setSlist] = useState(true)
  const [flist, setFlist] = useState(false)

  function studentList() {
    setSlist(true)
    setFlist(false)
  }
  function favouriteList() {
    setFlist(true)
    setSlist(false)
  }
  return (
    <div className="App">
      <header className="w-full max-h-fit bg-rose-600 content-center flex ">
        <h1 className='text-white p-2 ml-5 text-xl cursor-pointer underline hover:text-yellow-400'
          onClick={studentList}>List of Students</h1>
        <h1 className='text-white p-2 ml-5 text-xl cursor-pointer underline hover:underline hover:text-yellow-400'
          onClick={favouriteList}>Favourite Students</h1>
      </header>
      <StudentContextProvider>
        <div>
          {slist && <StudentList />}
          {flist && <FavouriteStudent />}
        </div>
      </StudentContextProvider>
    </div>
  );
}

export default App;