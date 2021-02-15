import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../../state';

const StyledBlock = styled.div`
  align-items: center;
  display: flex;
  min-height: ${props => props.height};
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
  /* background: #f5f5f5; */
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

const TextBlockCentered = ({height, mediaQueryBreakPoint, backgOne, backgTwo}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgTextBlockCentered');

  return(
    <div>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledContentBlockHeader>Rubrik</StyledContentBlockHeader><br/>
          <StyledContentBlock>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.</StyledContentBlock>
        </StyledContent>
      </StyledBlock>
    </div>
  );
};

export default TextBlockCentered;