import React, { useState, useEffect } from "react";


import styled from "styled-components";


const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px 10px 0px;
`;

const StyledFlexCenterPos = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLetterSpacing = styled.div`
  letter-spacing: 3px;
  font-size: 0.6em;
  color: #8f8f8f;
  /* font-weight: bold; */
  line-height: 1.2em;
`;

const StyledTextSidesFilter = styled.div`
  width: 3em;
  padding: 0px 0px 0px 1px;
  color: grey;
  font-size: 0.6em;
  line-height: 2.8em;
  `;

const Input = styled.input`
  /* margin-top:10px; */
  position:relative;
  width:90px;
  height:30px;
  -webkit-appearance: none;
  /* background: linear-gradient(0deg, #333, #000); */
  background: #c9c8c8;
  outline: none;
  border-radius: 10px;
  cursor: pointer;


  &:checked {
    /* background: linear-gradient(0deg, #dbdbdb, #dbdbdb); */
    background:  #c9c8c8;

  }

  &:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:50px;
    height:30px;
    /* background: linear-gradient(0deg, #000, #fafafa); */
    background: var(--color-pink);
    border-radius: 10px;
    transform: scale(.98,.96);
    transition:.5s;
  }

  &:checked:before {
    left:40px;
    background: var(--color-green);
  }

  &:checked:after {
    left:110px;
  }
`;




const FilterMenu = ({setChildFilterAndLabelName, firstFilter, secondFilter}) => {
  const [firstOrSecondFilter, setFirstOrSecondFilter] = useState(false);

  useEffect(() => {
    setChildFilterAndLabelName(firstOrSecondFilter)
  }, [firstOrSecondFilter, setChildFilterAndLabelName]);

  return (
  <div>
    <StyledFlexColumn>
      <StyledFlexCenterPos>
        <StyledLetterSpacing>SÖKFILTER</StyledLetterSpacing>
      </StyledFlexCenterPos>
      <StyledFlexCenterPos>
      <StyledTextSidesFilter>{firstFilter}</StyledTextSidesFilter>
        <Input onChange={() => setFirstOrSecondFilter(!firstOrSecondFilter)} type="checkbox" name="" />
      <StyledTextSidesFilter>{secondFilter}</StyledTextSidesFilter>
      </StyledFlexCenterPos>
    </StyledFlexColumn>
  </div>
    
  );
};



export default FilterMenu;