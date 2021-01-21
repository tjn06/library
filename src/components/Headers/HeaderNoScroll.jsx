// Dependencis
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//Svg components
import LogoPizza from '../iconcomponents/LogoPizza';
import HamburgerIconOpen from '../iconcomponents/HamburgerIconOpen'
import HamburgerIconClosed from '../iconcomponents/HamburgerIconClosed'


// Styled Components ---------------------------------------------------
const StyledHeader = styled.header`
  font-family: 'Josefin Sans', sans-serif;
  position: fixed;
  top: 850;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 25px;
  height: 100px;
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
    height: 50px;
    padding: 0px 10px;
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledLogoCentered = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 33px;

  @media (max-width: 648px) {
  width: 35px;
  height: 35px;
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

const StyledUlFaqDesktop = styled.ul`
  display: flex;
  padding: 0px 5px;
  list-style-type: none;

  @media (max-width: 648px) {
    display: none;
  }
`;

const StyledListFaqItem = styled.li`
  padding-right: 50px;
  align-self: center;
  text-align: right;

@media (max-width: 648px) {
  display: none;
}
`;

const HamburgerIconsShowHide = styled.div`
  display: none;

  @media (max-width: 648px) {
    display: block;
    
  }
`;

// Styled Components end ---------------------------------------------------


function HeaderNoScroll() {

  const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);
  const toggleHamburgerClick = () => setToggleHamburgerAndMenu(!toggleHamburgerAndMenu);
  const closeMobileMenuRouteClick = () => setToggleHamburgerAndMenu(false);

  return (
    <StyledHeader>
      
      <StyledNav>
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


export default HeaderNoScroll;