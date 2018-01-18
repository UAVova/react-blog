import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostsIndex from './posts_index';

const Greeting = () => {
  return <div>Greet you!</div>
}

export default class App extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <div>
        <Route exact path={match.url} component={PostsIndex} />
        <Route path={`${match.url}greet`} render={() => <div>Greet you!</div>} />
      </div>
    );
  }
}