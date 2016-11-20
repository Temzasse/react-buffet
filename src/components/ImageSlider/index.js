import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Color from 'color';
import styles from './styles';

const propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  cover: PropTypes.bool,
  themeColor: PropTypes.string,
};

const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);

    // Generate theme colors
    const colorMain = Color(props.themeColor);

    this.state = {
      slideIndex: 0,
      colors: {
        main: colorMain.rgbString(),
        light: colorMain.lighten(0.1).rgbString(),
        lighter: colorMain.lighten(0.2).rgbString(),
        lightest: colorMain.lighten(0.6).rgbString(),
        dark: colorMain.darken(0.1).rgbString(),
        darker: colorMain.darken(0.2).rgbString(),
        darkest: colorMain.darken(0.6).rgbString(),
      },
    };
  }

  componentDidMount() {
    addEventListener('keyup', this.handleKeyup);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.themeColor !== nextProps.themeColor) {
      const newColorMain = Color(nextProps.themeColor);

      const colors = {
        main: newColorMain.rgbString(),
        light: newColorMain.lighten(0.1).rgbString(),
        lighter: newColorMain.lighten(0.2).rgbString(),
        lightest: newColorMain.lighten(0.6).rgbString(),
        dark: newColorMain.darken(0.1).rgbString(),
        darker: newColorMain.darken(0.2).rgbString(),
        darkest: newColorMain.darken(0.6).rgbString(),
      };

      this.setState({ colors });
    }
  }

  componentWillUnmount() {
    removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup({ keyCode }) {
    // TODO check if component is visible
    if (keyCode === ARROW_LEFT) this.prevSlide();
    if (keyCode === ARROW_RIGHT) this.nextSlide();
  }

  nextSlide() {
    const { slideIndex } = this.state;
    const { images } = this.props;

    if ((slideIndex + 1) >= images.length) {
      this.setState({ slideIndex: 0 });
    } else {
      this.setState({ slideIndex: slideIndex + 1 });
    }
  }

  prevSlide() {
    const { slideIndex } = this.state;
    const { images } = this.props;

    if (slideIndex === 0) {
      this.setState({ slideIndex: images.length - 1 });
    } else {
      this.setState({ slideIndex: slideIndex - 1 });
    }
  }

  render() {
    const { images, cover } = this.props;
    const { slideIndex, colors } = this.state;
    const translateX = `translateX(-${slideIndex * 100}%)`;

    return (
      <div style={[styles.ImageSlider, { backgroundColor: colors.light }]}>
        <div style={styles.sliderContainer}>
          <div style={[styles.slider, { transform: translateX }]}>
            {images.map((imgSrc, i) =>
              <div
                key={`slide${i}`}
                style={[
                  styles.sliderImage,
                  { backgroundImage: `url(${imgSrc})`,
                    backgroundSize: cover ? 'cover' : 'contain' },
                ]}
              />,
            )}
          </div>
          <button
            key='prevBtn'
            onClick={this.prevSlide}
            style={[styles.slideCtrlBtn, styles.prevBtn]}
          >
            <span>&lt;</span>
          </button>
          <button
            key='nextBtn'
            onClick={this.nextSlide}
            style={[styles.slideCtrlBtn, styles.nextBtn]}
          >
            <span>&gt;</span>
          </button>
        </div>
        <div style={[styles.thumbnails, { backgroundColor: colors.main }]}>
          <div style={styles.vertFiller} />
          {images.map((imgSrc, i) =>
            <button
              key={`thumb${i}`}
              onClick={() => this.setState({ slideIndex: i })}
              style={[
                styles.thumbnail,
                { backgroundImage: `url(${imgSrc})`,
                  backgroundColor: colors.lighter },
                i === slideIndex ?
                [styles.thumbnailCurrent, { borderColor: colors.darkest }] : {},
              ]}
            />,
          )}
          <div style={styles.vertFiller} />
        </div>
      </div>
    );
  }
}


ImageSlider.propTypes = propTypes;
ImageSlider.defaultProps = {
  cover: true,
  themeColor: '#333',
};

export default Radium(ImageSlider);
