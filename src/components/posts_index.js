import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

@connect((state) => ({ posts: state.posts.all }), { fetchPosts })
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map( post => {
      return (
        <li key={post.id} className='list-group-item'>
          <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
            <div className='pull-xs-right'>{post.categories}</div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>Add a post</Link>
        </div>

        <h3>Posts List</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>

      </div>
    );
 }
}

export default PostsIndex;