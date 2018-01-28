import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
  , document.querySelector('.container')
);
