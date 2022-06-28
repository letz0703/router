import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
// import styles from './app.module.css';

function App() {
  // useRoutes([{path: '/', element: <Home />}]);
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
        </nav> */}
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
