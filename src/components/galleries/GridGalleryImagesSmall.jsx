import React from 'react';
// import Gallery from 'react-photo-gallery';
import styled from "styled-components";
import { useGlobalState } from '../state';

import { SRLWrapper } from "simple-react-lightbox";

const StyledTextCenter= styled.div` 
  text-align: center;
  background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
`;

const StyledHeaderText= styled.div` 
    font-size: 3em;
  text-transform: uppercase;
  color: #353535;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  word-spacing: 2px;
/* text-shadow: 3px 2px 1px rgba(104, 104, 104, 0.13); */
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    font-size: 2.5em;
  }
`;

const StyledBlock = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 648px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const StyledGallery = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: 648px) {

  }
`;

const StyledImageFrame = styled.div`
  display: grid;
  align-self: center;
  height: 100%;
  background-color: #343434;
  border: 6px solid rgb(230, 230, 230);
  border-radius: 1px;
  color: #d9d9d9;
  
`;

const StyledImageProps = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
  object-fit: cover;
  transition: opacity 0.25s ease-in-out;
  cursor: zoom-in;

  @media (max-width: 648px) {
    width: 100%;
  }
`;

const StyledGridGalleryProps = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  /* align-items: center; */
  margin: 0;
  padding: 0;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 0;
  background-color: #176fb8;
  color: white;
  margin: 3px 3px 1px 3px;
  /* padding: 1px; */
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 0px transparent;
    border: 1px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    background-color: #03A9F4;
  }
  :active {
    outline: 0;
    /* border: 1px solid black; */
  }
  :focus {
    outline: 0;
}
`;

const GridGalleryImagesSmall = ({backgOne, backgTwo}) => {
  const [edit] = useGlobalState('showEdit');
  const [backgAlt, setBackgAlt] = useGlobalState('backgGridGalleryImagesSmall');

  const elements = [
    {
      src: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      caption: 'Bild 1',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Bild 2',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1595844730289-b248c919d6f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Bild 3',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1602856805912-5dab4ce4b618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Bild 4',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1560846389-e4e6d764cd61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Bild 5',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      caption: 'Bild 6',
      width: 22,
      height: 'auto'
    }
  ]

  const outputImageGrid = elements.map((image, index) => (
    <StyledImageFrame key={index}>
      <StyledImageProps src={image.src} alt={image.caption} width='400' height='auto'/>
    </StyledImageFrame>
  ));

  return (
    <StyledTextCenter backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      {edit ? (
      <StyledButton onClick={() => setBackgAlt(!backgAlt)}>Skifta bakgrund</StyledButton>
      ) : (
        null
      )
      }
      <StyledHeaderText>Galleri</StyledHeaderText>
      <StyledBlock>
        <StyledGallery>
          <SRLWrapper>
            <StyledGridGalleryProps>
            {outputImageGrid}
            </StyledGridGalleryProps>
          </SRLWrapper>
            {/* <Gallery photos={photos}/> */}
        </StyledGallery>
      </StyledBlock>
    </StyledTextCenter>
  );
};

export default GridGalleryImagesSmall;

//Doumentation - https://www.npmjs.com/package/react-grid-gallery