const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
