import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderArrowDown from './headercomponents/HeaderArrowDown';
import MapNav from '../map/MapNav';
import OpenHours from './headercomponents/OpenHours';
import useWindowWidth from '../helpers/useWindowWidth';
import useScrollPositionY from '../helpers/useScrollPositionY';

import OpenHoursIcon from '../../assets/infoheader/OpenHoursIcon';
import {ReactComponent as MapIcon} from '../../assets/infoheader/MapIcon.svg';
import {ReactComponent as PhoneIcon} from '../../assets/infoheader/PhoneIcon.svg';



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
  /* height: 50px; */
  background-color: #ffffff;
  color: #414141;
  padding: 0px 10px;
  border-bottom: 1px solid #f5f5f5;
 
`;

const StyledInfoHeaderContentMaxWidth = styled.div`
  display: flex;
  /* font-size: 0.75em; */
  /* line-height: 0; */
  /* padding: 0px 10px; */
  justify-content: flex-end;
  flex-basis: 1024px;
  @media only screen and (max-width: 686px) {
    display:none;
  }
`;



const StyledPadding = styled.div`
  padding-right: 42px;
  :nth-child(3) {
    padding-right: 24px;
  }
  :last-child {
    padding-right: 0px;
  }
  /* padding-right: 30px; */
  
    /* pointer-events: none; */
`;

const StyledNoSelect = styled.div`
    /* padding-right: 30px; */
    /* text-align: center; */
    /* background-color: lime; */
    a[href^="tel"] {
    color: inherit;
    text-decoration: none;
    }

    
    display: grid-row;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    /* pointer-events: none; */
`;

const StyledNoSelectTel = styled.div`

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    /* pointer-events: none; */
`;

const StyledTel = styled.div`
    /* padding-right: 30px; */
    /* text-align: center; */
    /* background-color: lime; */
    a[href^="tel"] {
    color: inherit;
    text-decoration: none;
    }

    
    display: grid-row;
 
    /* cursor: pointer; */
    /* pointer-events: none; */
`;


// a[href^="tel"] {
//   color: inherit; 
//   text-decoration: none; 
// }

const StyledPosition = styled.div`
position: absolute;
/* z-index: 999; */
margin-left:-15px;
margin-top: -1px;
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

        <StyledPadding>
          <StyledNoSelect onClick={() => toggleRotateArrowMapStyles()}><StyledPosition><MapIcon /></StyledPosition>ADRESS: Redbergsvägem 8 <HeaderArrowDown
            transform={rotateArrowMapValue} fill={fillArrowMapValue}/>
          </StyledNoSelect>
          {showHideMap ? (
            <MapNav position={'fixed'} topPosition={'0px'} width={'400px'} height={'400px'} radius={'10px'}
            border={"1px solid #888888"} shadow={"-3px 3px 10px -2px rgba(0, 0, 0, 0.253)"}/>
            ) : (
            null
          )}
        </StyledPadding>

        <StyledPadding>
        <StyledTel> <StyledPosition><a href="tel:+496170961709"><PhoneIcon /></a></StyledPosition>
          TEL: 0704837563 
          </StyledTel>
        </StyledPadding>
        

        <StyledPadding>
          <StyledNoSelect onClick={() => toggleRotateArrowStyles()}><StyledPosition><OpenHoursIcon width="12" height="12"/></StyledPosition>ÖPPETTIDER <HeaderArrowDown
            transform={rotateArrowValue} fill={fillArrowValue}/>
            {showHideOpenHours ? (
              <OpenHours />
              ) : (
              null
            )}
          </StyledNoSelect>
        </StyledPadding>

        {/* <StyledPadding>     
        <StyledNoSelect>
          ÖVRIGT red <HeaderArrowDown
            transform={rotateArrowMapValue} fill={fillArrowMapValue}/>
        </StyledNoSelect>
        </StyledPadding> */}
        
      </StyledInfoHeaderContentMaxWidth>
    </StyledInfoHeader>
  );
}


export default InfoHeaderOneRow;
