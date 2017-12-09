import React, {Component} from 'react'
import {Route} from 'react-router-dom'
//Component
import Layout from './components/Layout'
import Timer from './components/Timer'
import FilterableNameList from './components/FilterableNameList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Layout} />
        <Route exact path="/timer" component={Timer} />
      </div>
    )
  }
}

export default App
