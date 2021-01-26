import React from "react";
import styled from "styled-components";

const image1 = "https://picsum.photos/800/600";
// const StyledParalaxHeight = styled.div`
//   height: ${props => props.height};
// `;

const StyledHeroBlock = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  background: #b81313;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  /* height: ${props => props.height}; */
  background: #b81313;
  /* background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover; */
  /* justify-content: center; */
  /* align-items: center; */
  color: black;
  padding-top: 30%; 
  
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {

  }
`;



const HeroBlock = ({height, mediaQueryBreakPoint}, props) => (
  <StyledHeroBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} >
 
    <StyledContent>refrr</StyledContent>
        
  </StyledHeroBlock>
);

export default HeroBlock;