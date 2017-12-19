import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
//Component
import Home from './components/Main/Home'
import Timer from './components/Timer/Timer'
import FilterableNameList from './components/NameList/FilterableNameList'
import PageNotFound from './components/PageNotFound/PageNotFound'

import NameProfile from './components/NameList/NameProfile';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import ProductList from './components/Products/ProductList';
import ProductProfile from './components/Products/ProductProfile';

class App extends Component {
  render() {
    

    return (
      <div className="App">
        
        <Header />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/timer' component={Timer} />
          <Route exact path='/names' component={FilterableNameList} />
          <Route path="/users/:id" render={({match}) => (
            <Redirect to={`/names/${match.params.id}`} />
          )} />
          <Route exact path='/names/:id' component={NameProfile} />
          <Route exact path='/products' component={ProductList} />
          <Route exact path='/products/:id' component={ProductProfile} />
          <Route component={PageNotFound} />
        </Switch>
          
        <Footer />
      </div>
    )
  }
}

export default App
