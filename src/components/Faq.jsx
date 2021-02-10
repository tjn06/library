import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";
import ArrowDownIcon from './iconcomponents/ArrowDownIcon';
import ArrowUpIcon from './iconcomponents/ArrowUpIcon';

const StyledBlock = styled.div`
  font-family: 'Rokkitt', serif;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  padding: 50px;

  @media (max-width: 686px){
    padding: 5px;
  }
`

const StyledContainer = styled.div`
  margin: 20px;
  padding: 20px;
  max-width: 500px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  
`

const StyledFaq = styled.div` 
  border-bottom: 1px solid #9c9a9a;
  cursor: pointer;
  font-style: oblique;
  margin: 20px;  
`


const StyledArrow = styled.div`
  
  

`
const StyledQuestion = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`
const Question = styled.p`
  font-size: medium;
  font-weight: 400;
`
const Answer = styled.p`
  font-size: small;
  margin-right: 40px;

`
const StyledHeader = styled.h1`
  text-align: center;
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

  const toggleIsOpen = (index) =>{
    let toggle = [...showHide];
    toggle[index] = !toggle[index];
    setShowHide(toggle)
  }

  return (
    <StyledBlock>
      <StyledContainer>
        <StyledHeader>FRÅGOR OCH SVAR</StyledHeader>
        <ul>
        {data.map((data, index) => (
        <StyledFaq onClick={() => toggleIsOpen(index)} key={index}>
          <StyledQuestion>
            <StyledArrow> { showHide[index] ? <ArrowUpIcon fill="grey"/> : <ArrowDownIcon fill="grey"/> } </StyledArrow>
              <Question>{data.question}</Question>
          </StyledQuestion>
        <Collapse isOpened={showHide[index]}><Answer>{data.answer}</Answer></Collapse>
        </StyledFaq>
  ))}
  </ul>
      </StyledContainer>
    </StyledBlock>
      

  );
};

export default Faq;