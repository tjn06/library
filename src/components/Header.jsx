import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// NavLink is a dependency
const StyledLink = styled(NavLink)
` color: blue;

  &.active {
    color: red;
  }`
;

function Header() {
	function menu() {
		let navWrapper = document.querySelector(".nav-wrapper"),
			navToogler = document.querySelector(".nav-toogler");
		navToogler.addEventListener("click", function(event) {
			navWrapper.classList.toggle("active");
		});
	}
	return (
		<div className="nav-wrapper" id="topNav" onClick={() => menu()}>
			<nav className="nav">
								<div className="logo">
					{/* <img src={require("../pics/headerlogo.svg")} alt="" /> */}
				</div>
				<div className="navigation">
					<div className="nav-toogler" />
					<ul className="nav-items">
						<div className="flex-icons">
							{" "}
              {/* npm fund
               */}
							<StyledLink
								to="/"
								activeClassName="active"
								end
							>
								Home
							</StyledLink>
						</div>
						<div className="flex-icons">
							{/* <img src={require("../pics/add.svg")} alt="" /> */}
							<StyledLink
								to="/menu"
								activeClassName="active"
								
							>
								Menu
							</StyledLink>
						</div>
						<div className="flex-icons">
							{/* <img src={require("../pics/stats.svg")} alt="" /> */}
							<StyledLink
								to="/faq"
								activeClassName="active"
							>
								Faq
							</StyledLink>
						</div>
						<div className="flex-icons">
            {/* <img src={require("../pics/battle.svg")} alt="" /> */}
							<StyledLink
								to="/battlemode"
								// className="toBattlemode"
								activeClassName="active"
							>
								Battlemode
							</StyledLink>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
}


export default Header;