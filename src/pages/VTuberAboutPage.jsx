// src/pages/VTuberAboutPage.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// 내부 섹션 컴포넌트들 (HeroSection, AboutSection, GroupsSection 등)은 
// 올려주신 원본 코드와 동일하게 이 아래에 배치하시거나 별도 파일로 나누면 됩니다.
// 여기서는 올려주신 HeroSection을 예시로 통합합니다.

const HeroSection = () => {
  return (
    <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse at top, #1e1e3f 0%, #0a0a0f 50%)' }}>
      <motion.div animate={{ background: ['radial-gradient(600px circle at 0% 0%, rgba(102, 126, 234, 0.15), transparent)', 'radial-gradient(600px circle at 100% 100%, rgba(118, 75, 162, 0.15), transparent)'] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: 0 }} />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: 'center', zIndex: 2 }}>
        <h1 style={{ fontSize: '80px', fontWeight: '800', background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Shine Together
        </h1>
      </motion.div>
    </section>
  );
};

const VTuberAboutPage = () => {
  return (
    // 최상단 메뉴바 공간을 위해 패딩을 약간 줍니다.
    <div style={{ paddingTop: '80px', fontFamily: "'Pretendard', sans-serif" }}> 
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <GroupsSection /> */}
      {/* <GallerySection /> */}
    </div>
  );
};

export default VTuberAboutPage;