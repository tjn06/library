import React from "react";
// import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";


// Styled Components ---------------------------------------------------
const StyledImageGallery = styled.div`
  width: 500px;

  @media (max-width: 648px) {

  }
`;


const ImagesSlider = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      // thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      // thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
  <StyledImageGallery>
    <ImageGallery
    items={images} 
    showPlayButton={false}
    showThumbnails={false}
    showBullets={true}
    />
    
  </StyledImageGallery>
  );
};


export default ImagesSlider;

// **********************items: (required) Array of objects, see example above,
// Available Properties
// original - image src url
// thumbnail - image thumbnail src url
// fullscreen - image for fullscreen (defaults to original)
// originalClass - custom image class
// thumbnailClass - custom thumbnail class
// renderItem - Function for custom renderer (see renderItem below)
// renderThumbInner - Function for custom thumbnail renderer (see renderThumbInner below)
// originalAlt - image alt
// thumbnailAlt - thumbnail image alt
// originalTitle - image title
// thumbnailTitle - thumbnail image title
// thumbnailLabel - label for thumbnail
// description - description for image
// imageSet - array of <source> using <picture> element (see app.js for example)
// srcSet - image srcset (html5 attribute)
// sizes - image sizes (html5 attribute)
// bulletClass - extra class for the bullet of the item
// bulletOnClick - callback({item, itemIndex, currentIndex})


// ***********************Props imagegallery
// infinite: Boolean, default true

// infinite sliding
// lazyLoad: Boolean, default false

// showNav: Boolean, default true

// showThumbnails: Boolean, default true

// thumbnailPosition: String, default bottom

// available positions: top, right, bottom, left
// showFullscreenButton: Boolean, default true

// useBrowserFullscreen: Boolean, default true

// if false, fullscreen will be done via css within the browser
// useTranslate3D: Boolean, default true

// if false, will use translate instead of translate3d css property to transition slides
// showPlayButton: Boolean, default true

// isRTL: Boolean, default false

// if true, gallery's direction will be from right-to-left (to support right-to-left languages)
// showBullets: Boolean, default false

// showIndex: Boolean, default false

// autoPlay: Boolean, default false

// disableThumbnailScroll: Boolean, default false

// disables the thumbnail container from adjusting
// disableKeyDown: Boolean, default false

// disables keydown listener for keyboard shortcuts (left arrow, right arrow, esc key)
// disableSwipe: Boolean, default false

// onErrorImageURL: String, default undefined

// an image src pointing to your default image if an image fails to load
// handles both slide image, and thumbnail image
// indexSeparator: String, default ' / ', ignored if showIndex is false

// slideDuration: Number, default 450

// transition duration during image slide in milliseconds
// swipingTransitionDuration: Number, default 0

// transition duration while swiping in milliseconds
// slideInterval: Number, default 3000

// slideOnThumbnailOver: Boolean, default false

// flickThreshold: Number (float), default 0.4

// Determines the max velocity of a swipe before it's considered a flick (lower = more sensitive)
// swipeThreshold: Number, default 30

// A percentage of how far the offset of the current slide is swiped to trigger a slide event. e.g. If the current slide is swiped less than 30% to the left or right, it will not trigger a slide event.
// stopPropagation: Boolean, default false

// Automatically calls stopPropagation on all 'swipe' events.
// preventDefaultTouchmoveEvent: Boolean, default false

// An option to prevent the browser's touchmove event (stops the gallery from scrolling up or down when swiping)
// startIndex: Number, default 0

// onImageError: Function, callback(event)

// overrides onErrorImage
// onThumbnailError: Function, callback(event)

// overrides onErrorImage
// onThumbnailClick: Function, callback(event, index)

// onImageLoad: Function, callback(event)

// onSlide: Function, callback(currentIndex)

// onBeforeSlide: Function, callback(nextIndex)

// onScreenChange: Function, callback(boolean)

// When fullscreen is toggled a boolean is passed to the callback
// onPause: Function, callback(currentIndex)

// onPlay: Function, callback(currentIndex)

// onClick: Function, callback(event)

// onTouchMove: Function, callback(event) on gallery slide

// onTouchEnd: Function, callback(event) on gallery slide

// onTouchStart: Function, callback(event) on gallery slide

// onMouseOver: Function, callback(event) on gallery slide

// onMouseLeave: Function, callback(event) on gallery slide

// additionalClass: String,

