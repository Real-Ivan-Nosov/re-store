import React, { Fragment } from 'react';

import './BookListItem.css';

const BookstoreItem = ({book}) => {
    const { title, author } = book;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    )
}

export default BookstoreItem;
