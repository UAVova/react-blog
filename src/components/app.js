import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './posts_show';

export default class App extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <div>
        <Switch>
          <Route path={`/posts/new`} component={PostsNew} />
          <Route path={`/posts/:id`} component={PostsShow} />
          <Route component={PostsIndex} />
        </Switch>
      </div>
    );
  }
}