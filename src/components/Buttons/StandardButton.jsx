import React from 'react'
import styled from 'styled-components';

const Button = styled.div`
  border: ${props => props.border ?  props.border :  '1.5px solid rgb(0, 0, 0)'}; 
  border-radius:${props => props.radius ?  props.radius : '10px'};
  background-color: ${props => props.color ?  props.color : '#4da14a'};
  width: ${props => props.width ?  props.width : '16rem'};  
  height:${props => props.height ?  props.height : '3rem'};
  display: flex;
  justify-content: center;
  margin-left: 200px;//ska tas bort sen när den är klar
  cursor: pointer;
  

  :hover{
    
  }
`
const ButtonText= styled.p`
 margin: auto;
 font-weight: ${props => props.fontweight ?  props.fontweight : '500'};
 font-size: ${props => props.fontsize ?  props.fontsize : '20px'};
`

function StandardButton({border, color, width, height, radius, fontweight, fontsize}) {
  return (
    <Button border={border} color={color} width={width} height={height} radius={radius} >
      <ButtonText fontweight={fontweight} fontsize={fontsize}>BUTTON</ButtonText>
    </Button>
  )
}

export default StandardButton
