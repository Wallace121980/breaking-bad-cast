import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Characters from './components/characters/Characters';
import Episodes from './components/episodes/Episodes';
import Quotes from './components/quotes/Quotes';
import Deaths from './components/deaths/Deaths';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px 20px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to='/'>Characters</Link>
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
              <Episodes />
            </Route>
            <Route path='/quotes'>
              <Quotes />
            </Route>
            <Route path='/deaths'>
              <Deaths />
            </Route>
            <Route path='/'>
              <Characters />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
