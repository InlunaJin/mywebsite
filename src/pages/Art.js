import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your Art.css stylesheet
import './Art.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Art() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const videos = [
    { id: 'RTftwYWpTSc', description: 'Blender 3D角色動畫製作，自行建模、綁骨架、繪製權重，並套用MMD動作檔案再修正部分，使用布料模擬裙子飄動效果' },
    { id: 'ysnQedT2g9Y', description: '3DSMAX 吊車、吊籠等場景物件製作' },
    { id: 'R3btI6t1sYM', description: 'Blender 3D角色動畫製作，自行建模、綁骨架、繪製權重，並套用MMD動作檔案再修正部分' },
    { id: 'VSDr546BJsk', description: 'AfterEffect 3D影像合成練習' },
    { id: 'E84PmQ38Vr4', description: 'Live2D 角色繪製拆件，動作調整等基礎操作' },
  ];

  return (
    <div id="art" className="art-container">
      <h1>美術製作</h1>
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
              className="art-iframe"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
            <p></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Art;
