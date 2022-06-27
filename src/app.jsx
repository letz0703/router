import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import React, {Component} from 'react';
import ScrollOut from 'scroll-out';
// scrollout lecture : https://www.youtube.com/watch?v=m-MpXGFKomE
import styles from './app.module.css';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
