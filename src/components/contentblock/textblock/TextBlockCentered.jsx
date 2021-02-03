import React from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
  align-items: center;
  display: flex;
  min-height: ${props => props.height};
  background: #f5f5f5;
  justify-content: center;
  color: black;
  text-align: center;
  padding: 20px 5px;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    min-height: unset;
  }
`;


const StyledContent = styled.div`
/* margin-top: 40px; */
flex-basis: 1024px;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-basis: unset;
  }
`;

const StyledContentBlockHeader = styled.div`
  font-weight: bold;
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
      <StyledContentBlockHeader>Rubrik</StyledContentBlockHeader><br/>
      <StyledContentBlock>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.</StyledContentBlock>
    </StyledContent>    
  </StyledBlock>
);

export default TextBlockCentered;