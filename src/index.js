import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

import SignUp from './components/signup';
import SignIn from './components/signin';
import Main from './components/main';
import Dashboard from './components/dashboard';

render(
  <Router>
    <div>
      <Route exact path='/' render={props => <Main {...props}/>}/>
      <Route exact path='/dashboard' render={props => <Dashboard {...props}/>}/>
      <Route exact path='/signup' render={props => <SignUp {...props}/>}/>
      <Route exact path='/signin' render={props => <SignIn {...props}/>}/>
    </div>
  </Router>,
  document.getElementById('root')
)
