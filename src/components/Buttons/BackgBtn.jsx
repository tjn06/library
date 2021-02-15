import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  right: 0;
  margin: ${props => props.margin ?  props.margin :  'unset'}; 
  border: ${props => props.border ?  props.border :  '1px solid transparent'}; 
  border-radius:${props => props.radius ?  props.radius : '2px'};
  background-color: ${props => props.color ?  props.color : '#176fb8'};
  width: ${props => props.width ?  props.width : 'unset'};  
  height:${props => props.height ?  props.height : 'unset'};
  text-shadow: 0px 0px 0px transparent;
  display: flex;
  justify-content: center;
  /* ska tas bort sen när den är klar */
  /* margin-left: 200px; */
  cursor: pointer;
  :hover {
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background-color: #03A9F4;
  }
  :active {
    outline: 0;
    /* border: 1px solid black; */
  }
  :focus {
    outline: 0;
  }
`
// const ButtonText= styled.p`
//   margin: auto;
//   font-weight: ${props => props.fontweight ?  props.fontweight : '500'};
//   font-size: ${props => props.fontsize ?  props.fontsize : '20px'};
//   color:  ${props => props.textcolor ?  props.textcolor : 'white'};
// `

function StandardButton({border, color, width, height, radius, margin, fontweight, fontsize, textcolor}) {
  return (
    <Button border={border} color={color} width={width} height={height} radius={radius} margin={margin}>
      BUTTON
    </Button>
  )
}

export default StandardButton
