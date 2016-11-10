/*
 * Tooltip styles
 */

const $tooltipArrowHeight = 6;
const $tooltipZ = 999;

export default {
  'Tooltip': {
    display: 'inline-block',

    tooltipWrapper: {
      display: 'block',
      position: 'relative',

      tooltipBubble: {
        position: 'absolute',
        textAlign: 'center',
        bottom: `calc(100% + ${$tooltipArrowHeight})`,
        left: 0,
        display: 'inline-block',
        backgroundColor: 'rgba(0,0,0,08)',
        borderRadius: 3,
        minHeight: 30,
        minWidth: 100,
        padding: 6,
        color: '#fff',
        zIndex: $tooltipZ,
        fontSize: 12,
        boxSizing: 'border-box',

        '&:after': {
          content: ' ',
          width: 0,
          height: 0,
          borderLeft: `${$tooltipArrowHeight} solid transparent`,
          borderRight: `${$tooltipArrowHeight} solid transparent`,
          borderTop: `${$tooltipArrowHeight} solid rgba(0,0,0,08)`,
          position: 'absolute',
          bottom: -$tooltipArrowHeight,
          left: `calc(50% - ${$tooltipArrowHeight})`,
        },
      },
    },
  },
};
