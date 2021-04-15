import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Characters from './components/characters/Characters';
import Episodes from './components/episodes/Episodes';
import Quotes from './components/quotes/Quotes';
import Deaths from './components/deaths/Deaths';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle, Container } from './style';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Container>
          <Navbar />
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
