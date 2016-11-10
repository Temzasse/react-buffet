/*
 * Tooltip styles
 */

const tooltipArrowHeight = 6;
const tooltipZ = 999;

export default {
  'Tooltip': {
    display: 'inline-block',
  },

  tooltipWrapper: {
    display: 'block',
    position: 'relative',
  },

  tooltipBubble: {
    position: 'absolute',
    textAlign: 'center',
    bottom: `calc(100% + ${tooltipArrowHeight}px)`,
    left: 0,
    display: 'inline-block',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 3,
    minHeight: 30,
    minWidth: 100,
    padding: 6,
    color: '#fff',
    zIndex: tooltipZ,
    fontSize: 12,
    boxSizing: 'border-box',
  },

  tooltipArrow: {
    width: 0,
    height: 0,
    borderLeft: `${tooltipArrowHeight}px solid transparent`,
    borderRight: `${tooltipArrowHeight}px solid transparent`,
    borderTop: `${tooltipArrowHeight}px solid rgba(0,0,0,0.8)`,
    position: 'absolute',
    bottom: `-${tooltipArrowHeight}px`,
    left: `calc(50% - ${tooltipArrowHeight}px)`,
  },
};
