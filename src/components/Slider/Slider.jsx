import React from 'react';
import ReactSlick from 'react-slick';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';
import Icon from '../Icon/Icon';

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="next-arrow" />
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="prev-arrow" />
  </div>
);

const Slider = ({ className, isLoading, settings, slideComponent, slides }) => {
  const defaultSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...settings,
  };

  const Slide = slideComponent;

  return (
    <ReactSlick className={className} {...defaultSettings}>
      {isLoading && (
        <div className={styles.loading}>
          <Spinner extClass={styles.spinner} />
          <p className={styles.text}>Загружаем данные</p>
        </div>
      )}

      {slides &&
        slides.map((slide) => (
          <Slide key={slide.id || slide.date} slide={slide} />
        ))}
    </ReactSlick>
  );
};

export default Slider;
