import React from 'react';
import classNames from 'classnames';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';

import Slider from '../Slider/Slider';
import HistogramsSlide from '../HistogramsSlide/HistogramsSlide';

const HistogramsSlider = ({ className, isLoading, slides }) => {
  const sliderClass = classNames('histograms-slider', className);

  return (
    <Slider
      className={sliderClass}
      settings={settings}
      slideComponent={HistogramsSlide}
      slides={slides}
    />
  );
};

export default HistogramsSlider;
