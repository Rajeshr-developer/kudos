import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/index';
import KudosPage from './KudosPage/index';
import Header from './Header/index';

function App() {
  return (
    <>
      <Header/>
      <LoginPage/>
      <KudosPage/>
    </>
  );
}

export default App;
