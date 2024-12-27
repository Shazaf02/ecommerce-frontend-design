import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/header/NavBar';
import './App.css';
import FooterView from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <FooterView/>
    </div>
  );
}

export default App;
