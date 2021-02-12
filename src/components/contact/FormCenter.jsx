import React from "react";
import styled from "styled-components";

import Form from './Form'


const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  justify-content: center;
  align-content: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    padding-top: unset;
    padding-bottom: unset;
    /* height: 500px; */
  }
`;

const StyledContentSize = styled.div`
  width: 100%;
  max-width: 1024px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    max-width: unset;
  }
`;



const FormCenter = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <Form/>
    </StyledContentSize>
  </StyledBlock>
);

export default FormCenter;