import React from 'react';
import ReactSlick from 'react-slick';

import Icon from '../../components/Icon/Icon';

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

const Slider = ({ className, settings, slideComponent, slides }) => {
  if (Boolean(slides?.length) === false) return;

  const defaultSettings = {
    ...settings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const Slide = slideComponent;
  return (
    <ReactSlick className={className} {...defaultSettings}>
      {slides.map((slide) => (
        <Slide key={slide.id || slide.date} slide={slide} />
      ))}
    </ReactSlick>
  );
};

export default Slider;
