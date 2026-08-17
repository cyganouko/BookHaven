import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function BookList (props) {

    return (
        <React.Fragment>
            <div className='container' id="books">
                <div className="row pdg-line">
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="abt-top-border"> </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <p className="book-title text-center">CATALOG</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="abt-top-border"> </div>
                    </div>
                </div>
                <div className="all-books">
                    <div className="row">
                        {props.bookList.length === 0 && (
                            <p className="mx-auto">No books yet — add one, or run the seed script.</p>
                        )}
                        {props.bookList.map((book) =>
                            <Book
                                whenBookClicked={props.onBookSelection}
                                photo={book.photo}
                                title={book.title}
                                author={book.author}
                                id={book._id}
                                key={book._id}/>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

BookList.propTypes = {
    bookList: PropTypes.array,
    onBookSelection: PropTypes.func,
}

export default BookList;
