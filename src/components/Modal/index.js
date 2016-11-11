import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Styles
import styles from './styles';

const propTypes = {
  headerContent: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  footerContent: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClosing: PropTypes.func.isRequired,
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.onClosing();
  }

  render() {
    const { headerContent, footerContent, body, isOpen } = this.props;


    return (
      <div style={[styles.Modal, !isOpen && styles.ModalHidden]}>
        <div style={[styles.mWindow, !isOpen && styles.mWindowHidden]}>

          <div style={styles.mWindowHeader}>
            <div style={styles.mWindowHeaderContent}>{headerContent}</div>
            <button style={styles.mWindowCloseIcon} onClick={this.close}>
              &times;
            </button>
          </div>

          <div style={styles.mWindowBody}>{body}</div>

          <div style={styles.mWindowFooter}>
            <div style={styles.mWindowFooterContent}>{footerContent}</div>
            <button style={styles.mWindowFooterButton}>
              Cancel
            </button>
            <button style={styles.mWindowFooterButtonOk}>
              Accept Terms
            </button>
          </div>

        </div>
        <div style={styles.mBackdrop} onClick={this.close} />
      </div>
    );
  }

}

Modal.propTypes = propTypes;
Modal.defaultProps = {
  headerContent: 'Hello World',
  footerContent: 'footer',
  body: 'This is the body of the modal',
};

export default Radium(Modal);
