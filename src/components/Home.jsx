import React, { useState }from "react";
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

// import ImagesSlider from './galleries/ImagesSlider';
import GridGalleryImages from './galleries/GridGalleryImages';
import TextBlockCentered from './contentblock/textblock/TextBlockCentered';

import styled from "styled-components";
import StandardButton from './buttons/StandardButton'

import BlockImageGallerySlider from './galleries/BlockImageGallerySlider';

import EditMode from './edit/EditMode'

import Products from './menucomponents/Products';
import MapNav from './map/MapNav';
import Form from './contact/Form';
import History from './timeline/History'
import HistoryNoCollapse from './timeline/HistoryNoCollapse'
import Faq from './Faq'



// import HeaderTwoRows from './HeaderTwoRows';

const Div = styled.div`
  /* color: white; */
`;

const StyledEditButton = styled.button` 
  position: fixed;
  top: 4px;
  right: -20px;
  z-index: 111;
  `;

const StyledEditGrid = styled.div`
  display: grid;
  /* grid-gap: 1rem; */
  grid-template-areas:  'gridItem1'
                        'gridItem2' 
                        'gridItem3'
                        'gridItem4'
                        'gridItem5'
                        'gridItem6'
                        'gridItem7'
                        'gridItem8'
                        'gridItem9'
                        'gridItem10'
                        'gridItem11'
                        'gridItem12'
                        'gridItem13'
                        'gridItem14';
  .grid-item-1 { grid-area: gridItem1;}
  .grid-item-2 { grid-area: gridItem2;}
  .grid-item-3 { grid-area: gridItem3;}
  .grid-item-4 { grid-area: gridItem4;}
  .grid-item-5 { grid-area: gridItem5;}
  .grid-item-6 { grid-area: gridItem6;}
  .grid-item-7 { grid-area: gridItem7;}
  .grid-item-8 { grid-area: gridItem8;}
  .grid-item-9 { grid-area: gridItem9;}
  .grid-item-10 { grid-area: gridItem10;}
  .grid-item-11 { grid-area: gridItem11;}
  .grid-item-12 { grid-area: gridItem12;}
  .grid-item-13 { grid-area: gridItem13;}
  .grid-item-14 { grid-area: gridItem14;}
  /* .grid-item-15 { grid-area: gridItem15;} */

`;


const mediaQ = "686px"; // To all mediaquerys in styled components in this component
// const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required


