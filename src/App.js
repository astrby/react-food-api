import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import Index from './components/Index'
import Meal from './components/Meal'
import NB from './components/NB'

function App() {
  return (
    <div className="App">
      <NB></NB>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route path='/meal/:idMeal' element={<Meal></Meal>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
