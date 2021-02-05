import React from "react";
import styled from "styled-components";

import ImagesSlider from '../../galleries/ImagesSlider';

const image1 = "https://picsum.photos/800/600";

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  /* height: ${props => props.height}; */
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  color: black;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
    
  }
`;

const StyledContent = styled.div`
  /* border: 1px solid #e24343; */
  /* background: #ffffff; */
  /* height: ${props => props.height}; */
  display: flex;
  flex-basis: 512px;
  color: black;
  align-items: center;
  padding: 20px;

  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    /* flex-basis: 100%; */
    flex-basis: unset;
    padding: 5px;
    justify-content: center;
    text-align: center;
  }
`;

// const StyledSliderWrapper = styled.div`
//   border: 1px solid #5348f0;
//   flex-basis: 600px;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   justify-self: end;
//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//   }
// `;

const StyledTextBlock = styled.div`
  /* border: 1px solid #d501ff; */
  /* background: #ffffff; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    align-items: center;
  }
`;

const StyledHeaderText = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;

const StyledContentText = styled.div`
  color: #363636;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;


const ImageBlockTwoTextBlock = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>

      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <ImagesSlider/>
      </StyledContent>
      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <StyledTextBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledHeaderText>Rubrik</StyledHeaderText>
          <StyledContentText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </StyledContentText>
        </StyledTextBlock>
      </StyledContent>

  </StyledBlock>
);

export default ImageBlockTwoTextBlock;