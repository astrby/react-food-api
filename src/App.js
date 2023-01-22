import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import Index from './components/Index'
import Meal from './components/Meal'
import NB from './components/NB'
import Footer from './components/Footer'
import './components/App.css'

function App() {
  return (
    <div className="App">
      <NB/>
      <div className='body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index></Index>}></Route>
            <Route path='/meal/:idMeal' element={<Meal></Meal>}></Route>
            <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
