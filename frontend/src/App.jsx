import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Messages from './components/pages/Messages';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import Favorite from './components/pages/Favorite';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/messages" element={<Messages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
