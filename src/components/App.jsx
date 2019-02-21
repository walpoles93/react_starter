import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route render={() => <h1>React works!</h1>} />
    </Router>
  )
}

export default App
