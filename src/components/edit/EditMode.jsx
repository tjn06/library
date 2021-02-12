import React, {useState} from 'react'
import styled from "styled-components";

const StyledLine = styled.div`
  background-color: #607D8B;
  width: 100%;
  height: 1px;
`;

const StyledButton = styled.button`
  background-color: #2196F3;
  color: white;
  margin: 3px 3px 1px 3px;
  padding: 3px;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
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
`;

const StyledEditModeContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ?  props.direction : 'column'};
  border-bottom: ${props => props.showEdit ?  '2px solid rgba(255, 255, 255, 0)' :  'unset'}; 
  
  
  &:hover {
  cursor: -webkit-grab; cursor: grab;;
  border-bottom: ${props => props.showEdit ?  '2px solid #9E9E9E;' :  'unset'}; 
} 
`;


  
  const EditMode = ({showEdit, direction, altOneComponent, altTwoComponent, componentLabel}) => {
    const [showHideBlock, setShowHideBlock] = useState(false);
    const [toggleAlt, setToggleAlt] = useState(true);
  
  return (
    <StyledEditModeContainer direction={direction} showEdit={showEdit}>

      {showEdit ? (
        <div>
          <StyledLine />
          <StyledButton onClick={() => setShowHideBlock(!showHideBlock)}> Visa/Dölj</StyledButton>
          <StyledButton onClick={() => setToggleAlt(!toggleAlt)}>Skifta alternativ</StyledButton>
          <b>{componentLabel}</b> {toggleAlt ? "Alternativ 1" : "Alternativ 2"}
          
        </div>
        ) : (
          null
        )}

      {showHideBlock  ? (
        toggleAlt ? ( altOneComponent ) : ( altTwoComponent )
      )  : (
        null
      )}
      

    </StyledEditModeContainer>
  
    );
  };

export default EditMode;



