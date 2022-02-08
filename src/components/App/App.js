import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ShopHeader from '../ShopHeader/ShopHeader';
import { HomePage, CartPage } from '../Pages';

import './App.css';

const App = () => {
  return (
    <main role={'main'} className={'container'}>
      <ShopHeader />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='cart' element={<CartPage />} />
      </Routes>
    </main>
  )
}

export default App;