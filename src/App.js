import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Faq from './components/Faq';
import ContactBtn from './components/ContactFixed';


import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <ContactBtn/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
