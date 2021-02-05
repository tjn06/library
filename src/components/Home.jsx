import React from "react";
// import {Link} from 'react-router-dom'
// import styled from "styled-components";

import ParalaxHero from './contentblock/paralaxblock/ParalaxHero';
import ParalaxBlockTwoTextBlock from './contentblock/paralaxblock/ParalaxBlockTwoTextBlock';
import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
import HeroBlock from './contentblock/imageblock/HeroBlock';

//import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
//import HeroBlock from './contentblock/imageblock/HeroBlock';
import ImageBlockTwoTextBlock from './contentblock/imageblock/ImageBlockTwoTextBlock';

import ThreeGrid from './grids/ThreeGrid'
import MixedBlockOrderImageText from './contentblock/mixedblock/MixedBlockOrderImageText';
import MixedBlockOrderTextImage from './contentblock/mixedblock/MixedBlockOrderTextImage';

import MixedBlockTextSlider from './contentblock/mixedblock/MixedBlockTextSlider';
import MixedBlockOrderTextImgElement from './contentblock/mixedblock/MixedBlockOrderTextImgElement';
import MixedBlockOrderImgElementText from './contentblock/mixedblock/MixedBlockOrderImgElementText';

import ImagesSlider from './galleries/ImagesSlider';
import GridGalleryImages from './galleries/GridGalleryImages';
import TextBlockCentered from './contentblock/textblock/TextBlockCentered';

import styled from "styled-components";
import StandardButton from './buttons/StandardButton'

// import HeaderTwoRows from './HeaderTwoRows';

const Div = styled.div`
  /* color: white; */
  `;


const mediaQ = "686px"; // To all mediaquerys in styled components in this component
// const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required


const Home = () => (
  <Div>
    <ParalaxHero height="400px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>

    <ThreeGrid />
    <MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} />
    <TextBlockCentered height="255px" mediaQueryBreakPoint={mediaQ} />
    <MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} />
    <MixedBlockOrderImgElementText height="250px" mediaQueryBreakPoint={mediaQ} />
    <ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/> 

    <MixedBlockOrderTextImage height="250px" mediaQueryBreakPoint={mediaQ} />
    <MixedBlockOrderImageText height="250px" mediaQueryBreakPoint={mediaQ} />

    <ImagesSlider/>
    <ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxHero height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>
    <StandardButton border={"2px solid white"} color={"red"} width={'10rem'} height={'2rem'} />
    <StandardButton color="black" radius="0px"/>
    <StandardButton  width="20rem"/>
    <StandardButton  fontsize="10px" fontweight="300"/>
    <StandardButton  fontsize="10px" fontweight="300" textcolor="pink" />
    <GridGalleryImages />
  </Div>
);

export default Home;
