import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const validate = props => {
  const errors = {};
  
  if (!props.title || props.title.length < 3) {
    errors.title = 'Title must have more than 3 charaters';
  } else if (props.title.length >= 15) {
    errors.title = 'Title must have less that 15 characters'
  } 
  if (!props.categories) {
    errors.categories = 'You should provide some categories';
  } else if (!/((\w+){3},){2,}(\w+){3,}/g.test(props.categories)) {
    errors.categories = 'You must provide at least 3 categories'
  } if (!props.content) {
    errors.content = 'Content is required!';
  } else if (props.content.length > 500) {
    errors.content = 'The length of the content must be less that 500 chars.'
  }

  return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  
  <div className={`form-group ${(touched && (error && 'has-danger'))}`}>
    <label className='form-control-label'>{label}</label>
    <input {...input} name='content' className='form-control'/>
    {(touched &&
        (error && <div className='form-control-feedback'>
                    {error}
                  </div>)
    )}
  </div>
)
const renderTextarea = ({
  input,
  label,
  meta: { touched, error, warning }
}) => (
  
  <div className={`form-group ${(touched && (error && 'has-danger'))}`}>
    <label className='form-control-label'>{label}</label>
    <textarea {...input} className='form-control'/>
    {(touched &&
        (error && <div className='form-control-feedback'>
                    {error}
                  </div>)
    )}
  </div>
)

class PostsNew extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Cerate new post</h3>
        <Field component={renderField} type='text' name='title' label='Title'/>
        <Field component={renderField} type='text' name='categories' spec="lololo" label='Categories'/>
        <Field component={renderTextarea} name='content' label='Content'/>
        <button type='submit' className='btn btn-primary' disabled={submitting || pristine}>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

PostsNew = connect(null, { createPost })(PostsNew)

export default reduxForm({
  form: 'PostsNew',
  validate
})(PostsNew);