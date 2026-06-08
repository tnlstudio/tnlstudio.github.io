import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Talents from './pages/Talents';
import Content from './pages/Content';
import Apply from './pages/Apply';
import Fanworks from './pages/Fanworks';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';

function App() {
  return (
    <HashRouter>
      <div style={{ 
        fontFamily: "'Pretendard', -apple-system, sans-serif",
        backgroundColor: '#0a0a0f',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navigation />
        
        {/* 컨텐츠 영역: 헤더 높이만큼 띄워줌 */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/content" element={<Content />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/fanworks" element={<Fanworks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
