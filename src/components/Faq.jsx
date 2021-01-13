import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import styled from "styled-components";


const StyledFaq = styled.div
` border: 1 px solid blue;

`
;

const Faq = () => {
  const [showHide, setShowHide] = useState(false);

  const closeMobileMenu = () => setShowHide(!showHide);

  return (
    <div className='Content'>
      <StyledFaq onClick={closeMobileMenu}>
      <p>Vem är jag?</p>
      <Collapse isOpened={showHide}><p>Im batman</p></Collapse>
      </StyledFaq>

      <StyledFaq onClick={closeMobileMenu}>
      <p>Vem är jag?</p>
      <Collapse isOpened={showHide}><p>Im batman</p></Collapse>
      </StyledFaq>
      
    </div>
  );
};

export default Faq;