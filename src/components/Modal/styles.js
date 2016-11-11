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
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 20,
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
