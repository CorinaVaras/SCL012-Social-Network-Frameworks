import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router >   
        <Switch>
          <Route path="/" exact>
            <Login />          
          </Route>
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
