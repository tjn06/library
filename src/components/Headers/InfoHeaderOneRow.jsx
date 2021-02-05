import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderArrowDown from './headercomponents/HeaderArrowDown';
import MapNav from '../map/MapNav';
import OpenHours from './headercomponents/OpenHours';
import useWindowWidth from '../helpers/useWindowWidth';
import useScrollPositionY from '../helpers/useScrollPositionY';



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
  border-bottom: 1px solid #f5f5f5;
 
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
    /* padding-right: 30px; */
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
  const scrollPositionY = useScrollPositionY();

  const [showHideMap, setShowHideMap] = useState(false);
  const [rotateArrowMap, setRotateArrowMap] = useState(false);

  const [showHideOpenHours, setShowHideshowHideOpenHours] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);



  useEffect(() => {
    if(windowWidth < 686) {
      setRotateArrow(false)
      setShowHideshowHideOpenHours(false)

      setRotateArrowMap(false)
      setShowHideMap(false)
    }
  }, [windowWidth])
  const rotateArrowValue = rotateArrow ? 'rotate(180)' : 'rotate(0)';
  const fillArrowValue = rotateArrow ? '#AFB880 ' : '#AFB880';



  useEffect(() => {
    if(scrollPositionY < 20) {
      setRotateArrow(false)
      setShowHideshowHideOpenHours(false)
      
      setRotateArrowMap(false)
      setShowHideMap(false)

    }
  }, [scrollPositionY])
  const rotateArrowMapValue = rotateArrowMap ? 'rotate(180)' : 'rotate(0)';
  const fillArrowMapValue = rotateArrowMap ? '#AFB880 ' : '#AFB880';





  function toggleRotateArrowStyles() {
    setRotateArrow(!rotateArrow)
    setShowHideshowHideOpenHours(!showHideOpenHours)
  }

  function toggleRotateArrowMapStyles() {
    setRotateArrowMap(!rotateArrowMap)
    setShowHideMap(!showHideMap)
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

        <StyledPaddingRight>
          <StyledNoSelect onClick={() => toggleRotateArrowMapStyles()}>ADRESS: Redbergsvägem 8 <HeaderArrowDown
            transform={rotateArrowMapValue} fill={fillArrowMapValue}/>
          </StyledNoSelect>
          {showHideMap ? (
            <MapNav position={'fixed'} topPosition={'0px'} width={'400px'} height={'400px'} radius={'10px'}
            border={"1px solid #888888"} shadow={"-3px 3px 10px -2px rgba(0, 0, 0, 0.253)"}/>
            ) : (
            null
          )}
        </StyledPaddingRight>

        <StyledPaddingRight>
        <StyledNoSelect>
          TEL 0704837563
          </StyledNoSelect>
        </StyledPaddingRight>

        <StyledPaddingRight>
          <StyledNoSelect onClick={() => toggleRotateArrowStyles()}>ÖPPETTIDER <HeaderArrowDown
            transform={rotateArrowValue} fill={fillArrowValue}/>
            {showHideOpenHours ? (
              <OpenHours />
              ) : (
              null
            )}
          </StyledNoSelect>
        </StyledPaddingRight>

        <StyledNoSelect>
          ÖVRIGT
        </StyledNoSelect>
        
      </StyledInfoHeaderContentMaxWidth>
    </StyledInfoHeader>
  );
}


export default InfoHeaderOneRow;
