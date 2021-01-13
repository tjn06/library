import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";


const StyledFaq = styled.div` 
  border: 2 px solid blue;
  
`
;

const Faq = () => {
  const [showHide, setShowHide] = useState(false);

  const closeMobileMenu = () => setShowHide(!showHide);

  return (
    <div className='Content'>
      <StyledFaq onClick={closeMobileMenu}>
      <p>lorem question</p>
      <Collapse isOpened={showHide}><p>lorem answern</p></Collapse>
      </StyledFaq>

      <StyledFaq onClick={closeMobileMenu}>
      <p>lorem question</p>
      <Collapse isOpened={showHide}><p>lorem answer</p></Collapse>
      </StyledFaq>
      
    </div>
    

  );
};

export default Faq;