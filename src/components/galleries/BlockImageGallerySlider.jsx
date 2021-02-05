import React from "react";
import styled from "styled-components";

import ImagesSlider from './ImagesSlider';


const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  background: #eeeeee;
  justify-content: center;
  color: black;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    
  }
`;

const StyledContent = styled.div`
  width: 1024px;
  color: black;
  padding: 20px 0px 20px 0px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const BlockImageGallerySlider = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <ImagesSlider/>
      </StyledContent>
  </StyledBlock>
);

export default BlockImageGallerySlider;