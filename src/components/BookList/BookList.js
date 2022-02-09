import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import BookListItem from '../BookListItem/BookListItem';
import WithBookstoreService from '../HOC/WithBookstoreService';
import Spinner from '../Spinner/Spinner';
import { booksLoaded, booksRequested, booksError } from '../../actions';

import './BookList.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const BookList = (props) => {
  const { books, loading, error } = props;


  useEffect(() => {
    props.fetchBooks()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
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
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {   
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
    }
  }
}

export default WithBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
        BookList));
