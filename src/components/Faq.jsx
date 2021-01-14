import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";


const StyledFaq = styled.div` 
  border-bottom: 1px solid #9c9a9a;
  cursor: crosshair;
  font-style: oblique;
   
`
;
const StyledContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  max-width: 500px;
`
const data = [
  {
    question:"Varför ska du välja just oss?",
    answer:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod"
  },

  {
    question:"Hur lång tid tar det att få en sida gjord?",
    answer:"Allt beror på hur många 'features' du vill ha som produktägare! Men från någon vecka till en månad! "
  },

  {
    question:"Vart ligger erat företag?",
    answer:"Förtillfället väldigt svävande, Tobbe bor på en ö och jag i en förort"
  },

  {
    question:"Vem är coolast?",
    answer:"Finns inga vem eller du hos oss, allt är VI!"
  }
];

const Faq = () => {
  const [showHide, setShowHide] = useState([]);

  //const closeMobileMenu = () => setShowHide(!showHide);
  const toggleIsOpen = (index) =>{
    let toggle = [...showHide];
    toggle[index] = !toggle[index];
    setShowHide(toggle)
  }

  return (
    <StyledContainer>
      
      <h1>FRÅGOR OCH SVAR</h1>
      <ul>
      {data.map((data, index) => (
      <StyledFaq onClick={() => toggleIsOpen(index)} key={index}>
      <p>{data.question}</p>
      <Collapse isOpened={showHide[index]}><p>{data.answer}</p></Collapse>
      </StyledFaq>
 ))}
 </ul>
    </StyledContainer>
    

  );
};

export default Faq;