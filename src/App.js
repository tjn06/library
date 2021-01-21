import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Headers/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Faq from './components/Faq';
// import HeaderNoScroll from './components/Headers/HeaderNoScroll';
import ContactBtn from './components/ContactFixed';
import NotFound from './components/NotFound';
import IndexHeader from './components/Headers/IndexHeader';


import styled from "styled-components";


const TopMargin = styled.div`
  padding-top: 150px;

  @media (max-width: 648px) {
    padding-top: 50px;
    transition: all 0.1s ease;
  }
`;

function App() {
  return (
    <Router>
      <IndexHeader />
      <ContactBtn/>
      <TopMargin>
        <Routes>
          <Route path="/" element={<Home topMargin="1000px"/>} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </TopMargin>
      {/* <HeaderNoScroll/> */}
      <div>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/>fvvvrvr<br/></div>
      
    </Router>
  );
}

export default App;
