import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import Switch from 'react-router-dom/Switch';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
