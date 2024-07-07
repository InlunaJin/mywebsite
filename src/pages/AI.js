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
    { img: process.env.PUBLIC_URL + '/img/SD.png', description: 'StableDiffusion-webui-活用及研究插件等繪圖工具，並開發流程' },
    { img: process.env.PUBLIC_URL + '/img/comfy.png', description: 'ComfyUI-活用及研究插件等繪圖工具，並開發流程' },
    { img: process.env.PUBLIC_URL + '/img/Train.png', description: 'kohyass-webui-進行特定圖像生成模型訓練' },
    { img: process.env.PUBLIC_URL + '/img/RVC.png', description: 'RVC-模仿特定人物音色' },
    { img: process.env.PUBLIC_URL + '/img/TextGen.png', description: 'TextGeneration-webui透過大型語言模型進行角色扮演及對話' }
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
            <p></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AI;
