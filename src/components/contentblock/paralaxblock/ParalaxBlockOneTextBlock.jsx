import React from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const StyledParalaxStyle = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const StyledParalaxHeight = styled.div`
  height: ${props => props.height};
`;

const StyledParalaxContent = styled.div`
  background: white;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    left: 50%;
  }
`;

const image1 = "https://picsum.photos/800/600";


const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => (
  <StyledParalaxStyle>
    <Parallax bgImage={image1} strength={scrollEffect}>
      <StyledParalaxHeight height={height}>
        <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>HTML inside the parallax</StyledParalaxContent>
        
      </StyledParalaxHeight>
    </Parallax>
  </StyledParalaxStyle>
);

export default ParalaxHero;
