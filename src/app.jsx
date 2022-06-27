import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Link, useRoutes} from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
// import styles from './app.module.css';

function App() {
  // useRoutes([{path: '/', element: <Home />}]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
