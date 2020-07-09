import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';
import store from './app/store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Add } from './features/add/Add.jsx'
import { Edit } from './features/edit/Edit.jsx'
import { Learn } from './features/learn/Learn.jsx'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/add' component={Add} />
          <Route path='/edit/:id' exact component={Edit} />
          <Route path='/learn' component={Learn} />
          <Route path='*' component={App} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);