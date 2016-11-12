import Radium from 'radium';

/*
 * CircleSpinner styles
 */

const circleAnim = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' },
}, 'circleAnim');

export default {
  circle: {
    width: 32,
    height: 32,
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    fontSize: 0,
    color: '#fff',
  },
  circleDiv: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-block',
    float: 'none',
    width: 32,
    height: 32,
    background: 'transparent',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'currentColor',
    borderBottomColor: 'transparent',
    borderRadius: '100%',
    animationDuration: '0.75s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: circleAnim,
  },
  sm: {
    width: 16,
    height: 16,
  },
  smDiv: {
    width: 16,
    height: 16,
    borderWidth: 1,
  },
  md: {
    width: 64,
    height: 64,
  },
  mdDiv: {
    width: 64,
    height: 64,
    borderWidth: 4,
  },
  lg: {
    width: 96,
    height: 96,
  },
  lgDiv: {
    width: 96,
    height: 96,
    borderWidth: 6,
  },
};

/*!
* Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
* Copyright 2015 Daniel Cardoso <@DanielCardoso>
* Licensed under MIT
*/
