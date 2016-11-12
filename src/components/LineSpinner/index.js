import React, { PropTypes, Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import styles from './styles';

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

// Helper
function isColorValid(c) {
  const ele = document.createElement('div');
  ele.style.color = c;
  return ele.style.color.length;
}

function range(num) {
  return Array.from(Array(num).keys());
}

/* eslint-disable react/prefer-stateless-function */
const Enhance = Comp => class extends Component {
  render() {
    return (
      <StyleRoot>
        <Comp {...this.props} />
      </StyleRoot>
    );
  }
};
/* eslint-enable */

const LineSpinner = ({ color, size }) => {
  const colorStyles = {};

  if (isColorValid(color)) {
    colorStyles.color = color;
  }

  return (
    <div className='LineSpinner'>
      <div
        style={[
          styles.line,
          styles[`${size}`],
          colorStyles,
        ]}
      >
        {range(8).map(i =>
          <div
            style={[
              styles.lineDiv,
              styles[`line${i + 1}`],
              styles[`${size}Div`],
            ]}
            key={i}
          />,
        )}
      </div>
    </div>
  );
};


LineSpinner.propTypes = propTypes;
LineSpinner.defaultProps = {
  color: 'white',
};

export default Enhance(Radium(LineSpinner));
