import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderArrowDown from './headercomponents/HeaderArrowDown';
import OpenHours from './headercomponents/OpenHours';
import useWindowWidth from '../helpers/useWindowWidth';



const StyledInfoHeader = styled.div`
  /* font-family: 'Josefin Sans', sans-serif; */
  position: fixed;
  top: ${props => props.topPosition};
  left: 0;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  background-color: #ffffff;
  color: #414141;
  padding: 0px 10px;
  border-bottom: 1px solid #fafafa;
 
`;

const StyledInfoHeaderContentMaxWidth = styled.div`
  display: flex;
  /* font-size: 0.75em; */
  line-height: 1;
  /* padding: 0px 10px; */
  justify-content: flex-end;
  flex-basis: 1024px;
`;



const StyledPaddingRight = styled.div`
  padding-right: 30px;
    /* pointer-events: none; */
`;

const StyledNoSelect = styled.div`
    padding-right: 30px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    /* pointer-events: none; */
`;


const InfoHeaderOneRow = ({topPosition, height}) => {
  const windowWidth = useWindowWidth();
  const [showHideOpenHours, setShowHideshowHideOpenHours] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);

  useEffect(() => {
    if(windowWidth < 686) {
      setRotateArrow(false)
      setShowHideshowHideOpenHours(false)
    }
  }, [windowWidth])


  const rotateArrowValue = rotateArrow ? 'rotate(180)' : 'rotate(0)';
  const fillArrowValue = rotateArrow ? '#AFB880 ' : '#AFB880';


  function toggleRotateArrowStyles() {
    setRotateArrow(!rotateArrow)
    setShowHideshowHideOpenHours(!showHideOpenHours)
}

// If using mouseover and mouseleave
// function togglehRotateArrowStyles() {
//   setRotateArrow(true)
//   setShowHideshowHideOpenHours(true)
// }
// function togglehhRotateArrowStyles() {
//   setRotateArrow(false)
//   setShowHideshowHideOpenHours(false)
// }


  return (
    <StyledInfoHeader topPosition={topPosition} height={height}>
      <StyledInfoHeaderContentMaxWidth>
        <StyledPaddingRight>ADRESS: Redbergsgatan 8</StyledPaddingRight>
        <StyledPaddingRight>TEL 0704837563</StyledPaddingRight>
        <StyledNoSelect onClick={() => toggleRotateArrowStyles()}>ÖPPETTIDER <HeaderArrowDown
          transform={rotateArrowValue} fill={fillArrowValue}/>
         <OpenHours showHideOpenHours={showHideOpenHours}/>
        </StyledNoSelect>
        <div>ffdd</div>
      </StyledInfoHeaderContentMaxWidth>
    </StyledInfoHeader>
  );
}


export default InfoHeaderOneRow;
