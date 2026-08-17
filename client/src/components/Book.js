import React from 'react';
import PropTypes from 'prop-types';

function Book (props) {

    return (
        <React.Fragment>
            <div className="col-12 col-sm-12 col-md-4" >
                <div className="book" onClick={() => props.whenBookClicked(props.id)} >
                    <div className="book-img">
                        <img
                            src={props.photo || 'https://placehold.co/300x160?text=Book+Cover'}
                            className="img-fluid d-block mx-auto"
                            alt={props.title}/>
                    </div>
                    <div className="book-name-cost">
                        <h5 className="float-left">{props.title}</h5>
                        <h6 className="float-right font-weight-bold">{props.author}</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    photo: PropTypes.string,
    id: PropTypes.string,
    whenBookClicked: PropTypes.func,
}

export default Book;
