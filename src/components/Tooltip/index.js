import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from './styles';

const propTypes = {
  children: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
};

// Helper
function isColorValid(c) {
  const ele = document.createElement('div');
  ele.style.color = c;
  return ele.style.color.length;
}

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);

    this.state = {
      showTooltip: false,
      lPos: null,
    };
  }

  showTooltip() {
    const tipNode = this.tooltipRef;
    const tipWrapNode = this.tooltipWrapRef;
    const lPos = -(tipNode.offsetWidth / 2) + (tipWrapNode.offsetWidth / 2);

    this.setState({ showTooltip: true, lPos });
  }

  hideTooltip() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { content, children, bg, color } = this.props;
    const { showTooltip, lPos } = this.state;

    const tooltipVisibility = showTooltip ? 'visible' : 'hidden';
    const customColors = {};

    // Add custom colors to tooltip bubble if passed as props
    if (bg) {
      if (isColorValid(bg)) {
        customColors.backgroundColor = bg;
        customColors.borderColor = bg;
      }
    }
    if (color) {
      if (isColorValid(color)) customColors.color = color;
    }

    return (
      <div style={styles.Tooltip}>
        <div
          ref={(ref) => { this.tooltipWrapRef = ref; }}
          style={styles.tooltipWrapper}
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <div
            ref={(ref) => { this.tooltipRef = ref; }}
            style={[
              styles.tooltipBubble,
              customColors,
              { visibility: tooltipVisibility, left: lPos },
            ]}
          >
            <span style={styles.tooltipArrow} />
            {content}
          </div>
          {children}
        </div>
      </div>
    );
  }
}


Tooltip.propTypes = propTypes;
Tooltip.defaultProps = {
  content: 'tooltip content',
};

export default Radium(Tooltip);
