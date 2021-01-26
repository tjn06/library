import React from "react";
import { Parallax, Background } from "react-parallax";
import styled from "styled-components";

const StyledParalaxStyle = styled.div`
  font-family: sans-serif;
  /* text-align: center; */
`;

const StyledParalaxHeight = styled.div`
  height: ${props => props.height};
`;

const StyledParalaxContent = styled.div`
  /* background: white; */
  padding: 20px;
  position: absolute;
  width:100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display:flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
  }
`;

const image1 = "https://picsum.photos/800/600";


const ParalaxHero = ({height, mediaQueryBreakPoint, scrollEffect}, props) => (
  <StyledParalaxStyle>
    <Parallax bgImage={image1} strength={scrollEffect}>
      <StyledParalaxHeight height={height}>
        <StyledParalaxContent mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <div>HTML inside the parallax</div>
          <div>HTML inside the parallax</div>
          </StyledParalaxContent>
      </StyledParalaxHeight>
    </Parallax>
  </StyledParalaxStyle>
);

export default ParalaxHero;




// import React from "react";
// import styled from "styled-components";

// const image1 = "https://picsum.photos/800/600";
// const StyledParalaxHeight = styled.div`
//   height: ${props => props.height};
// `;

// const StyledHeroBlock = styled.div`
//   display: flex;
//   width: 100%;
//   height: ${props => props.height};
//   background: #b81313;
//   background-image: url(${image1});
//   background-repeat: no-repeat;
//   background-size: cover;
  
//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    
//   }
// `;



// const HeroBlock = ({height, mediaQueryBreakPoint}, props) => (
//   <StyledHeroBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} >
 
//        refrr
        
//   </StyledHeroBlock>
// );

// export default HeroBlock;
