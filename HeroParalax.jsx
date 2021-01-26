import React from "react";
import useParalax from './Helpers/useParalax';
import styled from "styled-components";

// .hero > img{
//   -webkit-mask: linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box;
//           mask: linear-gradient(90deg, transparent 0%, #380A46 100%) 0% 0% no-repeat padding-box;
// }

// const StyledParallaxImg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
//   z-index: -1;
// `;

// const StyledHeroSection = styled.section`
//   width: 100%;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;



const HeroParalax = () => {
  const isOnline = useParalax();
  return (
    <div>
      <section className="hero">
        <img
          src="https://picsum.photos/800/600"
          alt="test"
          className="parallax"
          style={{
            // filter: `blur(4px)`,
            transform: `translateY(${isOnline * 0.3}px)`
          }}
        />
        
      </section>
      <div className="hero2">
          <div className="wrapper-design">
            {/* <h1 className="headline">TESTING</h1> */}
            <h2 className="sub-headline">15 års erfarenhet</h2>
            <p>15 års erfarenhet som snickare 🛠<br></br>
För privatkunder, företag el. samarbeten med andra bolag inom branschen</p>
          </div>
          <div className="empty-positioning"></div>
        </div>
      {/* <div className="hero2">fvvvvrvr<br/>fvvvrvr<br/></div> */}
      <div className="padd">gfhhg<br/></div>
  </div>

  );
};

export default HeroParalax;