// Dependencis
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//Svg components
import LogoPizza from '../iconcomponents/LogoPizza';
import HamburgerIconOpen from '../iconcomponents/HamburgerIconOpen'
import HamburgerIconClosed from '../iconcomponents/HamburgerIconClosed'
// Function components
import useDocumentScrollThrottled from '../helpers/useDocumentScrollThrottled';

// Styled Components ---------------------------------------------------
const StyledHeader = styled.header`
  font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  top: 666;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 25px;
  height: 150px;
  background-color: #ffffff;;
  color: #333;
  transform: translateY(0);
  transition: transform 0.3s ease;
  border-bottom: 1px solid rgb(184, 184, 184);

  &.shadow {
  box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
  }

  &.hidden {
  transform: translateY(-110%);
  } 

  &.transparent {
  opacity: 1;
  }

  @media (max-width: 648px) {
    transition: all 0.1s ease;
    height: 100px;
    padding: 0px 10px;
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

// const StyledNav = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
// `;

const StyledLogoCentered = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 1rem;

  @media (max-width: 648px) {
  width: 50px;
  height: 50px;
  margin-bottom: 0rem;
  }
`;


const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
  transition: all 0.1s ease;
	font-weight: bold;
	color: green;
  }
  :hover {
    color: green;
    transition: all 0.1s ease;
  } 
`;

const StyledNavOptions = styled.ul`
  padding-left: 25px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 50px;
  list-style-type: none;
  
  @media (max-width: 648px) {
    display: flex;
    width: 100%;
    /* height: 350px; */
    position: absolute;
    top: 50px;
    left: 100%;
    opacity: 0;
    transition: all 0.2s ease;
    flex-direction: column;
    list-style-type: none;
    grid-gap: 0px;

    &.active {
      background: #ffffff;
      left: 0;
      opacity: 1;
      transition: all 0.2s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }
  }
  `;

const StyledListNavItem = styled.li`
  &.show-hide-when-mobile {
    display: none;
  }
  @media (max-width: 648px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vw;
    padding: 30px 0px;

    &.show-hide-when-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vw;
    padding: 30px 0px;
    }
  }
`;

const HamburgerIconsShowHide = styled.li`
  display: none;

  @media (max-width: 648px) {
    display: block;
  }
`;

const GhostItem = styled.div`
  display: none;

  @media (max-width: 648px) {
    display: block;
    opacity: 0
  }
`;



// Styled Components end ---------------------------------------------------


function HeaderTwoRows() {
  // Header states
	const [hideHeader, setHideHeader] = useState(false);
  const [showHeaderShadow, setshowHeaderShadow] = useState(false);
  const [tranparentHeader, setTranparentHeader] = useState(false);
  // Minimumscoll - Change header states if scrolling 80px up or down
  const MINIMUM_SCROLL = 80;
  // Timeoutdelay - Delay on changing header state
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    // 
    const isFromTop = currentScrollTop > 300;
    
    console.log(currentScrollTop)
    setshowHeaderShadow(currentScrollTop > 2);
    setTranparentHeader(currentScrollTop > 2);
    

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled && isFromTop) ;
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showHeaderShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';
  const transparentStyle = tranparentHeader ? 'transparent' : '';

  const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);
  const toggleHamburgerClick = () => setToggleHamburgerAndMenu(!toggleHamburgerAndMenu);
  const closeMobileMenuRouteClick = () => setToggleHamburgerAndMenu(false);

  return (
    <StyledHeader className={`${shadowStyle} ${hiddenStyle} ${transparentStyle}`}>
      
        <GhostItem/>
        <StyledLogoCentered>
          <LogoPizza color="green"
          />
        </StyledLogoCentered>

        <StyledNavOptions className={toggleHamburgerAndMenu ? "active" : ""}>
          <StyledListNavItem onClick={closeMobileMenuRouteClick}>
            <StyledLink
            to="/"
            activeClassName="active"
            end>
            OM OSS
            </StyledLink> 
          </StyledListNavItem>
          <StyledListNavItem onClick={closeMobileMenuRouteClick}>
            <StyledLink
            to="/menu"
            activeClassName="active">
            MENY
            </StyledLink>
          </StyledListNavItem>
          <StyledListNavItem onClick={closeMobileMenuRouteClick}>
            <StyledLink
            to="/battlemode"
            activeClassName="active">
            HITTA OSS
            </StyledLink>
          </StyledListNavItem>
          <StyledListNavItem onClick={closeMobileMenuRouteClick}>
            <StyledLink
            to="/faq"
            activeClassName="active">
            FAQ
          </StyledLink>
          </StyledListNavItem>
      </StyledNavOptions>
      
    

    <HamburgerIconsShowHide onClick={toggleHamburgerClick}>
      {toggleHamburgerAndMenu ? (
        <HamburgerIconClosed
        width="18px" height="18px" />) : (
        <HamburgerIconOpen
        width="18px" height="18px" />
      )}
    </HamburgerIconsShowHide>

  </StyledHeader>
  );
}


export default HeaderTwoRows;