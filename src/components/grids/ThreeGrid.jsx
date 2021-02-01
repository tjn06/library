import React from 'react'
import { NavLink } from "react-router-dom";
import StopScroll from '../helpers/StopScroll';
import styled from "styled-components";
import EatIcon from '../iconcomponents/EatIcon';
import RewardIcon from '../iconcomponents/RewardIcon';
import OpenIcon from '../iconcomponents/OpenIcon';


const StyledGrid = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  margin-top: 10px;
  font-family: 'Rokkitt', serif;

  @media (max-width: 686px){
    flex-direction: column;
    align-items: center;
  }

`

const StyledContent = styled.div`
  background-color: #e9e9e9;
  cursor: pointer;
  border-radius: 5px;
  width: 250px;
  height:150px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(37, 37, 37, 0.2);

  :hover{
    transform: scale(1.1);
  }
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`

export default function ThreeGrid() {
  




  return (
    <StyledGrid>
      <StyledLink to="/find-us" onClick={StopScroll}>
        <StyledContent >
         <div><EatIcon color="green"/></div>
         <h3>Äta här</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</p>
        </StyledContent>
      </StyledLink>

    <StyledLink to="/faq" onClick={StopScroll}>
      <StyledContent>
        <div><OpenIcon color="green" /></div>
        <h3>Öppetider</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</p>
      </StyledContent>
    </StyledLink>

    <StyledLink to="/menu" onClick={StopScroll}>
      <StyledContent>
        <div><RewardIcon color="green" /></div>
        <h3>Prisbelönt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, rem?</p>
      </StyledContent>
   </StyledLink>
    </StyledGrid>
  )
}
