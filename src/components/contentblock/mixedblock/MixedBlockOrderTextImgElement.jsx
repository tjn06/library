import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../../state';

import Pizza from '../../../assets/pizza.jpg';

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
  /* background: #eeeeee; */
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
  padding: 20px 20px 20px 10px;
    :nth-child(2) {
      justify-content: flex-start;
      padding: 20px 10px 20px 20px; 
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

const StyledButton = styled.button`
  position: absolute;
  left: 0;
  background-color: #176fb8;
  color: white;
  margin: 3px 3px 1px 3px;
  /* padding: 1px; */
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 0px transparent;
    border: 1px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    background-color: #03A9F4;
  }
  :active {
    outline: 0;
    /* border: 1px solid black; */
  }
  :focus {
    outline: 0;
}
`;


const MixedBlockTextImgElement = ({height, mediaQueryBreakPoint, backgOne, backgTwo}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgMixedBlockOrderTextImgElement');

  return (
    <div>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
    <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>

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
    </div>
  );
};

export default MixedBlockTextImgElement;