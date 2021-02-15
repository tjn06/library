import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../state';


import ImagesSlider from './ImagesSlider';


const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
  /* background: #eeeeee; */
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

const BlockImageGallerySlider = ({height, mediaQueryBreakPoint, backgOne, backgTwo}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgBlockImageGallerySlider');

  return(
    <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <ImagesSlider/>
        </StyledContent>
    </StyledBlock>
  );
};

export default BlockImageGallerySlider;