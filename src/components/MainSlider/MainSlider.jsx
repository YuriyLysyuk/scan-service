import React from 'react';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';

import Slider from '../Slider/Slider';
import SlideIconText from '../SlideIconText/SlideIconText';

import { MAIN_SLIDES } from '../../constants';

const MainSlider = ({ className }) => {
  return (
    <Slider
      className={className}
      settings={settings}
      slideComponent={SlideIconText}
      slides={MAIN_SLIDES}
    />
  );
};

export default MainSlider;
