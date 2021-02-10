import React, {useState} from 'react'
import styled from "styled-components";

const StyledLine = styled.div`
  background-color: #349add;
  width: 100%;
  height: 2px;

`;

const StyledButton = styled.button`
  background-color: #349add;
  color: white;
  margin: 3px 3px 1px 3px;
  padding: 3px;
`;

const StyledEditModeContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ?  props.direction : 'column'}; 
`;


  
  const EditMode = ({showEdit, direction, altOneComponent, altTwoComponent, componentLabel}) => {
    const [showHideBlock, setShowHideBlock] = useState(false);
    const [showHideAlt, setShowHideAlt] = useState(true);
  
  return (
    <StyledEditModeContainer direction={direction}>

      {showEdit ? (
        <div>
          <StyledButton onClick={() => setShowHideBlock(!showHideBlock)}> show or not</StyledButton>
          <StyledButton onClick={() => setShowHideAlt(!showHideAlt)}>show hide alt</StyledButton>
          {componentLabel} {showHideAlt ? "alt1" : "alt2"}
          <StyledLine />
        </div>
        ) : (
          null
        )}

      {showHideBlock  ? (
        showHideAlt ? ( altOneComponent ) : ( altTwoComponent )
      )  : (
        null
      )}
      

    </StyledEditModeContainer>
  
    );
  };

export default EditMode;



