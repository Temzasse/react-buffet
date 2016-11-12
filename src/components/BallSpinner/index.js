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

const BallSpinner = ({ color, size }) => {
  const colorStyles = {};

  if (isColorValid(color)) {
    colorStyles.color = color;
  }

  return (
    <div className='BallSpinner'>
      <div
        style={[
          styles.ball,
          styles[`${size}`],
          colorStyles,
        ]}
      >
        {range(8).map(i =>
          <div
            style={[
              styles.ballDiv,
              styles[`ball${i + 1}`],
              styles[`${size}Div`],
            ]}
            key={i}
          />,
        )}
      </div>
    </div>
  );
};


BallSpinner.propTypes = propTypes;
BallSpinner.defaultProps = {
  color: 'white',
};

export default Enhance(Radium(BallSpinner));
