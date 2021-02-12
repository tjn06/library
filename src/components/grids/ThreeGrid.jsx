import React from 'react'
import { NavLink } from "react-router-dom";
import StopScroll from '../helpers/StopScroll';
import styled from "styled-components";
import EatIcon from '../iconcomponents/EatIcon';
import RewardIcon from '../iconcomponents/RewardIcon';
import OpenIcon from '../iconcomponents/OpenIcon';

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  background-color: #fcfcfc;
  justify-content: center;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledGrid = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 1024px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: 'Rokkitt', serif;
  background-color: #fcfcfc;
  /* background-color: #FEFBF8; */

  @media (max-width: 686px){
    flex-direction: column;
    align-items: center;
  }

`

const StyledContent = styled.div`
  /* background-color: #e9e9e9; */
  cursor: pointer;
  border-radius: 5px;
  width: 250px;
  height:150px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  /* box-shadow: 0px 0px 20px 0px rgba(37, 37, 37, 0.2); */

  :hover{
    transform: scale(1.1);
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



export default function ThreeGrid() {
  

  return (
    <StyledBlock>
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
    </StyledBlock>
  )
}
