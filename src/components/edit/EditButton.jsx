
import React, {useState} from 'react'
import styled from "styled-components";

const StyledEditButton = styled.button` 
  position: fixed;
  top: 4px;
  right: -20px;
  z-index: 111;
  `;
  
const EditButton = () => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      <StyledEditButton onClick={() => setShowEdit(!showEdit)}>Edit On Off</StyledEditButton>
    </div>
  );
};

export default EditButton;
