import React from "react";
import styled from "styled-components";

const image1 = "https://picsum.photos/800/600";

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  background: #b81313;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* height: ${props => props.height}; */
  /* background: #b81313; */
  /* background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  justify-content: space-evenly;
  align-items: center;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
  }
`;

const StyledContentBlock = styled.div`
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;


const ImageBlockTwoTextBlock = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
      <StyledContentBlock>Innehåll</StyledContentBlock>
      <StyledContentBlock>Innehåll</StyledContentBlock>
    </StyledContent>    
  </StyledBlock>
);

export default ImageBlockTwoTextBlock;