import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from './styles';

const propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  cover: PropTypes.bool,
};

const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  componentDidMount() {
    addEventListener('keyup', this.handleKeyup);
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
    const { slideIndex } = this.state;
    const translateX = `translateX(-${slideIndex * 100}%)`;

    return (
      <div style={styles.ImageSlider}>
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
        <div style={styles.thumbnails}>
          <div style={styles.vertFiller} />
          {images.map((imgSrc, i) =>
            <button
              key={`thumb${i}`}
              onClick={() => this.setState({ slideIndex: i })}
              style={[
                styles.thumbnail,
                { backgroundImage: `url(${imgSrc})` },
                i === slideIndex ? styles.thumbnailCurrent : {},
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
};

export default Radium(ImageSlider);
