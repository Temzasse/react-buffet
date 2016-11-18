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
    borderRadius: 4,
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
    fontSize: 22,
    cursor: 'pointer',
    zIndex: 2,
    // outline: 'none',
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
    // alignItems: 'center',
    justifyContent: 'flex-start',
    height: thumbHeight,
    margin: 0,
    listStyle: 'none',
    backgroundColor: darkest,
    borderTop: '1px solid #222',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  thumbnail: {
    height: 50,
    width: 50,
    flex: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 4,
    marginRight: 8,
    boxSizing: 'border-box',
    // outline: 'none',
    ':hover': {
      border: '2px solid #999',
    },
  },
  thumbnailCurrent: {
    border: '2px solid tomato',
    ':hover': {
      border: '2px solid tomato',
    },
  },
  vertFiller: {
    flex: 1,
  },
};
