import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import FavouriteStudent from './components/FavouriteStudent';
import StudentContextProvider from './components/StudentContextProvider';
import Header from './components/Header';

function App(props) {

  const [slist, setSlist] = useState(props.setSList)
  const [flist, setFlist] = useState(props.setFList)

  return (
    <div className="App">
      <Header setSList={setSlist} setFList={setFlist} />
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