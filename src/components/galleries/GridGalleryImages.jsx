import React from 'react';
import Gallery from 'react-photo-gallery';
import styled from "styled-components";



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
  // const IMAGES =
  // [{
  //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 174,
  //         caption: "After Rain (Jeshu John - designerspics.com)"
  // },
  // {
  //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  //         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 212,
  //         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
  //         caption: "Boats (Jeshu John - designerspics.com)"
  // },
  
  // {
  //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  //         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 212
  // }]
  
  const photos = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpgg',
      width: 4,
      height: 3
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      width: 1,
      height: 1
    }
  ];

  return (
    <StyledBlock>
    <StyledGallery>
        <Gallery photos={photos}/>
    </StyledGallery>
    </StyledBlock>
        
  );
};

export default GridGalleryImages;

//Doumentation - https://www.npmjs.com/package/react-grid-gallery