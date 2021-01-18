import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoPizza from './iconcomponents/LogoPizza'

// NavLink is a dependency
const StyledHeader = styled.div`
	border-bottom: 2px solid #969696;
	height: 100px;
`

const StyledLink = styled(NavLink)`
 color: black;
 text-decoration: none;

  &.active {
    font-weight: bold;
  }`
;

const StyledNav = styled.div`
	
	display: flex;
	flex-direction: row;
`
function Header() {

	return (
		<StyledHeader >
			<div> <LogoPizza color="#F1A55F"/></div>
				<StyledNav>

						<div>
							{" "}
             
							<StyledLink
								to="/"
								activeClassName="active"
								end
							>
								OM OSS
							</StyledLink>
						</div>
						<div >
							
							<StyledLink
								to="/menu"
								activeClassName="active"
								
							>
								MENY
							</StyledLink>
						</div>
						<div >
							
							<StyledLink
								to="/faq"
								activeClassName="active"
							>
								FAQ
							</StyledLink>
						</div>
						<div >
            
							<StyledLink
								to="/battlemode"
								
								activeClassName="active"
							>
								HITTA OSS
							</StyledLink>
						</div>
						</StyledNav>

		</StyledHeader>
	);
}


export default Header;