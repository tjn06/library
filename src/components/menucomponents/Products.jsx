import React, { useState} from "react";
import { useGlobalState } from '../state';
// import standard from '../assets/standard.svg';
// import family from '../assets/family.svg';
// import { Routes, Route } from "react-router-dom";

import MenuPizza from './MenuPizza';
import MenuKebab from './MenuKebab';
import MenuSallad from './MenuSallad';
import MenuDryck from './MenuDryck';
import MenuOvrigt from './MenuOvrigt';

import styled from "styled-components";

const StyledTextCenter= styled.div` 
  text-align: center;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};
`;

const StyledHeaderText= styled.div` 
    font-size: 3em;
  text-transform: uppercase;
  color: #353535;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  word-spacing: 2px;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    font-size: 2.5em;
  }
`;

const StyledWrapperCentering = styled.div` 
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledContentWidth = styled.div` 
  display: flex;
  flex-direction: column;
  width: 1024px; 
  /* flex-basis: 1080px; */
  /* margin: 0 auto; */
  justify-content: center;
`;

const StyledCenter = styled.div` 
display: flex;
justify-content: space-between;
padding-bottom: 10px;
`;

const StyledNavMenuItem= styled.p` 
cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
&.selected {
  color: var(--color-pink);
}
&:hover {
  color: var(--color-green);
  transition: all 0.1s ease;
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


const Products = ({backgOne, backgTwo}) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgProducts');

  const PIZZA = 'pizza', KEBAB = 'kebab', SALLAD = 'sallad', DRYCK = 'dryck', OVRIGT = 'ovrigt';

  const [currentScreen, setCurrentScreen] = useState(PIZZA);
  const [activeClass, setActiveClass] = useState(PIZZA);
  
  const pizzaScreen = () => { 
    setCurrentScreen(PIZZA)
    setActiveClass(PIZZA)
  }
  const kebabScreen = () => { 
    setCurrentScreen(KEBAB)
    setActiveClass(KEBAB)
  }
  const salladScreen = () => { 
    setCurrentScreen(SALLAD)
    setActiveClass(SALLAD)
  }
  const dryckScreen = () => { 
    setCurrentScreen(DRYCK)
    setActiveClass(DRYCK)
  }
  const ovrigtScreen = () => {
    setCurrentScreen(OVRIGT)
    setActiveClass(OVRIGT)
  }

  let content = null;
  switch (currentScreen) {
      case PIZZA:
        content = ( <MenuPizza /> )
          break;
      case KEBAB:
        content = ( <MenuKebab /> )
          break;
      case SALLAD:
        content = ( <MenuSallad /> )
          break;
      case DRYCK:
        content = ( <MenuDryck /> )
          break;
      case OVRIGT:
        content = ( <MenuOvrigt /> )
            break;
      default:
        content = ( <MenuPizza /> )
  }
  


  return (
    <StyledTextCenter backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <StyledHeaderText>MENY</StyledHeaderText>
      <StyledWrapperCentering>
        <StyledContentWidth>
          <StyledCenter> 
          <StyledNavMenuItem onClick={pizzaScreen} className={activeClass === PIZZA  ? 'selected' : ''}> PIZZA </StyledNavMenuItem>
          <StyledNavMenuItem > | </StyledNavMenuItem>
          <StyledNavMenuItem onClick={kebabScreen} className={activeClass === KEBAB  ? 'selected' : ''}> KEBAB/FALAFEL </StyledNavMenuItem>
          <StyledNavMenuItem > | </StyledNavMenuItem>
          <StyledNavMenuItem onClick={salladScreen} className={activeClass === SALLAD  ? 'selected' : ''}> SALLAD </StyledNavMenuItem>
          <StyledNavMenuItem > | </StyledNavMenuItem>
          <StyledNavMenuItem onClick={dryckScreen} className={activeClass === DRYCK  ? 'selected' : ''}> DRYCK </StyledNavMenuItem>
          <StyledNavMenuItem > | </StyledNavMenuItem>
          <StyledNavMenuItem onClick={ovrigtScreen} className={activeClass === OVRIGT  ? 'selected' : ''}> ÖVRIGT </StyledNavMenuItem>
          </StyledCenter>
          {content}
        </StyledContentWidth>
      </StyledWrapperCentering>
    </StyledTextCenter>
  );
};



export default Products;