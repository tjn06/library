import React from "react";
import styled from "styled-components";

import MapNav from './MapNav'
const image1 = "https://images.unsplash.com/photo-1501960660415-25474dd8caa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80";


const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  flex-direction: row;
  /* min-height: ${props => props.height}; */
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  align-content: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  

  @media (max-width: 512px) {
    flex-direction: column;
    padding-top: unset;
    padding-bottom: unset;
    /* height: 500px; */
  }
`;

const StyledContentSize = styled.div`
display: flex;
justify-content: center;
 width: 100%;
 max-width: 512px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    max-width: unset;
  }
`;

const StyledContentSizeImg = styled.div`

 width: 100%;
 max-width: 512px;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    max-width: unset;
    display: none;
  }
`;



const MapNavWithImage = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <MapNav  />
    </StyledContentSize>
    <StyledContentSizeImg height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        
    </StyledContentSizeImg>
  </StyledBlock>
);

export default MapNavWithImage;