import React from "react";
import styled from "styled-components";

const image1 = "https://picsum.photos/800/600";

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  height: ${props => props.height};
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  color: black;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
    height: 500px;
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
  justify-content: flex-end;
  :nth-child(2) {
    justify-content: flex-start;
}
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-basis: none;
    padding: 5px;
    justify-content: center;
  }
`;

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

const StyledImageBlock = styled.div`
  /* border: 1px solid #5348f0; */
  /* flex-basis: 600px; */
  /* background: #a18d8d; */
  display: flex;
  width: 100%;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  justify-self: end;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
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
        <StyledImageBlock>Backgroundimage</StyledImageBlock>
      </StyledContent>
      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <StyledTextBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledHeaderText>Rubrik</StyledHeaderText>
          <StyledContentText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.
          </StyledContentText>
        </StyledTextBlock>
      </StyledContent>

  </StyledBlock>
);

export default ImageBlockTwoTextBlock;