import React from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const StyledParalaxStyle = styled.div`
  /* font-family: sans-serif;
  text-align: center; */
`;

const StyledParalaxHeight = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

const StyledParalaxContent = styled.div`
  display: flex;
  flex-basis: 1024px;
  /* background: rgb(0,0,0,0.5); */
  padding: 20px;
  justify-content: center;
  align-items: center;


  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    /* left: 50%; */
  }
`;

const image1 = "https://picsum.photos/800/600";


const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => (
  <StyledParalaxStyle>
    <Parallax bgImage={image1} strength={scrollEffect} bgImageStyle={{opacity: '.6',   WebkitMask: 'linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box',
          mask: 'linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box' }}>
      <StyledParalaxHeight height={height}>
        <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>HTML inside the parallax</StyledParalaxContent>
        
      </StyledParalaxHeight>
    </Parallax>
  </StyledParalaxStyle>
);

export default ParalaxHero;
