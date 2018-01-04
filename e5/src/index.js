import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={PostsIndex} />
                <Route exact path="/posts/new" component={PostsNew} />
                <Route exact path="/posts/:id" component={PostsShow} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));

//Switch : to seperate differents routes intead of render of component in the same browser