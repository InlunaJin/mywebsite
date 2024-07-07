import React, { useCallback } from 'react';
import './App.css';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

// 引入页面组件
import Info from './pages/Info';
import Art from './pages/Art';
import AI from './pages/AI';
import Program from './pages/Program';
import DDD from './pages/DDD';

function App() {
  // 粒子效果配置
  
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#007bff" // 藍色系
      },
      shape: {
        type: ""
      },
      opacity: {
        value: 0.3 // 可以調整為較低透明度以減少視覺干擾
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#0056b3", // 深藍色連結
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.3, // 降低移動速度
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
          opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles className="Particles" options={particlesOptions} init={particlesInit} />
      <div className="content">
        <Info id="info" />
        <AI id="ai" />
        <Program id="program"/>
        <Art id="art" />
        <DDD id="ddd" />
      </div>
    </div>
  );
}

export default App;
