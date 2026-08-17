import React from 'react'

function BookDetail (props) {

    const { book } = props

    return (
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <div className="container-fluid">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active">
                                        <img
                                            src={book.photo || 'https://placehold.co/400x400?text=Book+Cover'}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="book-title">{book.title}</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-default float-right" onClick={props.onEditBookClick}> Edit Book</button>
                                    </div>
                                </div>
                                <h5 className="text-muted">by {book.author}</h5>
                                <p className="book-description"> {book.description} </p>
                                <h5 className="copies">Copies available:
                                    <span> {book.copies} </span>
                                </h5>
                                <div className="action">
                                    <button className="btn btn-default" onClick={() => { props.onBorrowButtonClick(book._id) }} type="button">Borrow Book</button>
                                    <button className="btn btn-default float-right" onClick={() => props.onDeleteBook(book._id)}> Delete Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default BookDetail;
