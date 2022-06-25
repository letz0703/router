import styles from './app.module.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <>
      <section className={styles.section}></section>
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

export default App;
