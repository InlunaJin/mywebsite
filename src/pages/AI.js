import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css'; // Import Swiper styles
import { Navigation } from 'swiper/modules';
import './AI.css'; // Import AI.css stylesheet

function AI() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const images = [
    process.env.PUBLIC_URL + '/img/SD.png',
    process.env.PUBLIC_URL + '/img/comfy.png',
    process.env.PUBLIC_URL + '/img/Train.png',
    process.env.PUBLIC_URL + '/img/RVC.png',
    process.env.PUBLIC_URL + '/img/TextGen.png'
  ];

  // Function to go to the next slide
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Function to go to the previous slide
  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="ai-container">
      <h1>使用AI工具</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[Navigation]}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="ai-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom buttons */}
      <button className="ai-button" onClick={goPrev}>上一张</button>
      <button className="ai-button" onClick={goNext}>下一张</button>
    </div>
  );
}

export default AI;
