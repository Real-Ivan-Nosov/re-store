import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, CartPage } from '../Pages';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} exact/>
      <Route path='cart' element={<CartPage />}/>
    </Routes>
  )
}

export default App;