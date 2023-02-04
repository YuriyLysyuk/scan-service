import React from 'react';
import classNames from 'classnames';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';

import Slider from '../Slider/Slider';
import SlideIconText from '../SlideIconText/SlideIconText';

const MainSlider = ({ className, slides }) => {
  const sliderClass = classNames('main-slider', className);

  return (
    <Slider
      className={sliderClass}
      settings={settings}
      slideComponent={SlideIconText}
      slides={slides}
    />
  );
};

export default MainSlider;
