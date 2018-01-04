import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'; 

class PostsNew extends Component{
    renderTitleField(field){

        const {meta : {touched, error, }} = field;
        const className = `form-group ${touched && error} ? 'has-danger' : ''`;
        return (
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} 
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        //this === component
        //values : {title: "szzzdz", categories: "dadad", content: "odaoda"}

        this.props.createPost(values, () =>{
            this.props.history.push('/')
        });
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title for Post" 
                        name="title"
                        component={this.renderTitleField} 
                    />
                    <Field
                        label="Categories" 
                        name="categories"
                        component={this.renderTitleField} 
                    />
                    <Field 
                        label="Post Content"
                        name="content"
                        component={this.renderTitleField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
}
//validate function will be called automatically by redux form (click button or submit)
function validate(values){
    const error = {};
    //validate the input from 'values'
    //Add a message error
    //We can break it out our statement, many if as possible 
    if(!values.title){
        error.title = "Enter a title!";
    }
    if(!values.categories){
        error.categories = 'Enter some categories';
    }
    if(!values.content){
        error.content = 'Enter some content';
    }
    return error;
}
//how to combine reduxform and connect
export default reduxForm({
    validate,
    form : 'PostNewForm'
})(
    connect(null, {createPost})(PostsNew)
);