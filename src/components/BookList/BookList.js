import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import BookListItem from '../BookListItem/BookListItem';
import WithBookstoreService from '../HOC/WithBookstoreService';
import Spinner from '../Spinner/Spinner';
import { fetchBooks, bookAddedToCart } from '../../actions';

import './BookList.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => <li key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} /></li>)
      }
    </ul>
  )
}

const BookListContainer = (props) => {
  const { books, loading, error, onAddedToCart } = props;


  useEffect(() => {
    props.fetchBooks()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books} onAddedToCart={onAddedToCart}/>
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
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
}

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(
    BookListContainer));
