import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Styles
import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.onClose();
  }

  render() {
    const { title, children, isOpen } = this.props;

    return (
      <div style={[styles.Modal, !isOpen && styles.ModalHidden]}>
        <div style={[styles.mWindow, !isOpen && styles.mWindowHidden]}>
          <div style={styles.mWindowHeader}>
            <div style={styles.mWindowHeaderContent}>{title}</div>
            <button style={styles.mWindowCloseIcon} onClick={this.close}>
              &times;
            </button>
          </div>
          <div style={styles.mWindowBody}>{children}</div>
        </div>
        <div style={styles.mBackdrop} onClick={this.close} />
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Radium(Modal);
