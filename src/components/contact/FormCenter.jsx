import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../state';

import Form from './Form'


const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};
  /* background: #eeeeee; */
  justify-content: center;
  align-content: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    padding-top: unset;
    padding-bottom: unset;
    /* height: 500px; */
  }
`;

const StyledContentSize = styled.div`
  width: 100%;
  max-width: 1024px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    max-width: unset;
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


const FormCenter = ({height, mediaQueryBreakPoint, backgOne, backgTwo}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgFormCenter');

  return(
    <div>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
        <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
            <Form/>
        </StyledContentSize>
      </StyledBlock>
    </div>
  );
};

export default FormCenter;