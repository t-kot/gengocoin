import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

// Layouts
import App from './App.jsx'
import HomeContainer from './layouts/home/HomeContainer'
import VoteContainer from './layouts/vote/VoteContainer'
import { LoadingContainer } from 'drizzle-react-components'

import store from './store';
import drizzleOptions from './drizzleOptions';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

ReactDOM.render((
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </LoadingContainer>
  </DrizzleProvider>
), document.getElementById('root'));
