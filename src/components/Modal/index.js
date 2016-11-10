import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Styles
import styles from './styles';

const propTypes = {
  headerText: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  footerText: PropTypes.string,
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.open();
    }, 3000);
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
    window.setTimeout(() => {
      this.open();
    }, 2000);
  }

  render() {
    const { isOpen } = this.state;
    const { headerText, footerText, body } = this.props;


    return (
      <div style={[styles.Modal, !isOpen && styles.ModalHidden]}>
        <div style={[styles.mWindow, !isOpen && styles.mWindowHidden]}>

          <div style={styles.mWindowHeader}>
            <div style={styles.mWindowHeaderContent}>{headerText}</div>
            <div style={styles.mWindowCloseIcon} onClick={this.close}>
              &times;
            </div>
          </div>

          <div style={styles.mWindowBody}>{body}</div>

          <div style={styles.mWindowFooter}>
            <div style={styles.mWindowFooterContent}>{footerText}</div>
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
  headerText: 'Hello World',
  footerText: 'footer',
  body: 'This is the body of the modal',
};

export default Radium(Modal);
