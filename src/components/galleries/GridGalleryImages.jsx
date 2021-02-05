import React from 'react';
import Gallery from 'react-photo-gallery';
import styled from "styled-components";

import { SRLWrapper } from "simple-react-lightbox";

const StyledBlock = styled.div`
  width: 100%;
  @media (max-width: 648px) {
  }
`;
const StyledGallery = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: 648px) {

  }
`;


const GridGalleryImages = () => {

  const elements = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      caption: 'Commodo commodo dolore',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Vimeo video',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Vimeo video',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Vimeo video',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      caption: 'Vimeo video',
      width: 22,
      height: 'auto'
    },
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      caption: 'Commodo commodo dolore',
      width: 22,
      height: 'auto'
    }
  ]

    const outputPizzasFirstColumn = elements.map((pizza, index) => (
      <div key={index}>
        <div className="gallery-frame">
          <img className="gallery-img" src={pizza.src} alt={pizza.caption}   width='400'  height='auto'/>
       </div>
     </div>
    ));


  // const photos = [
  //   {
  //     src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpgg',
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  //     width: 1,
  //     height: 1
  //   },
  //   {
  //     src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
  //     width: 1,
  //     height: 1
  //   }
  // ];

  return (
     <StyledBlock>
      <StyledGallery>
        <SRLWrapper>
          <div className="gallery-grid">
          {outputPizzasFirstColumn}
          </div>
        </SRLWrapper>
          {/* <Gallery photos={photos}/> */}
      </StyledGallery>
    </StyledBlock>
    

   
        
  );
};

export default GridGalleryImages;

//Doumentation - https://www.npmjs.com/package/react-grid-gallery