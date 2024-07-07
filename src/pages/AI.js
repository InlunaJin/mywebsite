import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your AI.css stylesheet
import './AI.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function AI() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const slides = [
    { img: process.env.PUBLIC_URL + '/img/SD.png', description: '465423168435138431354354413135435438435465423168435138431354354413135435438435465423168435138431354354413135435438435465423168435138431354354413135435438435' },
    { img: process.env.PUBLIC_URL + '/img/comfy.png', description: '描述2' },
    { img: process.env.PUBLIC_URL + '/img/Train.png', description: '描述3' },
    { img: process.env.PUBLIC_URL + '/img/RVC.png', description: '描述4' },
    { img: process.env.PUBLIC_URL + '/img/TextGen.png', description: '描述5' }
  ];

  return (
    <div className="ai-container">
      <h1>使用AI工具</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        onSwiper={(swiper) => swiperRef.current = swiper}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt={`Slide ${index + 1}`} className="ai-image" />
            <p>{slide.description}</p> {/* Show description below each image */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AI;
