import Radium from 'radium';

/*
 * LoadingIndicator styles
 */

const lineAnim = Radium.keyframes({
  '50%': { opacity: 0.2 },
  '100%': { opacity: 1 },
}, 'lineAnim');

export default {
  line: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    fontSize: 0,
    color: '#fff',
    width: 32,
    height: 32,
  },
  lineDiv: {
    boxSizing: 'border-box',
    display: 'inline-block',
    float: 'none',
    backgroundColor: 'currentColor',
    border: '0px solid currentColor',
    position: 'absolute',
    width: 2,
    height: 10,
    marginBottom: 2,
    marginRight: 2,
    marginTop: -5,
    marginLeft: -1,
    borderRadius: 0,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationName: lineAnim,
  },
  'line1': {
    top: '15%',
    left: '50%',
    transform: 'rotate(0deg)',
    animationDelay: '-.875s',
  },
  'line2': {
    top: '25.2512626585%',
    left: '74.7487373415%',
    transform: 'rotate(45deg)',
    animationDelay: '-.75s',
  },
  'line3': {
    top: '50%',
    left: '85%',
    transform: 'rotate(90deg)',
    animationDelay: '-.625s',
  },
  'line4': {
    top: '74.7487373415%',
    left: '74.7487373415%',
    transform: 'rotate(135deg)',
    animationDelay: '-.5s',
  },
  'line5': {
    top: '84.9999999974%',
    left: '50.0000000004%',
    transform: 'rotate(180deg)',
    animationDelay: '-.375s',
  },
  'line6': {
    top: '74.7487369862%',
    left: '25.2512627193%',
    transform: 'rotate(225deg)',
    animationDelay: '-.25s',
  },
  'line7': {
    top: '49.9999806189%',
    left: '15.0000039834%',
    transform: 'rotate(270deg)',
    animationDelay: '-.125s',
  },
  'line8': {
    top: '25.2506949798%',
    left: '25.2513989292%',
    transform: 'rotate(315deg)',
    animationDelay: '0s',
  },
  'sm': {
    width: 16,
    height: 16,
  },
  'smDiv': {
    width: 1,
    height: 4,
    marginTop: -2,
    marginLeft: 0,
  },
  'md': {
    width: 64,
    height: 64,
  },
  'mdDiv': {
    width: 4,
    height: 20,
    marginTop: -10,
    marginLeft: -2,
  },
  'lg': {
    width: 96,
    height: 96,
  },
  'lgDiv': {
    width: 6,
    height: 30,
    marginTop: -15,
    marginLeft: -3,
  },
};


/*!
* Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
* Copyright 2015 Daniel Cardoso <@DanielCardoso>
* Licensed under MIT
*/
