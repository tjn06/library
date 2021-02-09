// import react from 'react';
import styled from "styled-components";
import {ReactComponent as Close} from '../../../assets/infoheader/Close.svg';

const StyledContentItems = styled.div`
  padding: 0px 0px 0px 0px;
  position: fixed;
  top: ${props => props.topPosition ?  props.topPosition :  'unset'};
  margin-left: ${props => props.marginLeft ?  props.marginLeft :  'unset'};
  background-color: #ffffff;
  color: black;
  box-shadow: -3px 3px 10px -2px rgba(0, 0, 0, 0.253);
  display: flex;
  /* flex-direction: column; */
  /* border: 1px solid #c9c9c9; */
`;

const StyledLeft = styled.div`
padding: 15px 0px 15px 25px;
`;

const StyledRight = styled.div`
padding: 5px 5px 0px 10px;
`;

const StyledClose = styled(Close)`
  cursor: pointer;
`;




const OpenHours = ({closeOpenHoursChild, topPosition, marginLeft }) => {
  // if (!showHideOpenHours) return null;
  return (
      <StyledContentItems className="collapse-container" topPosition={topPosition} marginLeft={marginLeft}>
        
        <StyledLeft>Måndag 11-22<br/>Måndag 11-22 <br/>Måndag 11-22<br/>Måndag 11-22</StyledLeft> 
        <StyledRight><StyledClose onClick={() => closeOpenHoursChild(false)} /></StyledRight>
        </StyledContentItems>
  );
};

export default OpenHours;