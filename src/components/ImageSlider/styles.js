/*
 * ImageSlider styles
 */
const sliderHeight = 500;
const thumbHeight = 60;
const dark = '#151515';
const darkest = '#111';

export default {
  ImageSlider: {
    width: '100%',
    height: sliderHeight,
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: dark,
    // borderRadius: 4,
  },
  sliderContainer: {
    width: '100%',
    height: sliderHeight - thumbHeight,
    maxHeight: `calc(100vh - ${thumbHeight}px)`,
    overflowX: 'hidden',
    position: 'relative',
  },
  slideCtrlBtn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 30,
    padding: 0,
    fontWeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    zIndex: 2,
    textShadow: '0px 1px 3px #333',
    backgroundColor: 'rgba(0,0,0,0)',
    transition: 'background-color 0.3s ease',

    ':hover': {
      backgroundColor: 'rgba(200,200,200,0.1)',
    },
  },
  prevBtn: {
    left: 0,
  },
  nextBtn: {
    right: 0,
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    height: sliderHeight - thumbHeight,
    maxHeight: `calc(100vh - ${thumbHeight}px)`,
    willChange: 'transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-out',
    zIndex: 1,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    flex: 'none',
  },
  thumbnails: {
    display: 'flex',
    flexDirection: 'row',
    'flexWrap': 'no-wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: thumbHeight,
    margin: 0,
    listStyle: 'none',
    backgroundColor: darkest,
    boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.2)',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  thumbnail: {
    height: 45,
    width: 45,
    flex: 'none',
    backgroundColor: '#444',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 4,
    margin: '0px 8px 0px 0px',
    boxSizing: 'border-box',
  },
  thumbnailCurrent: {
    borderWidth: 3,
    borderStyle: 'solid',
  },
  vertFiller: {
    flex: 1,
  },
};
