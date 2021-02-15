import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useGlobalState } from '../state';

const StyledEditModeContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ?  props.direction : 'column'};
  border-bottom: ${props => props.showEdit ?  '2px solid rgba(255, 255, 255, 0)' :  'unset'}; 
  /* padding-bottom: ${props => props.showEdit ?  '3px' :  'unset'}; */

  &:hover {
  cursor: -webkit-grab; cursor: grab;;
  border-bottom: ${props => props.showEdit ?  '2px solid #000000' :  'unset'}; 
} 
`;

const StyledWrapperEdit = styled.div`


&.show-header-edit {
  z-index: 999999;
  position: absolute;
  width: 100%;
}

`;

const StyledLine = styled.div`
  background-color: #607D8B;
  width: 100%;
  height: 1px;
  margin-bottom: 3px;
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


  const EditMode = ({direction, showHeaderEdit, altOneComponent, altTwoComponent, componentLabel, showComponent}) => {
    const [showHideBlock, setShowHideBlock] = useState(showComponent);
    const [toggleAlt, setToggleAlt] = useState(true);
    const [showEdit] = useGlobalState('showEdit');

    const [marginTop, setMarginTop] = useGlobalState('marginTop');
    function toggleEditAndTopMargin () {
      setToggleAlt(!toggleAlt)
      setMarginTop(!marginTop)
    }

  return (
    <StyledEditModeContainer direction={direction} showEdit={showEdit}>

      {showEdit ? (
        <StyledWrapperEdit className={`${showHeaderEdit ? "show-header-edit" : ""}`} >
          <StyledLine />
          <StyledButton onClick={() => setShowHideBlock(!showHideBlock)}> Visa/Dölj</StyledButton>

          {showHeaderEdit ? (
          <StyledButton onClick={() => toggleEditAndTopMargin()}>Skifta alternativ</StyledButton>
          ) : (
          <StyledButton onClick={() => setToggleAlt(!toggleAlt)}>Skifta alternativ</StyledButton>
          )
          }
          
          <b>{componentLabel}</b> {toggleAlt ? "Alternativ 1" : "Alternativ 2"}
          
        </StyledWrapperEdit>
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



