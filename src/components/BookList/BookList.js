import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import BookListItem from '../BookListItem/BookListItem';
import WithBookstoreService from '../HOC/WithBookstoreService';
import {booksLoaded} from '../../actions';

import './BookList.css';

const BookList = (props) => {
  const { books } = props;

  useEffect(() => {
    //1. receive data
    const {bookstoreService, booksLoaded} = props;
    const data = bookstoreService.getBooks();

    //2. dispatch action to store
    booksLoaded(data)
  }, [])

  return (
    <ul>
        {
            books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)
        }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
      books: state.books
  }
}

const mapDispatchToProps = {
    booksLoaded
}

export default WithBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
        BookList));
