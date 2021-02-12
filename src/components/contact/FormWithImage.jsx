import React from "react";
import styled from "styled-components";

import Pizza from '../../assets/pizza.jpg';
import Form from './Form'

const image1 = "https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 100%;
  background: #eeeeee;
  flex-direction: row;
  /* min-height: ${props => props.height}; */
  /* background-image: url(${image1}); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  align-content: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
    padding-top: unset;
    padding-bottom: unset;
    /* height: 500px; */
  }
`;

const StyledContentSize = styled.div`

 width: 100%;
 max-width: 512px;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    max-width: unset;
  }
`;



const FormWithImage = ({height, mediaQueryBreakPoint}, props) => (
  <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
    <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <Form/>
    </StyledContentSize>
    <StyledContentSize height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        
    </StyledContentSize>
  </StyledBlock>
);

export default FormWithImage;