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

// Header on top
import InfoHeaderOneRow from './InfoHeaderOneRow'
import InfoHeaderTwoRow from './InfoHeaderTwoRow'

// InfoHeaderOneRow - Global values used for scolling behavior and witdth on InfoHeaderOneRow
const placementOrHeightValue = "20px";
const placementOrTranslateY = "-20px";
const translateYHeader = "-142"
// InfoHeaderOneRow end ---------------------------------------------------------------------

// InfoHeaderTwoRow - Global values used for scolling behavior and witdth on InfoHeaderOneRow
// const placementOrHeightValue = "40px";
// const placementOrTranslateY = "-40px";
// const translateYHeader = "-180"
// InfoHeaderTwoRow end ---------------------------------------------------------------------


const mediaQ = "686px"; // To all mediaquerys in styled components in this component
const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required





// Styled Components ---------------------------------------------------
const StyledHeader = styled.header`
  font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  top: ${placementOrHeightValue};
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 25px;
  height: 76px;
  background-color: #ffffff;;
  color: #333;
  transform: translateY(0);
  transition: transform 0.3s ease;
  /* border-bottom: 1px solid rgb(184, 184, 184); */
  z-index: 1; //Needed if using paralax
  

  &.shadow {
  box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
  }
  &.hidden-info-header {
  transform: translateY(${placementOrTranslateY});
  }  
  &.hidden {
  transform: translateY(${translateYHeader}%);
  }
  &.transparent {
  opacity: 1;
  }

  @media (max-width: ${mediaQ}) {
    transition: all 0.1s ease;
    height: 50px;
    padding: 0px 10px;
    transform: translateY(${placementOrTranslateY});

    /* &.shadow {
    box-shadow: none;
  } */
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;


const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-top: 2px;

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
  
  @media (max-width: ${mediaQ}) {
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
  @media (max-width: ${mediaQ}) {
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

const StyledUlFaqDesktop = styled.ul`
  display: flex;
  padding: 0px 5px;
  list-style-type: none;
  

  @media (max-width: ${mediaQ}) {
    display: none;
  }
`;

const StyledListFaqItem = styled.li`
  padding-right: 50px;
  align-self: center;
  text-align: right;
  
@media (max-width: ${mediaQ}) {
  display: none;
}
`;


const HamburgerIconsShowHide = styled.span`
  display: none;

  @media (max-width: ${mediaQ}) {
    display: flex;
    cursor: pointer;
  }
`;

// Styled Components end ---------------------------------------------------


function Header() {
  // Header states
  const [hideHeader, setHideHeader] = useState(false);
  const [hideInfoHeader, setHideInfoHeader] = useState(false);
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
    setHideInfoHeader(currentScrollTop > 2);
    

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled && isFromTop) ;
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showHeaderShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';
  const hiddenInfoStyle = hideInfoHeader ? 'hidden-info-header' : '';
  const transparentStyle = tranparentHeader ? 'transparent' : '';


  const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);
  const toggleHamburgerClick = () => setToggleHamburgerAndMenu(!toggleHamburgerAndMenu);

  const closeMobileMenuRouteClick = () => {
    setToggleHamburgerAndMenu(false)

    if(window.innerWidth < mediaQNumber) {
      window.scrollTo(0,0);
    } else {
      window.scrollTo(0,10);
    }

  }
  
  return (
    <StyledHeader className={`${shadowStyle} ${hiddenStyle} ${hiddenInfoStyle} ${transparentStyle}`}>

      <InfoHeaderOneRow topPosition={placementOrTranslateY} height={placementOrHeightValue}/>
      
      <StyledNav>

        
        <LogoPizza color="green" 
          width="70px" mobileWidth="35px"
          height="70px" mobileHeight="35px"
          marginRight="20px"
          mediaQueryBreakPoint={mediaQ}
        />
      
        <StyledNavOptions className={toggleHamburgerAndMenu ? "active" : ""}>
          <StyledListNavItem onClick={closeMobileMenuRouteClick}>
            <StyledLink className="no-class-help-centering"
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
          <StyledListNavItem className="show-hide-when-mobile" onClick={closeMobileMenuRouteClick}>
            <StyledLink
            to="/faq"
            activeClassName="active">
            FAQ
          </StyledLink>
          </StyledListNavItem>
      </StyledNavOptions>
    </StyledNav>

    <HamburgerIconsShowHide onClick={toggleHamburgerClick}>
      {toggleHamburgerAndMenu ? (
        <HamburgerIconClosed
        width="18px" height="18px" />) : (
        <HamburgerIconOpen
        width="18px" height="18px" />
      )}
    </HamburgerIconsShowHide>


    <StyledUlFaqDesktop>
      <StyledListFaqItem onClick={closeMobileMenuRouteClick}>
        <StyledLink
        to="/faq"
        activeClassName="active">
        FAQ
        </StyledLink>
      </StyledListFaqItem>
    </StyledUlFaqDesktop>

  </StyledHeader>
  );
}


export default Header;