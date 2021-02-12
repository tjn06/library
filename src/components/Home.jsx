import React, { useState, useEffect }from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";

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
import MixedBlockTextSliderReverse from './contentblock/mixedblock/MixedBlockTextSliderReverse';
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
import MapNavWithImage from './map/MapNavWithImage';
import MapNavBig from './map/MapNavBig';
// import Form from './contact/Form';
import FormWithImage from './contact/FormWithImage';
import FormCenter from './contact/FormCenter';
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

const mediaQ = "686px"; // To all mediaquerys in styled components in this component
// const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required

const Home = ({showEdit}) => {
  // const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState([
    <EditMode
      key={1}
      showEdit={showEdit}
      componentLabel={"Herobild"}
      direction={"column-reverse"}
      altOneComponent={<ParalaxHero height="400px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
      key={2}
      showEdit={showEdit}
      componentLabel={"Presentation ikoner"}
      altOneComponent={<ThreeGrid />} 
      altTwoComponent={<ThreeGrid />}
    />,
  
    <EditMode
    key={3}
      showEdit={showEdit}
      componentLabel={"Karusell bilder"}
      altOneComponent={<MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} />} 
      altTwoComponent={<MixedBlockTextSliderReverse height="250px" mediaQueryBreakPoint={mediaQ} />}
    />,
  
    <EditMode
    key={4}
      showEdit={showEdit}
      componentLabel={"Block centrerad text"}
      altOneComponent={<TextBlockCentered height="255px" mediaQueryBreakPoint={mediaQ} />} 
      altTwoComponent={<TextBlockCentered height="455px" mediaQueryBreakPoint={mediaQ} />}
    />,
  
    <EditMode
    key={5}
      showEdit={showEdit}
      componentLabel={"Block Bild och text"}
      altOneComponent={<MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} />} 
      altTwoComponent={<MixedBlockOrderImgElementText height="250px" mediaQueryBreakPoint={mediaQ} />}
    />,
  
    <EditMode
    key={6}
      showEdit={showEdit}
      componentLabel={"Block paralax-bakgrund"} 
      altOneComponent={<ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
    key={7}
      showEdit={showEdit}
      componentLabel={"Block standard-bakgrund"} 
      altOneComponent={<ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
    key={8}
      showEdit={showEdit}
      componentLabel={"Bildgalleri"} 
      altOneComponent={<GridGalleryImages />} 
      altTwoComponent={<GridGalleryImages />}
    />,
  
    <EditMode
      key={9}
      showEdit={showEdit}
      componentLabel={"Stor karusell bilder"} 
      altOneComponent={<BlockImageGallerySlider />} 
      altTwoComponent={<BlockImageGallerySlider />}
    />,
  
    <EditMode
    key={10}
      showEdit={showEdit}
      componentLabel={"Meny produkter"} 
      altOneComponent={<Products />} 
      altTwoComponent={<Products />}
    />,
  
    <EditMode
    key={11}
      showEdit={showEdit}
      componentLabel={"Karta"} 
      // altOneComponent={<MapNav width='1024px' height='600px'/>} 
      altOneComponent={<MapNavBig />} 
      altTwoComponent={<MapNavWithImage />}
    />,
  
    <EditMode
    key={12}
      showEdit={showEdit}
      componentLabel={"Formulär"} 
      altOneComponent={<FormWithImage height="500px" mediaQueryBreakPoint={mediaQ}/>} 
      altTwoComponent={<FormCenter height="500px" mediaQueryBreakPoint={mediaQ}/>}
    />,
  
    <EditMode
    key={13}
      showEdit={showEdit}
      componentLabel={"Timeline/Historia"} 
      altOneComponent={<History />} 
      altTwoComponent={<HistoryNoCollapse />}
    />,
    
    <EditMode
    key={14}
      showEdit={showEdit}
      componentLabel={"Faq/frågor"} 
      altOneComponent={<Faq />} 
      altTwoComponent={<Faq />}
    />,

    <EditMode
    key={15}
      showEdit={showEdit}
      componentLabel={"Bild/text skalning"} 
      altOneComponent={<MixedBlockOrderTextImage height="250px" mediaQueryBreakPoint={mediaQ} />} 
      altTwoComponent={<MixedBlockOrderImageText height="250px" mediaQueryBreakPoint={mediaQ} />}
    />
  ])

  const onSortEnd = (oldIndex, newIndex) => {
    setData((array) => arrayMove(array, oldIndex, newIndex));
  };


  return (
  <Div>
    <SortableList
      onSortEnd={onSortEnd}
      className="list"
      draggedItemClassName="dragged"
    >
      {data.map((item) => (
        <SortableItem  key={item.key}>
          <div className="item">
          <EditMode
            key={item.key}
            showEdit={showEdit}
            componentLabel={item.props.componentLabel} 
            altOneComponent={item.props.altOneComponent} 
            altTwoComponent={item.props.altTwoComponent}
          />
          </div>
        </SortableItem>
      ))}
    </SortableList>

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
}

export default Home;
