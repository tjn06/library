import React, { useState, useEffect }from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
// import {Link} from 'react-router-dom'
import styled from "styled-components";
import { useGlobalState } from './state';

import ParalaxHero from './contentblock/paralaxblock/ParalaxHero';
import ParalaxBlockTwoTextBlock from './contentblock/paralaxblock/ParalaxBlockTwoTextBlock';
import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
import HeroBlock from './contentblock/imageblock/HeroBlock';
//import ParalaxBlockOneTextBlock from './contentblock/paralaxblock/ParalaxBlockOneTextBlock';
//import HeroBlock from './contentblock/imageblock/HeroBlock';
import ImageBlockTwoTextBlock from './contentblock/imageblock/ImageBlockTwoTextBlock';
import ImageBlockOneTextBlock from './contentblock/imageblock/ImageBlockOneTextBlock';
import ThreeGrid from './grids/ThreeGrid'
import ThreeGridWithBorder from './grids/ThreeGridWithBorder'
import MixedBlockTextSlider from './contentblock/mixedblock/MixedBlockTextSlider';
import MixedBlockTextSliderReverse from './contentblock/mixedblock/MixedBlockTextSliderReverse';
import MixedBlockOrderTextImgElement from './contentblock/mixedblock/MixedBlockOrderTextImgElement';
import MixedBlockOrderImgElementText from './contentblock/mixedblock/MixedBlockOrderImgElementText';
// import ImagesSlider from './galleries/ImagesSlider';
import GridGalleryImages from './galleries/GridGalleryImages';
import GridGalleryImagesSmall from './galleries/GridGalleryImagesSmall';
import TextBlockCentered from './contentblock/textblock/TextBlockCentered';
// import StandardButton from './buttons/StandardButton'
import BlockImageGallerySlider from './galleries/BlockImageGallerySlider';
import BlockImageGallerySliderTheme from './galleries/BlockImageGallerySliderTheme';
import EditMode from './edit/EditMode'
import Products from './menucomponents/Products';
// import MapNav from './map/MapNav';
import MapNavWithImage from './map/MapNavWithImage';
import MapNavBig from './map/MapNavBig';
// import Form from './contact/Form';
import FormWithImage from './contact/FormWithImage';
import FormCenter from './contact/FormCenter';
import HistoryBlock from './timeline/HistoryBlock'
import HistoryNoCollapseBlock from './timeline/HistoryNoCollapseBlock'
import FaqComponentBlock from './faq/FaqComponentBlock'
import MixedBlockOrderImageText from './contentblock/mixedblock/MixedBlockOrderImageText';
import MixedBlockOrderTextImage from './contentblock/mixedblock/MixedBlockOrderTextImage';


// import HeaderTwoRows from './HeaderTwoRows';

const StyledWrapper = styled.div`
  /* color: white; */
`;

const StyledComponentData = styled.div`
  /* background-color: #343434;
  color: white; */
  position: fixed;
  z-index: 999;
  left: 3px;
  bottom: 0;
  
`;

const StyledData = styled.div`
  background-color: white;
  color: black;
  border: 1px solid black;
  /* padding: 5px;
  margin-left: 3px; */
`;

const StyledEditButton = styled.button` 
  width: 150px;
  /* position: fixed;
  bottom: 0px;
  left: 50%;
  z-index: 111; */
  background-color: #607D8B;
  color: white;
  margin: 3px 3px 1px 3px;
  padding: 6px;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
  /* border: 3px solid blue; */
  cursor: pointer;
  opacity: 0.7;

  :hover {
    box-shadow: 0px 0px 0px transparent;
    border: 1px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    background-color: #03A9F4;
    opacity: 1;
  }
  :active {
    outline: 0;
    /* border: 1px solid black; */
  }
  :focus {
    outline: 0;
  }
  @media (max-width: 648px) {
  }
  `;

const StyleContent = styled.div` 
display: flex;
justify-content: center;
@media (max-width: 648px) {
font-size: 1em;
}
`;

const StyledHeaderText= styled.div` 
  align-self: center;
  font-size: 3em;
  text-transform: uppercase;
  color: #353535;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  word-spacing: 2px;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: 648px) {
    font-size: 1.5em;
    align-self: center;
  }
`;


const mediaQ = "686px"; // To all mediaquerys in styled components in this component
// const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required

