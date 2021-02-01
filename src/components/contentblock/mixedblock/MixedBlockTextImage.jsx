import React from "react";
import styled from "styled-components";

const image1 = "https://picsum.photos/800/600";

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  background: #d6d6d6;
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
  }
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* height: ${props => props.height}; */
  background: #ffffff;
  /* border: 1px solid black; */
  /* background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  /* justify-content: space-evenly; */
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
  :nth-child(2) {
    justify-content: flex-start;
}
  
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    padding: 5px;
    justify-content: center;
  }
`;

const StyledTextBlock = styled.div`
  /* display: flex; */
  background: #a18d8d;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  flex-basis: 600px;
  align-items: center;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;

const StyledImageBlock = styled.div`
  display: flex;
  background: #a18d8d;
  /* border: 1px solid black; */
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: 600px;
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
        <StyledTextBlock>
          <StyledHeaderText>Rubrik</StyledHeaderText>
          <StyledContentText>
          Text..Text.Text<br/>Text..Text..Text<br/>
          Text..Text.Text<br/>Text..Text..Text<br/></StyledContentText>
        </StyledTextBlock>
      </StyledContent>

  </StyledBlock>
);

export default ImageBlockTwoTextBlock;