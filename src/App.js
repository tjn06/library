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
import { createGlobalStyle } from 'styled-components';

import Footer from './components/footer/Footer';
import { Rnd } from "react-rnd";

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #353535;;
    --color-pink: #A84061;
    --color-green: #AFB880;
  }
`;

const styleMoveBox = {
  zIndex: "999",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 2px  #607D8B",
  background: "#2196F3",
  borderRadius: "5px"
};

const TopMargin = styled.div`
  padding-top: 65px;

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
  bottom: 0px;
  left: 45%;
  z-index: 111;
  background-color: grey;
  color: white;
  margin: 3px 3px 1px 3px;
  padding: 6px;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
  /* border: 3px solid blue; */
  cursor: pointer;
  opacity: 0.8;

:hover {
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background-color: #03A9F4;
  opacity: 1;
}

:active {
  outline: 0;
  /* border: 1px solid black; */
}

:focus {
  outline: 0;
}
  `;




function App() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
  <GlobalStyles />
    <Router>
      <IndexHeader showEdit={showEdit}/>
      <StyledEditButton onClick={() => setShowEdit(!showEdit)}>Redigering AV/PÅ</StyledEditButton>
      {/* <Rnd
      style={styleMoveBox}
      default={{
        x: 20,
        y: 20,
        width: 140,
        height: 60}}>
          <StyledEditButton onClick={() => setShowEdit(!showEdit)}>Redigering AV/PÅ</StyledEditButton>
      </Rnd> */}
      <ContactFixed/>
      <TopMargin>
        <Routes>
          <Route path="/" element={<Home showEdit={showEdit}/>} />
          <Route path="/Menu" element={<Menu showEdit={showEdit}/>} />
          <Route path="/faq" element={<Faq showEdit={showEdit}/>} />
          <Route path="/not" element={<NotFound showEdit={showEdit}/>} />
        </Routes>
      </TopMargin>
      {/* <HeaderNoScroll/> */}
      <StyledMinHeight/>
      <Footer />
    </Router>
    </>
  );
}

export default App;
