import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";
import ContactBtn from './iconcomponents/ContactBtn';


const StyledReverseFlex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  `;

const StyledPosSizeCssClasses = styled.div` 
  width: 70px;
  position: fixed;
  bottom: 4px;
  right: -33px;

  .collapse-container {
    box-shadow: -2px 8px 10px -0px rgba(0, 0, 0, 0.253);
    position: relative;
    bottom: 36px;
    right: 170px;
    width: 200px;
    border-top-left-radius: 40px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    background-color:#ffffff;
    /* transition: 150ms; */
  }

  .collapse-container:after {
    z-index: 1;
    position: absolute;
    bottom: -10px;
    right: 20px;
    margin-left: -25%;
    content: '';
    width: 0;
    height: 0;
    border-top: solid 10px #ffffff;
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
  }

  .collapse-children {
    height: 140px;
    padding: 30px;
    border-top-left-radius: 40px;
    border-top-right-radius: 70px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    color: #4F4F4F;
    background-color:#ffffff;
  }
`;


const StyledContentItems = styled.div` 
  .select-all-when-click {
    -webkit-user-select: all;  /* Chrome 49+ */
    -moz-user-select: all;     /* Firefox 43+ */
    -ms-user-select: all;      /* No support yet */
    user-select: all;          /* Likely future */   
  }

  .select-text-disabled {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
`;


const data = [
  {
    question:"Telefon",
    answer:"0706455458"
  },

  {
    question:"Adress",
    answer:"Heffdf 439 994 Göteborg"
  },

  {
    question:"Email",
    answer:"test@email.nu"
  }
];



const ContactFixed = () => {
  const [showHideContactContent, setShowHideContactContent] = useState(false);

  function thisFuncShowHideContactContent(childParameterShowHideContactContent) {
    setShowHideContactContent(childParameterShowHideContactContent)
  }



  return (
    <StyledPosSizeCssClasses>
      <StyledReverseFlex>
        <ContactBtn childFuncShowHideContactContent={thisFuncShowHideContactContent}/>

        <Collapse isOpened={showHideContactContent} theme={{collapse: 'collapse-container', content: 'collapse-children'}}>

          {data.map((data, index) => (
          <StyledContentItems key={index}>
            <span className="select-text-disabled">{data.question}</span><br/>
            <span className="select-all-when-click">{data.answer}</span>
          </StyledContentItems>
          ))}

        </Collapse>

      </StyledReverseFlex>
    </StyledPosSizeCssClasses>
    
  );
};

export default ContactFixed;