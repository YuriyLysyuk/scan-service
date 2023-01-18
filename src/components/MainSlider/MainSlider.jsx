import React from 'react';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';

import Slider from '../Slider/Slider';
import SlideIconText from '../SlideIconText/SlideIconText';

const MainSlider = ({ className, slides }) => {
  return (
    <Slider
      className={className}
      settings={settings}
      slideComponent={SlideIconText}
      slides={slides}
    />
  );
};

export default MainSlider;
