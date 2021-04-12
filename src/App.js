import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/ui/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/episodes'>Episodes</Link>
            </li>
            <li>
              <Link to='/quotes'>Quotes</Link>
            </li>
            <li>
              <Link to='/deaths'>Deaths</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/episodes'>
            <h1>Episodes</h1>
          </Route>
          <Route path='/quotes'>
            <h1>Quotes</h1>
          </Route>
          <Route path='/deaths'>
            <h1>Deaths</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