const Home = ({showEdit}) => {
  // const [showEdit, setShowEdit] = useState(false);
  const [gridItem1, setGridItem1] = useState("grid-item-1");
  const [gridItem2, setGridItem2] = useState("grid-item-2");
  const [gridItem3, setGridItem3] = useState("grid-item-3");
  const [gridItem4, setGridItem4] = useState("grid-item-4");
  const [gridItem5, setGridItem5] = useState("grid-item-5");
  const [gridItem6, setGridItem6] = useState("grid-item-6");
  const [gridItem7, setGridItem7] = useState("grid-item-7");
  const [gridItem8, setGridItem8] = useState("grid-item-8");
  const [gridItem9, setGridItem9] = useState("grid-item-9");
  const [gridItem10, setGridItem10] = useState("grid-item-10");
  const [gridItem11, setGridItem11] = useState("grid-item-11");
  const [gridItem12, setGridItem12] = useState("grid-item-12");
  const [gridItem13, setGridItem13] = useState("grid-item-13");
  const [gridItem14, setGridItem14] = useState("grid-item-14");
  // const [gridItem15, setGridItem15] = useState("grid-item-15");
  

  return (
  <Div>

    {/* <button onClick={() => setShowEdit(!showEdit)}>Edit On Off</button> */}
    {/* <StyledEditButton onClick={() => setShowEdit(!showEdit)}>Edit On Off</StyledEditButton> */}

    <StyledEditGrid>

    <div className={gridItem1}>
      <EditMode
        showEdit={showEdit}
        componentLabel={"Herobild"}
        direction={"column-reverse"}
        altOneComponent={<ParalaxHero height="400px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
        altTwoComponent={<HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
      />
    </div>

    <div className={gridItem2}>
      <EditMode
        showEdit={showEdit}
        componentLabel={"Presentation ikoner"}
        altOneComponent={<ThreeGrid />} 
        altTwoComponent={<ThreeGrid />}
      />
    </div>
    
    <div className={gridItem3}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Karusell bilder"}
        altOneComponent={<MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} />} 
        altTwoComponent={<MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} />}
      />
    </div>

    <div className={gridItem4}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Block centrerad text"}
        altOneComponent={<TextBlockCentered height="255px" mediaQueryBreakPoint={mediaQ} />} 
        altTwoComponent={<TextBlockCentered height="455px" mediaQueryBreakPoint={mediaQ} />}
      />
    </div>

    <div className={gridItem5}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Block Bild och text"}
        altOneComponent={<MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} />} 
        altTwoComponent={<MixedBlockOrderImgElementText height="250px" mediaQueryBreakPoint={mediaQ} />}
      />
    </div>

    <div className={gridItem6}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Block paralax-bakgrund"} 
        altOneComponent={<ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
        altTwoComponent={<ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
      />
    </div>

    <div className={gridItem7}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Block standard-bakgrund"} 
        altOneComponent={<ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
        altTwoComponent={<ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
      />
    </div>

    <div className={gridItem8}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Bildgalleri"} 
        altOneComponent={<GridGalleryImages />} 
        altTwoComponent={<GridGalleryImages />}
      />
    </div>

    <div className={gridItem9}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Stor karusell bilder"} 
        altOneComponent={<BlockImageGallerySlider />} 
        altTwoComponent={<BlockImageGallerySlider />}
      />
    </div>

    <div className={gridItem10}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Meny produkter"} 
        altOneComponent={<Products />} 
        altTwoComponent={<Products />}
      />
    </div>

    <div className={gridItem11}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Karta"} 
        altOneComponent={<MapNav width='1024px' height='600px'/>} 
        altTwoComponent={<MapNav width='400px' height='400px'/>}
      />
    </div>

    <div className={gridItem12}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Formulär"} 
        altOneComponent={<Form />} 
        altTwoComponent={<Form />}
      />
    </div>

    <div className={gridItem13}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Timeline/Historia"} 
        altOneComponent={<History />} 
        altTwoComponent={<HistoryNoCollapse />}
      />
    </div>

    <div className={gridItem14}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Faq/frågor"} 
        altOneComponent={<Faq />} 
        altTwoComponent={<Faq />}
      />
    </div>

    {/* <div className={gridItem15}>
      <EditMode 
        showEdit={showEdit}
        componentLabel={"Bild och text"} 
        altOneComponent={<MixedBlockOrderImageText />} 
        altTwoComponent={<MixedBlockOrderTextImage />}
      />
    </div> */}

   
</StyledEditGrid>
    


    


    {/* <ParalaxHero height="400px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/> */}

    {/* <ThreeGrid /> */}
    {/* <MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} /> */}
    {/* <TextBlockCentered height="255px" mediaQueryBreakPoint={mediaQ} /> */}
    {/* <MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} /> */}
    {/* <MixedBlockOrderImgElementText height="250px" mediaQueryBreakPoint={mediaQ} /> */}
    {/* <ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>  */}
    {/* <ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/> */}

    {/* <MixedBlockOrderTextImage height="250px" mediaQueryBreakPoint={mediaQ} /> */}
    {/* <MixedBlockOrderImageText height="250px" mediaQueryBreakPoint={mediaQ} /> */}

    {/* <ImagesSlider/> */}

    {/* <ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/> */}
    {/* <HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/> */}
    
    {/* <StandardButton border={"2px solid white"} color={"red"} width={'10rem'} height={'2rem'} />
    <StandardButton color="black" radius="0px"/>
    <StandardButton  width="20rem"/>
    <StandardButton  fontsize="10px" fontweight="300"/>
    <StandardButton  fontsize="10px" fontweight="300" textcolor="pink" /> */}
    {/* <GridGalleryImages /> */}
    {/* <BlockImageGallerySlider /> */}
  </Div>
  );
};

export default Home;
