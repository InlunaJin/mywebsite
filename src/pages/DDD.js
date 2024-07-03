import React from 'react';
import ModelViewer from './ModelViewer'; // 确保路径正确
import './DDD.css';

function DDD() {
  return (
    <div id="DDD" >
      <h1>3D模型展示</h1>
      <ModelViewer className="model-viewer" /> {/* 使用CSS类名 */}
    </div>
  );
}

export default DDD;
