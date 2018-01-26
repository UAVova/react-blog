import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Cerate new post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field component='input' type='text' name='title' className='form-control'/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <Field component='input' type='text' name='categories' className='form-control'/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <Field component='textarea' type='text' name='content' className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary' disabled={submitting || pristine}>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNew'
}, null, { createPost })(PostsNew);