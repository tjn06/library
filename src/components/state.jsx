import { createGlobalState } from 'react-hooks-global-state';

export const { useGlobalState } = createGlobalState({
  showEdit: false,
  marginTop: true,

  componentDataHome: [],

  backgParalaxHero: false,
  backgHeroBlock: false,

  backgThreeGrid: false,
  backgThreeGridWithBorder: false,

  backgMixedBlockTextSlider: true,
  backgMixedBlockTextSliderReverse: true,

  backgTextBlockCentered: false,

  backgMixedBlockOrderTextImgElement: true,
  backgMixedBlockOrderImgElementText: true,

  backgParalaxBlockOneTextBlock: false,
  backgParalaxBlockTwoTextBlock: false,

  backgImageBlockOneTextBlock: false,
  backgImageBlockTwoTextBlock: false,

  backgGridGalleryImages: false,
  backgGridGalleryImagesSmall: false,

  backgBlockImageGallerySlider: false,
  backgBlockImageGallerySliderTheme: false,

  backgProducts: false,

  backgMapNavWithImage: false,
  backgMapNavBig: false,

  backgFormWithImage: true,
  backgFormCenter: true,

  backgHistoryBlock: false,
  backgHistoryNoCollapseBlock: false,

  backgFaqComponentBlock: false,
  
  backgMixedBlockOrderTextImage: true,
  backgMixedBlockOrderImageText: false

});