import React from 'react'

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form className="new-book-form" onSubmit={props.formSubmissionHandler}>
                <h1>Book Form</h1>
                <div className="form-input-material">
                    <input type='text'
                        name='title'
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
                        placeholder=' '
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
                        placeholder=' '
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
                        placeholder=' '
                        className='form-control-material'
                        autoComplete="off"
                        id='copies'
                        required
                    />
                    <label htmlFor="copies"> Copies</label>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-ghost">{props.buttonText} </button>
            </form>
        </React.Fragment>
    )
}

export default ReusableForm
