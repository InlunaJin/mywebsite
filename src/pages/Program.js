import React, { useState } from 'react';
import './Program.css';  // 引入外部 CSS

function Program() {
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

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => {
      return prevIndex === 0 ? videos.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div id="program" className="program-container">
      <h1>编程页面</h1>
      <p>{videos[currentVideoIndex].description}</p>
      <iframe
  className="program-iframe"
  src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      <div>
        <button onClick={prevVideo} className="program-button">上一个</button>
        <button onClick={nextVideo} className="program-button">下一个</button>
      </div>
    </div>
  );
}

export default Program;
