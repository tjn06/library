import React, { useState, useEffect } from 'react';
import styled from "styled-components";
// Function components
import useDocumentScrollThrottled from '../useDocumentScrollThrottled';

const StyledInfoHeader = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  top: -20px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: #004d2d;
  color: #ffffff;
`;

const StyledInfoHeaderContentMaxWidth = styled.div`
  display: flex;
  font-size: 0.75em;
  /* line-height: 1; */
  padding: 0px 25px;
  justify-content: space-between;
  flex-basis: 799px;
`;



const InfoHeaderOneRow = ({personWithPlanet, isLoading, onChildClick, favouritesPar}) => {

  return (
    <StyledInfoHeader>
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
