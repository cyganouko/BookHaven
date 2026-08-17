import React from 'react';
import PropTypes from "prop-types";

function EditBookForm(props) {

    function handleEditFormSubmission(event){
        event.preventDefault()
        props.onEditBook({
            title: event.target.title.value,
            author: event.target.author.value,
            description: event.target.description.value,
            copies: event.target.copies.value,
        })
    }

    return (
        <React.Fragment>
            <div className="book-form">
                <form className="new-book-form" onSubmit={handleEditFormSubmission}>
                    <h1>Book Form</h1>
                    <div className="form-input-material">
                        <input type='text'
                            name='title'
                            defaultValue={props.book.title}
                            placeholder=' '
                            className='form-control-material'
                            autoComplete="off"
                            id='title'
                            required
                        />
                        <label htmlFor="title"> Title</label>
                    </div>
                    <div className="form-input-material">
                        <input type='text'
                            name='author'
                            defaultValue={props.book.author}
                            className='form-control-material'
                            autoComplete="off"
                            id='author'
                            required
                        />
                        <label htmlFor="author"> Author</label>
                    </div>
                    <div className="form-input-material">
                        <textarea type='text'
                            name='description'
                            defaultValue={props.book.description}
                            className='form-control-material'
                            autoComplete="off"
                            id='description'
                            required
                        />
                        <label htmlFor="description"> Description </label>
                    </div>
                    <div className="form-input-material">
                        <input type='number'
                            name='copies'
                            defaultValue={props.book.copies}
                            className='form-control-material'
                            autoComplete="off"
                            id='copies'
                            required
                        />
                        <label htmlFor="copies"> Copies</label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary btn-ghost">Update Book</button>
                </form>
            </div>
        </React.Fragment>
    )
}

EditBookForm.propTypes = {
    onEditBook: PropTypes.func
};

export default EditBookForm
