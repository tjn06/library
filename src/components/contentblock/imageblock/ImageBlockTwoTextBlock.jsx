import React from "react";
import styled from "styled-components";
import { useGlobalState } from '../../state';

const image1 = "https://images.unsplash.com/photo-1513791053024-3b50799fdd7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80";
const image2 = "https://images.unsplash.com/photo-1532210317995-cc56d90177d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* background: #b81313; */
  background-image: url(${props => props.backgAlt ? props.image1 : props.image2});
  /* background-image: url(${image1}); */
  background-repeat: no-repeat;
  background-size: cover;
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    height: unset;
    
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
    height: unset;
    
  }
`;

const StyledContentBlock = styled.div`
display: flex;
justify-content: center;
  background-color: rgba(228, 228, 228, 0.7);;
  padding: 80px;
  border-radius: 50%;
  /* border: 2px solid #525252; */
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-basis: 20px;
  }
`;

const StyledMobileMargin = styled.div`
  padding:10px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;

const StyledButton = styled.button`
  position: absolute;
  z-index: 1;
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


const ImageBlockTwoTextBlock = ({height, mediaQueryBreakPoint}, props) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgImageBlockTwoTextBlock');

  return(
    <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} backgAlt={backgAlt} image1={image1} image2={image2}>
      {edit ? (
        <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
        ) : (
          null
        )
      }
      <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <StyledMobileMargin><StyledContentBlock>Nytt</StyledContentBlock></StyledMobileMargin>
        <StyledMobileMargin><StyledContentBlock>Text</StyledContentBlock></StyledMobileMargin>
      </StyledContent>    
    </StyledBlock>
  );
};

export default ImageBlockTwoTextBlock;