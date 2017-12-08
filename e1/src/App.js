import React, {Component} from 'react'
import Layout from './components/Layout'

import names from '../mock-data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout names={names} />
      </div>
    )
  }
}

export default App
