import React from 'react'
import { NavLink } from "react-router-dom";
import StopScroll from '../helpers/StopScroll';
import styled from "styled-components";
import EatIcon from '../iconcomponents/EatIcon';
import RewardIcon from '../iconcomponents/RewardIcon';
import OpenIcon from '../iconcomponents/OpenIcon';
import { useGlobalState } from '../state';

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
  /* background-color: #fcfcfc; */
  justify-content: center;
  align-content: center;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledGrid = styled.div`
  display : flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 1024px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: 'Rokkitt', serif;
  margin: 40px;
  @media (max-width: 800px){
    margin: 10px;
    flex-basis: unset;
    justify-content: unset;
    flex-direction: column;
    align-items: center;
    width: 100%;
    grid-gap: 20px;
  }

`

const StyledContent = styled.div`
  /* background-color: #e9e9e9; */
  border: 1px solid  #e0e0e0;
  cursor: pointer;
  border-radius: 5px;
  width: 250px;
  height:150px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  
  /* box-shadow: 0px 0px 20px 0px rgba(37, 37, 37, 0.2); */

  :hover{
    transform: scale(1.1);
  }

  @media (max-width: 800px){
    width: 100%;
  }
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`

const StyledHeaderText = styled.h3`
  text-decoration: none;
  color: #353535;;
`

const StyledText = styled.p`
  text-decoration: none;
  color: #707070;
`

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


export default function ThreeGridWithBorder({backgOne, backgTwo}) {

  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgThreeGridWithBorder');
  
  return (
    <StyledBlock backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      <StyledGrid>
        <StyledLink to="/find-us" onClick={StopScroll}>
          <StyledContent >
            <div><EatIcon color="#C2B998"/></div>
            <StyledHeaderText>Äta här</StyledHeaderText>
            <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</StyledText>
          </StyledContent>
        </StyledLink>

        <StyledLink to="/faq" onClick={StopScroll}>
          <StyledContent>
            <div><OpenIcon color="#C2B998" /></div>
            <StyledHeaderText>Öppetider</StyledHeaderText>
            <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</StyledText>
          </StyledContent>
        </StyledLink>

        <StyledLink to="/menu" onClick={StopScroll}>
          <StyledContent>
            <div><RewardIcon color="#C2B998" /></div>
            <StyledHeaderText>Prisbelönt</StyledHeaderText>
            <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</StyledText>
          </StyledContent>
        </StyledLink>
      </StyledGrid>

      {edit ? (
        <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
        ) : (
          null
        )
      }
    
    </StyledBlock>
  )
}
