import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';

export default class App extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <div>
        <Route exact path={match.url} component={PostsIndex} />
        <Route path={`${match.url}posts/new`} component={PostsNew} />
      </div>
    );
  }
}