import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Rout(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App setSList={true} setFList={false}/>}></Route>
      <Route path='/favouritestudent' element={ <App setSList={false} setFList={true} />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);
