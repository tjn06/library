import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../../state';

const image1 = "https://picsum.photos/800/600";

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};
  /* background: #eeeeee; */
  min-height: ${props => props.height};
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  color: black;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column-reverse;
    /* height: 500px; */
  }
`;

const StyledContent = styled.div`
  /* border: 1px solid #e24343; */
  /* background: #ffffff; */
  /* height: ${props => props.height}; */
  /* height: 500px; */
  display: flex;
  flex-basis: 512px;
  color: black;
  align-items: center;
  padding: 20px 10px 20px 20px;
  justify-content: flex-end;
  :nth-child(2) {
  height: 300px;
  justify-content: flex-start;
  /* padding: 0px; */
  }
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    /* flex-basis: none; */
    padding: 5px;
    justify-content: center;
    flex-basis: unset;

    :nth-child(2) {
      /* flex-basis: none; */
    padding: 5px;
    justify-content: center;
    flex-basis: unset;
  }
  }
`;

const StyledTextBlock = styled.div`
  /* border: 1px solid #d501ff; */
  /* background: #ffffff; */
  /* height: 100%;
  width: 100%; */
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


const MixedBlockOrderTextImage = ({height, mediaQueryBreakPoint, backgOne, backgTwo}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgMixedBlockOrderTextImage');

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
            <StyledTextBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
              <StyledHeaderText>RubrikTextImage</StyledHeaderText>
              <StyledContentText>
              Lorem Ipsum is simply dummyggg text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </StyledContentText>
            </StyledTextBlock>
          </StyledContent>

          <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
            <StyledImageBlock>Backgroundimage</StyledImageBlock>
          </StyledContent>

      </StyledBlock>
    </div>
  );
};

export default MixedBlockOrderTextImage;