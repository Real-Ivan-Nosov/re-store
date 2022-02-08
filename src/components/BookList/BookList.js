import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import BookListItem from '../BookListItem/BookListItem';
import WithBookstoreService from '../HOC/WithBookstoreService';
import {booksLoaded} from '../../actions';
import Spinner from '../Spinner/Spinner';

import './BookList.css';

const BookList = (props) => {
  const { books, loading } = props;


  useEffect(() => {
    const {bookstoreService, booksLoaded} = props;
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data)
      })
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <ul className='book-list'>
        {
            books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)
        }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
      books: state.books,
      loading: state.loading
  }
}

const mapDispatchToProps = {
    booksLoaded
}

export default WithBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
        BookList));
