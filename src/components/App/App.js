import React from 'react';
import './App.css';
import WithBookstoreService from '../HOC/WithBookstoreService';

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  return <div>App</div>
}

export default WithBookstoreService()(App);