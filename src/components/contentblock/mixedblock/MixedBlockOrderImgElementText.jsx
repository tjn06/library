import React from "react";
import styled from "styled-components";

import Pizza from '../../../assets/pizza.jpg';

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
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
  padding: 20px 10px 20px 20px;
    :nth-child(2) {
      justify-content: flex-start;
      padding: 20px 20px 20px 10px; 
    }

    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      flex-basis: unset;
      padding: 5px;
      justify-content: center;
      text-align: center;
      :nth-child(2) {
        padding: 5px;
      }
    }
`;

const StyledPizzaImg = styled.img`
  width: 100%;
`;
StyledPizzaImg.defaultProps = {
  src: Pizza,
  alt: "Pizza"
};

// const StyledImageWrapper = styled.div`
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


const MixedBlockOrderTextImgElement = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>

      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <StyledPizzaImg />
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

export default MixedBlockOrderTextImgElement;