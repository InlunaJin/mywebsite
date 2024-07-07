import React from 'react';
import './Info.css'; // 引入CSS文件

function Info() {
  // 使用公共 URL 路径来访问图片
  const imageUrl = process.env.PUBLIC_URL + '/img/head.png';

  return (
    <div id="info">
      <div className="info-container">
        {/* 背景横线 */}
        <div className="background-line"></div>
        {/* 图片容器 */}
        <div className="image-container">
          <img src={imageUrl} alt="头像图片" className="image" />
        </div>
        {/* 文字描述 */}
        <div className="text-container">
        <h1>林迺鈞</h1>
          <p>跨領域AI提示工程師</p>
          <p>inlujajin@gmail.com</p>
          <p></p>
          <h1>學經歷</h1>
          <p>國立臺北藝術大學</p>
          <p>愛迪斯科技-互動工程師</p>
          <p>雷亞遊戲-AI技術美術</p>
          <p></p>
          <h1>多媒體技能</h1>
          <p>程式-Unity開發、Python、Arduino、React、ReactNative</p>
          <p>美術-Blender、Live2D、Premiere、AfterEffect、Photoshop、Illustrator、MarvelousDesigner</p>
          
        </div>
      </div>
    </div>
  );
}

export default Info;
