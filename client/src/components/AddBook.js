import React from 'react';

function AddBook(props) {
    return (
        <div className="section-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12 col-md-6"></div>
                    <div className="col-sm-12 col-12 col-md-6">
                        <div className="float-md-right">
                            <button onClick={props.whenButtonClicked} className="see-all-books text-center mx-auto">{props.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
