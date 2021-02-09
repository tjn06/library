// Dependencis
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import OpenHoursIcon from '../../assets/infoheader/OpenHoursIcon';
import PhoneIcon from '../../assets/infoheader/PhoneIcon';

import OpenHours from './headercomponents/OpenHours';
// import {ReactComponent as MapIcon} from '../../assets/infoheader/MapIcon.svg';
// import {ReactComponent as PhoneIcon} from '../../assets/infoheader/PhoneIcon.svg';
//Svg components
import LogoPizza from '../iconcomponents/LogoPizza';
import HamburgerIconOpen from '../iconcomponents/HamburgerIconOpen'
import HamburgerIconClosed from '../iconcomponents/HamburgerIconClosed'
// Function components
import useDocumentScrollThrottled from '../helpers/useDocumentScrollThrottled';

// Header on top
import InfoHeaderOneRow from './InfoHeaderOneRow'
// import InfoHeaderTwoRow from './InfoHeaderTwoRow'

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
  /* justify-content: space-between; */
  justify-content: center;
  width: 100%;
  padding: 0px 10px;
  height: 76px;
  background-color: #ffffff;
  color: #353535;;
  transform: translateY(0);
  transition: transform 0.3s ease;
  font-size: 0.8em;
  /* border-bottom: 1px solid rgb(255, 255, 255); */
  z-index: 10; //Needed if using paralax
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.13);
  

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

const StyledMaxWidthContent = styled.div`
  display: flex;
  flex-basis: 1024px;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  /* padding: 0px 25px; */
  /* background-color: grey; */
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;


  justify-content: space-evenly;
`;


const StyledLink = styled(NavLink)`
  color: #858585;
  text-decoration: none;

  &.active {
  transition: all 0.1s ease;
	font-weight: bold;
  /* color: #070707; */
  text-decoration: none;
  }
  :hover {
    color: #070707;
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
    height: calc(100vh);
    /* height: 350px; */
    position: absolute;
    top: 49px;
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
  /* padding: 0px 5px; */
  list-style-type: none;
  

  @media (max-width: ${mediaQ}) {
    display: none;
  }
`;

const StyledListFaqItem = styled.li`
  /* padding-right: 50px; */
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

const StyledIconsMobile = styled.div`
  display: none;
  /* padding-top: 2px; */
  margin-left: 45%;
  font-size: 0.8em;
  /* font-weight: bold; */

  @media (max-width: ${mediaQ}) {
    display: flex;
    /* cursor: pointer; */

  }
`;

const StyledBorderSidesFirst = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 1px;
border-color: #666666;
border-style: solid;
`;
const StyledBorderSidesSecond = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 0px;
border-color: #666666;
border-style: solid;
`;

const StyledOpenHoursIcon = styled(OpenHoursIcon)`
cursor: pointer;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
cursor: pointer;
`;



// Styled Components end ---------------------------------------------------


function Header() {
  // Header states
  const [hideHeader, setHideHeader] = useState(false);
  const [showHeaderOpenMenu, setShowHeaderOpenMenu] = useState(false);
  const [hideInfoHeader, setHideInfoHeader] = useState(false);
  const [showHeaderShadow, setshowHeaderShadow] = useState(false);
  const [tranparentHeader, setTranparentHeader] = useState(false);


  const [showHideOpenHours, setShowHideshowHideOpenHours] = useState(false);

  

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
    
    
    setshowHeaderShadow(currentScrollTop > 2);
    setTranparentHeader(currentScrollTop > 2);
    setHideInfoHeader(currentScrollTop > 2);

    if (isFromTop) {
      setShowHideshowHideOpenHours(false)
    }
    

    setTimeout(() => {
      if(showHeaderOpenMenu) {
        setHideHeader(false) ;
      } else {
        setHideHeader(isScrolledDown && isMinimumScrolled && isFromTop) ;
      }
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showHeaderShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';
  const hiddenInfoStyle = hideInfoHeader ? 'hidden-info-header' : '';
  const transparentStyle = tranparentHeader ? 'transparent' : '';


  const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);

  const toggleHamburgerClick = () => {
    setToggleHamburgerAndMenu(!toggleHamburgerAndMenu);
    setShowHeaderOpenMenu(!showHeaderOpenMenu)
  }

  const closeMobileMenuRouteClick = () => {
    setToggleHamburgerAndMenu(false)
    if(window.innerWidth < mediaQNumber) {
      window.scrollTo(0,0);
    } else {
      window.scrollTo(0,10);
    }
  }

  function closeThisOpenHours (falseFromChild) {
    setShowHideshowHideOpenHours(falseFromChild)
  }


  
  return (
    <StyledHeader className={`${shadowStyle} ${hiddenStyle} ${hiddenInfoStyle} ${transparentStyle}`}>


      <InfoHeaderOneRow topPosition={placementOrTranslateY} height={placementOrHeightValue}/>


      <StyledMaxWidthContent>
        <StyledNav>
          <LogoPizza color="#412e2e" 
            width="70px" mobileWidth="35px"
            height="70px" mobileHeight="35px"
            marginRight="20px"
            mediaQueryBreakPoint={mediaQ}
          />
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
              to="/find-us"
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

       
        <StyledIconsMobile>
          <StyledBorderSidesFirst >
            <StyledOpenHoursIcon onClick={() => setShowHideshowHideOpenHours(!showHideOpenHours)} width="20" height="20"/>
            {/* <StyledClose /> */}
            {showHideOpenHours ? (
              <OpenHours closeOpenHoursChild={closeThisOpenHours} topPosition="51px" marginLeft="-93px" />
              ) : (
              null
            )}
          </StyledBorderSidesFirst>

          <a href="tel:+496170961709">
            <StyledBorderSidesSecond>
              <StyledPhoneIcon width="20" height="20"/>
            </StyledBorderSidesSecond>
          </a>
        </StyledIconsMobile>
      

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

      </StyledMaxWidthContent>
  </StyledHeader>
  );
}


export default Header;