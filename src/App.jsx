import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reset from './components/Reset';

function App() {
  return (
    <Router >   
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/reset" component={Reset}  />
          <Route path="/registrarse">
            <Register />
          </Route>
          <Route to='/home'>
            <Home />
          </Route>
        </Switch>  
    </Router>
  );
}

export default App;
