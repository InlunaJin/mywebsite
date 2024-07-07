import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your Program.css stylesheet
import './Program.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Program() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const videos = [
    { id: '_MGM9PZ8ies', description: '這是影片1的描述。' },
    { id: 'BrFpUctIYMg', description: '這是影片2的描述。' },
    { id: 'bCp8QVClOSY', description: '這是影片3的描述。' },
    { id: 'E_hYLfHB1L0', description: '這是影片4的描述。' },
    { id: 'MODXDjFj2N0', description: '這是影片5的描述。' },
    { id: 'vMYsr1S-2D4', description: '這是影片6的描述。' },
    { id: 'vkewo2w-Aec', description: '這是影片7的描述。' },
    { id: '26gXLra-rg0', description: '這是影片8的描述。' },
    { id: '2M9lGzphDlM', description: '這是影片9的描述。' },
    { id: 'QKdk8Z7HM1g', description: '這是影片10的描述。' },
    { id: 'gj_Dl7OoPaQ', description: '這是影片11的描述。' },
    { id: 'N2ZpRhOgz_Q', description: '這是影片12的描述。' }
  ];

  return (
    <div id="program" className="program-container">
      <h1>程式開發</h1>
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
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <iframe
              className="program-iframe"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Program;
