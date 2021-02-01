import React from 'react'
import Facebook from '../iconcomponents/Facebook';
import Instagram from '../iconcomponents/Instagram';
import Twitter from '../iconcomponents/Twitter';
import styled from 'styled-components';

const StyledFooter = styled.footer`
height: 200px;
text-align: center;
background-color: #004d2d;
color: white;
opacity: 0.8;


 :hover{
   opacity: 1.0;
 } 
`
const Styledcontent = styled.div`
  width: 300px;
  padding-top: 50px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`

export default function Footer() {
  return (
    <StyledFooter>
      <Styledcontent>
      <div><Facebook /></div>
      <div><Instagram /></div>
      <div><Twitter /></div>
      </Styledcontent>
    </StyledFooter>
  )
}
