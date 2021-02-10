import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Headers/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Faq from './components/Faq';
// import HeaderNoScroll from './components/Headers/HeaderNoScroll';
import ContactFixed from './components/iconcomponents/ContactFixed';
import NotFound from './components/NotFound';
import IndexHeader from './components/headers/IndexHeader';


import styled from "styled-components";
import Footer from './components/footer/Footer';


const TopMargin = styled.div`
  padding-top: 150px;

  @media (max-width: 648px) {
    padding-top: 50px;
    transition: all 0.1s ease;
  }
`;

const StyledMinHeight = styled.div`
  height: 800px;
  @media (max-width: 648px) {
  }
`;

const StyledEditButton = styled.button` 
  position: fixed;
  top: 4px;
  right: -20px;
  z-index: 111;
  `;


function App() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <Router>
      <IndexHeader showEdit={showEdit}/>
      <StyledEditButton onClick={() => setShowEdit(!showEdit)}>Edit On Off</StyledEditButton>
      <ContactFixed/>
      <TopMargin>
        <Routes>
          <Route path="/" element={<Home showEdit={showEdit}/>} />
          <Route path="/Menu" element={<Menu showEdit={showEdit}/>} />
          <Route path="/faq" element={<Faq showEdit={showEdit}/>} />
          <Route path="/*" element={<NotFound showEdit={showEdit}/>} />
        </Routes>
      </TopMargin>
      {/* <HeaderNoScroll/> */}
      <StyledMinHeight/>
      <Footer />
    </Router>
  );
}

export default App;
