import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewBookForm (props) {

    function handleNewBookFormSubmission(event){
        event.preventDefault();

        props.onNewBookCreation({
            title: event.target.title.value,
            author: event.target.author.value,
            description: event.target.description.value,
            copies: event.target.copies.value,
        });
    }

    return (
        <React.Fragment>
            <div className="container book-form">
                <ReusableForm
                    formSubmissionHandler={handleNewBookFormSubmission}
                    buttonText='Add Book' />
            </div>
        </React.Fragment>
    )

}

NewBookForm.propTypes = {
    onNewBookCreation: PropTypes.func
}

export default NewBookForm;
