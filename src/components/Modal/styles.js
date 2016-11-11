export default {
  Modal: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease-in',
    willChange: 'opacity',
    zIndex: 997,
  },

  ModalHidden: {
    pointerEvents: 'none',
    opacity: 0,
  },

  mWindow: {
    width: '96%',
    maxWidth: 500,
    minHeight: 300,
    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.7)',
    transform: 'translateY(0)',
    willChange: 'transform',
    // transition: 'transform 0.2s ease-in',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease-in',
    transitionDuration: '0.2s',
    transitionDelay: '0.1s',
    zIndex: 999,
    backgroundColor: '#fff',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'column',
  },

  mWindowHidden: {
    transform: 'translateY(100%)',
  },

  mWindowHeader: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
  },

  mWindowHeaderContent: {
    flex: 1,
    fontWeight: 700,
    textAlign: 'left',
  },

  mWindowCloseIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 4,
    opacity: 0.7,
    transition: 'opacity 0.1s linear',

    '&:hover': {
      backgroundColor: '#f5f5f5',
      opacity: 1,
    },
  },

  mWindowBody: {
    padding: 8,
    flex: 1,
    textAlign: 'left',
  },

  mWindowFooter: {
    padding: '8px 16px',
    backgroundColor: '#f7f7f7',
    borderTop: '1px solid #eee',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  mWindowFooterContent: {
    flex: 1,
    color: '#888',
    fontSize: 14,
    textAlign: 'left',
  },

  mWindowFooterButton: {
    marginLeft: 16,
    padding: '6px 10px',
    border: '1px solid #ccc',
    backgroundColor: '#eee',
    borderRadius: 3,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#ddd',
    },
  },

  mWindowFooterButtonOk: {
    marginLeft: 16,
    padding: '6px 10px',
    borderRadius: 3,
    cursor: 'pointer',
    backgroundColor: '#a7e0fb',
    border: '1px solid #a7e0fb',

    '&:hover': {
      backgroundColor: '#a7e0fb',
    },
  },

  mBackdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 998,
    cursor: 'pointer',
  },
};
