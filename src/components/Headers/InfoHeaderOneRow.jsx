import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderArrowDown from './headercomponents/HeaderArrowDown';
import OpenHours from './headercomponents/OpenHours';
import useWindowWidth from '../helpers/useWindowWidth';



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
  padding: 0px 10px;
`;

const StyledInfoHeaderContentMaxWidth = styled.div`
  display: flex;
  font-size: 0.75em;
  line-height: 1;
  /* padding: 0px 10px; */
  justify-content: space-between;
  flex-basis: 1024px;
`;

const StyledNoSelect = styled.div`
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
  const fillArrowValue = rotateArrow ? 'white' : 'white';


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
        <div>Adress: Redbergsgatan 8</div>
        <div>TEL 0704837563</div>
        <StyledNoSelect onClick={() => toggleRotateArrowStyles()}>ÖPPETIDER <HeaderArrowDown
          transform={rotateArrowValue} fill={fillArrowValue}/>
         <OpenHours showHideOpenHours={showHideOpenHours}/>
        </StyledNoSelect>
        <div>ffdd</div>
      </StyledInfoHeaderContentMaxWidth>
    </StyledInfoHeader>
  );
}


export default InfoHeaderOneRow;
