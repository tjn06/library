
import React, { useState } from "react";
import styled from "styled-components";

const StyledSpinner = styled.svg`
  
  margin: -25px 0 0 -25px;
  width: 60px;
  height: 60px;
  
  .path {
    stroke: #000000;
    stroke-linecap: round;
  }
  .hiding {
    opacity: 0;
    /* transition: opacity 0.2s ease-in-out; */
  }

  .show {
    opacity: 1;
    /* transition: opacity 0.2s ease-in-out; */
  }

  .mouse-pointer {
    cursor: pointer;
  }

`;
function ContactBtn ({childFuncShowHideContactContent, childBtnContentToggle}, props) {

    const [showHideBtn, setShowHideBtn] = useState(true);

    function toggleContentAndBtn() {
        setShowHideBtn(!showHideBtn)
        childFuncShowHideContactContent(showHideBtn)
    }
    

    return(
        <StyledSpinner viewBox="0 0 50 50">
        <circle onClick={() => toggleContentAndBtn()}
          className="path mouse-pointer"
          cx="25"
          cy="25"
          r="23"
          fill="white"
          strokeWidth="1"
        />
        <g className="mouse-pointer" transform="translate(3,13)">
        <path onClick={() => toggleContentAndBtn()} className={showHideBtn ? "hiding" : "show"} d="M23.3982 12L34 22.6172L32.6172 24L22 13.3982L11.3828 24L10 22.6172L20.6018 12L10 1.38284L11.3828 0L22 10.6018L32.6172 0L34 1.38284L23.3982 12Z" fill="#4F4F4F"/>
        <path onClick={() => toggleContentAndBtn()} className={!showHideBtn ? "hiding" : "show"}d="M2.83057 12.9814L2.20752 13.7656V16H0.628418V8.17969H2.20752V11.5903L2.70703 10.7471L4.1626 8.17969H6.09619L3.85645 11.6172L6.13379 16H4.25928L2.83057 12.9814ZM12.0527 12.7935C12.0527 13.8426 11.8039 14.6572 11.3062 15.2373C10.812 15.8174 10.1245 16.1074 9.24365 16.1074C8.36637 16.1074 7.67708 15.821 7.17578 15.248C6.67448 14.6715 6.42025 13.8659 6.41309 12.8311V11.4937C6.41309 10.4194 6.66195 9.58154 7.15967 8.97998C7.65739 8.37484 8.34847 8.07227 9.23291 8.07227C10.103 8.07227 10.7887 8.36947 11.29 8.96387C11.7913 9.55469 12.0456 10.3854 12.0527 11.4561V12.7935ZM10.4683 11.4829C10.4683 10.7775 10.368 10.2529 10.1675 9.90918C9.96696 9.56543 9.65544 9.39355 9.23291 9.39355C8.81396 9.39355 8.50423 9.56006 8.30371 9.89307C8.10319 10.2225 7.99935 10.7256 7.99219 11.4023V12.7935C7.99219 13.4774 8.09424 13.9823 8.29834 14.3081C8.50244 14.6304 8.81755 14.7915 9.24365 14.7915C9.65544 14.7915 9.96159 14.634 10.1621 14.3188C10.3626 14.0002 10.4647 13.5078 10.4683 12.8418V11.4829ZM18.6538 16H17.0747L14.7651 10.8706V16H13.186V8.17969H14.7651L17.0801 13.3145V8.17969H18.6538V16ZM24.8252 9.49561H22.8916V16H21.3071V9.49561H19.4058V8.17969H24.8252V9.49561ZM28.8213 14.3994H26.6675L26.2485 16H24.5781L27.022 8.17969H28.4668L30.9268 16H29.2402L28.8213 14.3994ZM27.0112 13.0835H28.4722L27.7417 10.2959L27.0112 13.0835ZM33.8647 12.9814L33.2417 13.7656V16H31.6626V8.17969H33.2417V11.5903L33.7412 10.7471L35.1968 8.17969H37.1304L34.8906 11.6172L37.168 16H35.2935L33.8647 12.9814ZM42.8184 9.49561H40.8848V16H39.3003V9.49561H37.3989V8.17969H42.8184V9.49561Z" fill="#4F4F4F"/>
        </g>



      </StyledSpinner>
    )
};

export default ContactBtn;



