import React from "react";
import styled from "styled-components";
import MapNav from './MapNav'

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  justify-content: center;
  align-content: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  
`;

const StyledContentSize = styled.div`
display: flex;
justify-content: center;
 width: 100%;
 max-width: 1024px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    max-width: unset;
  }
`;





const MapNavBig = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <MapNav width={"1024px"}/>
    </StyledContentSize>

  </StyledBlock>
);

export default MapNavBig;