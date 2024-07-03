import React, { useState } from 'react';
import './modelviewer.css'; // 導入 CSS 檔案
const models = [
    { id: 1, name: 'Model L1', url: 'https://sketchfab.com/models/8a099145f22e4720b69b1016a59c4e65/embed', description: '描述 L1' },
    { id: 2, name: 'Model A', url: 'https://sketchfab.com/models/9b5c0bf206324f3891d5ac789bc76598/embed', description: '描述 L2' },
    { id: 3, name: 'Model T', url: 'https://sketchfab.com/models/4ead181a0ebb4576b1583964bceccf21/embed', description: '描述 L1' },
    { id: 4, name: 'Model H', url: 'https://sketchfab.com/models/89689ec8504d437f9233041ecf50b935/embed', description: '描述 L1' },
    { id: 5, name: 'Model C', url: 'https://sketchfab.com/models/8ba3aef741c94fc8b03787741bd8539e/embed', description: '描述 L1' },
    { id: 6, name: 'Model P', url: 'https://sketchfab.com/models/d1e9e7374bcf4b5ba2311580973fdd79/embed', description: '描述 L1' },
    { id: 7, name: 'Model S', url: 'https://sketchfab.com/models/25ae8582cc8b4702b370a885d54e3084/embed', description: '描述 L1' },
    { id: 8, name: 'Model L2', url: 'https://sketchfab.com/models/201c86c6975444caaecbc20632352753/embed', description: '描述 L1' },
    { id: 9, name: 'Model 0', url: 'https://sketchfab.com/models/025c6aa6966e4dd9840ef9ab15c0fe5d/embed', description: '描述 L1' },
    { id: 10, name: 'Model J', url: 'https://sketchfab.com/models/8245d948c6c045bcb9af3f7523bd2a52/embed', description: '描述 L1' }
];

function ModelViewer() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? models.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex === models.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="model-viewer-container">
            <button onClick={handlePrev} className="model-viewer-button">上一個</button>
            <div>
                <h1>{models[currentIndex].description}</h1>
                <iframe
                    title="Sketchfab Model"
                    src={models[currentIndex].url}
                    width="640"
                    height="480"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    frameBorder="0"
                ></iframe>
            </div>
            <button onClick={handleNext} className="model-viewer-button">下一個</button>
        </div>
    );
}

export default ModelViewer;