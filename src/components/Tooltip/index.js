import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import styles from './styles';

const propTypes = {
  children: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
};

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
    const { content, children } = this.props;
    const { showTooltip, lPos } = this.state;
    const tooltipVisibility = showTooltip ? 'visible' : 'hidden';

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
              { visibility: tooltipVisibility, left: lPos },
            ]}
          >
            {content}
          </div>
          {children}
        </div>
      </div>
    );
  }
}


Tooltip.propTypes = propTypes;
// Tooltip.defaultProps = {};

export default Radium(Tooltip);
