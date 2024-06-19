import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css'; // 確保你的樣式被正確導入

// 引入新的页面组件
import Info from './pages/Info';
import Art from './pages/Art';
import AI from './pages/AI';
import Program from './pages/Program';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 這將使滾動動作平滑進行
    });
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };

  const [currentText, setCurrentText] = useState('標題');
  const [newText, setNewText] = useState('標題');
  const [newTextAnimation, setNewTextAnimation] = useState('標題'); // 定义 newTextAnimation 状态及其更新函数
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isSidebarVisible, setIsSidebarVisible] = useState(true); // 默认为true，使侧边栏可见

  const COLORS = useMemo(() => ({
    oddSectionBackground: '#7EC0FC',
    evenSectionBackground: '#004B8F',
  }), []);
  const [sidebarBgColor, setSidebarBgColor] = useState(COLORS.oddSectionBackground); // 初始背景色
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = "Your Website Title Here.";
  }, []);

  useEffect(() => {
    if (newText !== currentText) {
      setNewTextAnimation('fadeOutToLeft');
    }
  }, [newText, currentText]);

  useEffect(() => {
    if (newTextAnimation === 'fadeOutToLeft') {
      const timer = setTimeout(() => {
        setCurrentText(newText);
        setNewTextAnimation('fadeInFromRight');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [newTextAnimation, newText]);

  const handleScroll = useCallback(() => {
    const halfWindowHeight = window.innerHeight / 2;
    const scrollPosition = window.pageYOffset + halfWindowHeight;

    const positions = {
      info: document.getElementById('info') ? document.getElementById('info').offsetTop : 0,
      art: document.getElementById('art') ? document.getElementById('art').offsetTop : 0,
      ai: document.getElementById('ai') ? document.getElementById('ai').offsetTop : 0,
      program: document.getElementById('program') ? document.getElementById('program').offsetTop : 0,
    };

    if (scrollPosition >= positions.info && scrollPosition < positions.art) {
      setNewText('資訊');
      setSidebarBgColor(COLORS.oddSectionBackground);
    } else if (scrollPosition >= positions.art && scrollPosition < positions.ai) {
      setNewText('美術');
      setSidebarBgColor(COLORS.evenSectionBackground);
    } else if (scrollPosition >= positions.ai && scrollPosition < positions.program) {
      setNewText('AI應用');
      setSidebarBgColor(COLORS.oddSectionBackground);
    } else if (scrollPosition >= positions.program) {
      setNewText('程式');
      setSidebarBgColor(COLORS.evenSectionBackground);
    }
  }, [COLORS, setNewText, setSidebarBgColor]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="App">
      <div className="header">
        <button className="menuButton" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M24 8L8 24M8 8L24 24" stroke="#171819" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 16H28M4 8H28M4 24H28" stroke="#171819" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          )}
        </button>
        <div className={`links ${isMenuOpen ? 'show' : ''}`}>
          <button className="linkButton" onClick={() => scrollToSection('info')}>信息</button>
          <button className="linkButton" onClick={() => scrollToSection('art')}>艺术</button>
          <button className="linkButton" onClick={() => scrollToSection('ai')}>人工智能</button>
          <button className="linkButton" onClick={() => scrollToSection('program')}>编程</button>
        </div>
      </div>

      <div className="content" style={{ paddingTop: '60px' }}>
        <div className="fixedBox" style={{ backgroundColor: sidebarBgColor }}>

          <div className={`verticalText ${newTextAnimation}`}>{currentText}</div>
        </div>
        <Info id="info" />
        <Art id="art" />
        <AI id="ai" />
        <Program id="program" />
        <button onClick={scrollToTop} className="scrollToTopButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M30 25L20 15L10 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