const FindUs = () => {
  const [componentDataHome, seComponentDataHome] = useGlobalState('componentDataHome');
  const [showEdit] = useGlobalState('showEdit');
  const [showOrderData, setShowOrderData] = useState(false);

  const [data, setData] = useState([
    <EditMode
      key={1}
      showComponent={false}
      componentLabel={"Herobild"}
      direction={"column-reverse"}
      altOneComponent={<ParalaxHero height="400px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<HeroBlock height="500px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
    key={2}
      showComponent={true}
      componentLabel={"Karta"} 
      // altOneComponent={<MapNav width='1024px' height='600px'/>} 
      altOneComponent={<MapNavWithImage backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<MapNavBig backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={3}
    showComponent={false}
      componentLabel={"Karusell bilder"}
      altOneComponent={<MixedBlockTextSlider height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<MixedBlockTextSliderReverse height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={4}
    showComponent={false}
      componentLabel={"Block centrerad text"}
      altOneComponent={<TextBlockCentered height="255px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<TextBlockCentered height="455px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={5}
    showComponent={false}
      componentLabel={"Block Bild och text"}
      altOneComponent={<MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
      altTwoComponent={<MixedBlockOrderImgElementText height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
    />,
  
    <EditMode
    key={6}
    showComponent={false}
      componentLabel={"Block paralax-bakgrund"} 
      altOneComponent={<ParalaxBlockOneTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<ParalaxBlockTwoTextBlock height="200px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
    key={7}
    showComponent={false}
      componentLabel={"Block standard-bakgrund"} 
      altOneComponent={<ImageBlockOneTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>} 
      altTwoComponent={<ImageBlockTwoTextBlock height="250px" mediaQueryBreakPoint={mediaQ} scrollEffect={500}/>}
    />,
  
    <EditMode
    showComponent={false}
    key={8}
      componentLabel={"Bildgalleri"} 
      altOneComponent={<GridGalleryImages backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<GridGalleryImagesSmall backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
      key={9}
      showComponent={false}
      componentLabel={"Stor karusell bilder"} 
      altOneComponent={<BlockImageGallerySlider backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<BlockImageGallerySliderTheme backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={10}
    showComponent={false}
      componentLabel={"Presentation ikoner"}
      altOneComponent={<ThreeGrid backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<ThreeGridWithBorder backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}

    />,
  
    <EditMode
    key={11}
    showComponent={false}
      componentLabel={"Meny produkter"} 
      altOneComponent={<Products backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<Products backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={12}
    showComponent={true}
      componentLabel={"Formulär"} 
      altOneComponent={<FormWithImage height="500px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<FormCenter height="500px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
  
    <EditMode
    key={13}
    showComponent={false}
      componentLabel={"Timeline/Historia"} 
      altOneComponent={<HistoryNoCollapseBlock backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<HistoryBlock backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,
    
    <EditMode
    key={14}
    showComponent={false}
      componentLabel={"Faq/frågor"} 
      altOneComponent={<FaqComponentBlock backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<FaqComponentBlock backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />,

    <EditMode
    key={15}
    showComponent={false}
      componentLabel={"Bild/text skalning"} 
      altOneComponent={<MixedBlockOrderTextImage height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>} 
      altTwoComponent={<MixedBlockOrderImageText height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'--color-backgblocklight'}/>}
    />
  ])

  console.log(data)

  const onSortEnd = (oldIndex, newIndex) => {
    setData((array) => arrayMove(array, oldIndex, newIndex));
  };

  useEffect(() => {
    seComponentDataHome(data)
      console.log(componentDataHome)
  }, [data])

  // const outputComponents = componentDataHome.map((component, index) => (
  //   <div key={index}>
  //     {component.key} {component.props.componentLabel}
  //   </div>
  // ));
  


  return (
  <StyledWrapper>

    <StyleContent>
      <StyledHeaderText>HITTA OSS</StyledHeaderText>.
    </StyleContent>

    {showEdit ? (
      <StyledComponentData>
        {showOrderData ? (
        <StyledData>
        {componentDataHome.map((component, index) => (
        <div key={index}>
          {component.key} {component.props.componentLabel}
        </div>
      ))}
      <StyledEditButton>Skicka data</StyledEditButton>
      </StyledData>

        ) : (
          null
        )}
      
      <StyledEditButton onClick={() => setShowOrderData(!showOrderData)}>Data</StyledEditButton>
      </StyledComponentData>
    ) : (
      null
    )
  }

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
            showComponent={item.props.showComponent}
            // showEdit={showEdit}
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
  </StyledWrapper>
  );
}

export default FindUs;
