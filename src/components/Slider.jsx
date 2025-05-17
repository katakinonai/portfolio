import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ ImagesDesktop, ImagesMobile }) => {
  return (
    <Swiper
      navigation={true}
      autoHeight={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView="auto"
      // breakpoints={{
      //   // when window width is >= 640px
      //   640: {
      //     width: 640,
      //     slidesPerView: 1,
      //   },
      //   // when window width is >= 768px
      //   768: {
      //     width: 768,
      //     slidesPerView: 2,
      //   },
      // }}
    >
      {ImagesDesktop.map((item, index) => {
        return (
          <SwiperSlide className="desktop-slide" key={index}>
            <img src={item} alt="project" />
          </SwiperSlide>
        );
      })}

      {ImagesMobile.map((item, index) => {
        return (
          <SwiperSlide className="mobile-slide" key={index}>
            <img src={item} alt="project" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Slider.propTypes = {
  ImagesDesktop: PropTypes.arrayOf(PropTypes.string).isRequired,
  ImagesMobile: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
