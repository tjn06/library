import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const StyledInfoHeader = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  top: ${props => props.topPosition};
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  background-color: #004d2d;
  color: #ffffff;
`;

const StyledInfoHeaderContentMaxWidth = styled.div`
  display: flex;
  font-size: 0.75em;
  /* line-height: 1; */
  /* padding: 0px 25px; */
  justify-content: space-between;
  flex-basis: 1080px;
`;



const InfoHeaderOneRow = ({topPosition, height}) => {

  return (
    <StyledInfoHeader topPosition={topPosition} height={height}>
      <StyledInfoHeaderContentMaxWidth>
        <div>Adress: Redbergsgatan 8</div>
        <div>TEL 0704837563</div>
        <div>ÖPPETIDER VARDAGAR 11-20</div>
        <div>ffdd</div>
      </StyledInfoHeaderContentMaxWidth>
    </StyledInfoHeader>
  );
}


export default InfoHeaderOneRow;
