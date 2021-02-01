// import react from 'react';
import styled from "styled-components";

const StyledContentItems = styled.div`
  padding: 20px;
  position: fixed;
  top:0px;
  margin-left: -31px;
  background-color: #ffffff;
  color: black;
  box-shadow: -3px 3px 10px -2px rgba(0, 0, 0, 0.253);
  /* border: 1px solid #c9c9c9; */
`;

const OpenHours = ({ showHideOpenHours }) => {
  if (!showHideOpenHours) return null;
  return (
      <StyledContentItems className="collapse-container">Måndag 11-22<br/>Måndag 11-22 Måndag 11-22<br/>Måndag 11-22Måndag 11-22<br/>Måndag 11-22 </StyledContentItems>
  );
};

export default OpenHours;