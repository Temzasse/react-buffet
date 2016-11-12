import Radium from 'radium';

/*
 * LoadingIndicator styles
 */

const ballAnim = Radium.keyframes({
  '0%': { opacity: 1, transform: 'scale(1)' },
  '20%': { opacity: 1 },
  '80%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
}, 'ballAnim');

export default {
  ball: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    fontSize: 0,
    color: '#fff',
    width: 32,
    height: 32,
  },
  ballDiv: {
    boxSizing: 'border-box',
    display: 'inball-block',
    float: 'none',
    backgroundColor: 'currentColor',
    border: '0px solid currentColor',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 8,
    height: 8,
    marginTop: -4,
    marginLeft: -4,
    borderRadius: '100%',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: ballAnim,
  },
  'ball1': {
    top: '5%',
    left: '50%',
    animationDelay: '-.875s',
  },
  'ball2': {
    top: '18.1801948466%',
    left: '81.8198051534%',
    animationDelay: '-.75s',
  },
  'ball3': {
    top: '50%',
    left: '95%',
    animationDelay: '-.625s',
  },
  'ball4': {
    top: '81.8198051534%',
    left: '81.8198051534%',
    animationDelay: '-.5s',
  },
  'ball5': {
    top: '94.9999999966%',
    left: '50.0000000005%',
    animationDelay: '-.375s',
  },
  'ball6': {
    top: '81.8198046966%',
    left: '18.1801949248%',
    animationDelay: '-.25s',
  },
  'ball7': {
    top: '49.9999750815%',
    left: '5.0000051215%',
    animationDelay: '-.125s',
  },
  'ball8': {
    top: '18.179464974%',
    left: '18.1803700518%',
    animationDelay: '0s',
  },
  'sm': {
    width: 16,
    height: 16,
  },
  'smDiv': {
    width: 4,
    height: 4,
    marginTop: -2,
    marginLeft: -2,
  },
  'md': {
    width: 64,
    height: 64,
  },
  'mdDiv': {
    width: 16,
    height: 16,
    marginTop: -8,
    marginLeft: -8,
  },
  'lg': {
    width: 96,
    height: 96,
  },
  'lgDiv': {
    width: 24,
    height: 24,
    marginTop: -12,
    marginLeft: -12,
  },
};


/*!
* Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
* Copyright 2015 Daniel Cardoso <@DanielCardoso>
* Licensed under MIT
*/
