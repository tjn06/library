import React, { useState} from "react";
// import standard from '../assets/standard.svg';
// import family from '../assets/family.svg';
// import { Routes, Route } from "react-router-dom";

import MenuPizza from './menucomponents/MenuPizza';
import MenuKebab from './menucomponents/MenuKebab';
import MenuSallad from './menucomponents/MenuSallad';
import MenuDryck from './menucomponents/MenuDryck';
import MenuOvrigt from './menucomponents/MenuOvrigt';

import styled from "styled-components";

const StyledWrapperCentering = styled.div` 
  display: flex;
  justify-content: center;
`;

const StyledContentWidth = styled.div` 
  display: flex;
  flex-direction: column;
  width: 900px; 
  /* flex-basis: 1080px; */
  /* margin: 0 auto; */
  justify-content: center;
`;

const StyledCenter = styled.div` 
display: flex;
justify-content: space-evenly;
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
  color: green;
}
&:hover {
  color: green;
  transition: all 0.1s ease;
}
`;

const Menu = () => {
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
    
  );
};



export default Menu;