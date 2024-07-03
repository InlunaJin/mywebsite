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
          <p>这是一张头像图片</p>
          <p>您可以在这里添加更多描述</p>
          <p>根据需要添加更多行</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
