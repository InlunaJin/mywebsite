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
    { id: '_MGM9PZ8ies', description: '使用Unity製作-以深海潛艇為概念的互動遊戲，能從場館二樓看見一樓為於深海的景色，並有多種於深海出沒的動物可以觀賞。遊戲內可觀察的生物皆以程式模擬游動方式，盡可能模擬該生物真實的游動效果。' },
    { id: 'BrFpUctIYMg', description: '使用Unity製作-以文學家生平故事為主題的牆地投影互動，以雷達感測器作為互動輸入，能在兩個畫面上同時進行點擊與繪畫。' },
    { id: 'bCp8QVClOSY', description: '使用Unity製作-因專案類似需求而開發，能將任意3D模型轉換為 unity內的particlefield，並提供解析度及各種參數調整生成。' },
    { id: 'MODXDjFj2N0', description: '使用Unity製作-因網路上搜尋到的AI 皆為海洋魚類群游，但魚缸內的寵物魚有不同的游動方式，故決定自己以之前開發的AI 為基礎的寵物魚AI。' },
    { id: 'vMYsr1S-2D4', description: '使用Unity製作-以淨化槽工作流程教學為目標的互動教室，利用了魚群游動的AI以及雷達感測器來達到驅趕魚群與投擲石頭堆疊淨化槽的故事目標。' },
    { id: 'vkewo2w-Aec', description: '使用Unity製作-以角色陪伴為主要內容的AR互動遊戲，能放置喜歡的角色進入現實世界。' },
    { id: '26gXLra-rg0', description: '使用Unity製作-使用ARfoundation製作的與漫畫連動的遊戲，透過點擊清理房間中的垃圾來闖關' },
    { id: '2M9lGzphDlM', description: '使用Unity製作-以歷史藏品為主的介紹互動軟體，將物品以主題分類並提供真實掃描的3D模型給遊客360度觀賞' },
    { id: 'gj_Dl7OoPaQ', description: '使用Unity製作-以文物故事發想的民俗歌謠主題的故事及遊戲合輯利用牆地雷達感應來進行互動' },
    { id: 'QKdk8Z7HM1g', description: '使用A-Frame製作-元宇宙流行後開始製作(2022)的個人網頁在3D網頁內互動展示個人作品' },
    { id: 'N2ZpRhOgz_Q', description: '使用Arduino及ReactNative製作-透過NFC讀取占卜符文並傳送到APP由GPT解析問題及運勢' }
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
