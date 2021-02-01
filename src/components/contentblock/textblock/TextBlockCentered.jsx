import React from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
  display: flex;
  height: ${props => props.height};
  background: #ffffff;
  justify-content: center;
  align-items: center;
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledContent = styled.div`

  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  
  }
`;

const StyledContentBlock = styled.div`
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;


const TextBlockCentered = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
      <StyledContentBlock>Rubrik</StyledContentBlock>
      <StyledContentBlock>Innehåll</StyledContentBlock>
    </StyledContent>    
  </StyledBlock>
);

export default TextBlockCentered;