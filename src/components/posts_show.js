import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import Link from 'react-router-dom/Link';

@connect((state) => ({post: state.posts.post}), {fetchPost, deletePost})
class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onPostDelete () {
    this.props.deletePost(this.props.post.id)
      .then(() => this.props.history.push('/'));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div></div>;
    }

    return (
      <div>
        <Link to='/'>Back</Link>
        <button 
          onClick={() => this.onPostDelete()} 
          className='btn btn-danger pull-xs-right'>
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostsShow;