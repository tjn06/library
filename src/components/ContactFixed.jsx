import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";
import ContactBtn from './ContactBtn';

const Styles = {
  width: "70px",
  position: "fixed",
  bottom: "10px",
  right: "10px",
  
};

const StyledFaq = styled.div` 
  border-bottom: 1px solid #9c9a9a;
  cursor: crosshair;
  font-style: oblique;
   
`
;



const foo = ` 


`
;
const StyledContainer = styled.button`
  /* font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 0px 40px;
  height: 400px;
  background-color: #ffffff;;
  color: #333;
  transform: translateY(0);
  transition: transform 0.3s ease;
  background-color: lime; */
`
const data = [
  {
    question:"Telefon",
    answer:"0706455458"
  },

  {
    question:"Adress",
    answer:"Heffdf 439 994 Göteborg"
  },

  {
    question:"Email",
    answer:"test@email.nu"
  }
];

const ContactFixed = () => {
  const [showHide, setShowHide] = useState([]);
  const [showHideBtn, setShowHideBtn] = useState(false);

  //const closeMobileMenu = () => setShowHide(!showHide);
  const toggleIsOpen = (index) =>{
    let toggle = [...showHide];
    toggle[index] = !toggle[index];
    setShowHide(toggle)
  }

  return (
    <div className="footer" style={Styles}>
      <div className="reverse">
      <StyledContainer onClick={() => setShowHideBtn(!showHideBtn)}>Kontakt</StyledContainer>
      <Collapse isOpened={showHideBtn} theme={{collapse: 'foo', content: 'bar'}}>
      <div >
      {data.map((data, index) => (
      <StyledFaq className="reverse" onClick={() => toggleIsOpen(index)} key={index}>
      <p>{data.question}</p>
      <Collapse isOpened={showHide[index]}><p>{data.answer}</p></Collapse>
      </StyledFaq>
 ))}
 </div>
        
      </Collapse>
    </div>
    </div>
    
    

  );
};

export default ContactFixed;