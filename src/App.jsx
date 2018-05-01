import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import HomeContainer from './layouts/home/HomeContainer'
import VoteContainer from './layouts/vote/VoteContainer'
import { LoadingContainer } from 'drizzle-react-components'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/vote" component={VoteContainer} />
      </div>
    );
  }
}

export default App
