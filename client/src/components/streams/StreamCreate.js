import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends Component {
    renderInput({input, label}) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
            </div>
        );
    }
    render() {
        return (
            <div>
                <form>
                    <Field name="title" component={this.renderInput} label="Title"/>
                    <Field name="description" component={this.renderInput} label="Description"/>
                </form>
            </div>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};

export default reduxForm({form: 'streamCreate', validate})(StreamCreate);
