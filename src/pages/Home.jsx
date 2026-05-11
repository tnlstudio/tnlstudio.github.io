import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }}>
      {/* Hero Section */}
      <motion.section 
        className="home-hero"
        style={{ 
          height: '100vh', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden', 
          background: 'radial-gradient(ellipse at top, #1e1e3f 0%, #0a0a0f 50%)',
          opacity,
          scale
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(600px circle at 0% 0%, rgba(102, 126, 234, 0.15), transparent)',
              'radial-gradient(600px circle at 100% 100%, rgba(118, 75, 162, 0.15), transparent)',
              'radial-gradient(600px circle at 0% 100%, rgba(102, 126, 234, 0.15), transparent)',
              'radial-gradient(600px circle at 100% 0%, rgba(118, 75, 162, 0.15), transparent)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />

        {/* Enhanced floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0], 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{ 
              position: 'absolute', 
              width: Math.random() * 6 + 2, 
              height: Math.random() * 6 + 2, 
              borderRadius: '50%', 
              background: `rgba(${Math.random() > 0.5 ? '102, 126, 234' : '118, 75, 162'}, 0.6)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(102, 126, 234, 0.5)`,
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`, 
              zIndex: 1 
            }}
          />
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} 
          className="home-hero-content"
          style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            style={{ 
              display: 'inline-block', 
              padding: '10px 28px', 
              border: '1px solid rgba(167, 139, 250, 0.5)', 
              borderRadius: '30px', 
              color: '#a78bfa', 
              fontSize: '13px', 
              letterSpacing: '3px', 
              marginBottom: '30px', 
              background: 'rgba(167, 139, 250, 0.08)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(167, 139, 250, 0.2)',
              fontWeight: '600'
            }}
          >
            PROJECT LAUNCH
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="home-hero-title"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} 
            style={{ 
              fontSize: '90px', 
              fontWeight: '800', 
              margin: '0 0 30px 0', 
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #667eea 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              letterSpacing: '-3px',
              lineHeight: '1.1',
              textShadow: '0 0 80px rgba(102, 126, 234, 0.3)'
            }}
          >
            Shine Together
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="home-hero-subtitle"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.7 }} 
            style={{ 
              fontSize: '22px', 
              color: '#cbd5e0', 
              maxWidth: '700px', 
              lineHeight: '1.8', 
              margin: '0 auto',
              fontWeight: '400'
            }}
          >
            새로운 버추얼 엔터테인먼트의 시작,
            <br />
            T&L STUDIO가 준비 중입니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="home-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              marginTop: '50px' 
            }}
          >
            <motion.button
              onClick={() => navigate('/talents')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              크리에이터 만나기
            </motion.button>

            <motion.button
              onClick={() => navigate('/about')}
              whileHover={{ 
                scale: 1.05, 
                borderColor: '#a78bfa',
                backgroundColor: 'rgba(167, 139, 250, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '16px 40px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
            >
              더 알아보기
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
          style={{ 
            position: 'absolute', 
            bottom: '60px', 
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '3px', 
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: '600'
          }}>
            SCROLL
          </div>
          <div style={{ 
            width: '2px', 
            height: '50px', 
            background: 'linear-gradient(to bottom, rgba(167, 139, 250, 0.8), transparent)', 
            borderRadius: '2px',
            position: 'relative'
          }}>
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#a78bfa',
                boxShadow: '0 0 10px rgba(167, 139, 250, 0.8)'
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Latest Release Section */}
      <LatestReleaseSection />

      {/* Quick Stats Section */}
      <QuickStatsSection />
    </div>
  );
};

const LatestReleaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const showPreparingMessage = () => {
    window.alert('준비 중입니다.');
  };

  return (
    <section 
      ref={ref}
      style={{ 
        padding: '150px 60px', 
        background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a0f2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div className="latest-release-layout" style={{ 
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent)',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        gap: '80px', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              borderRadius: '20px',
              fontSize: '12px',
              color: '#a78bfa',
              letterSpacing: '2px',
              marginBottom: '20px',
              fontWeight: '600'
            }}
          >
            NEW RELEASE
          </motion.div>

          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '700', 
            marginBottom: '20px', 
            color: '#fff',
            lineHeight: '1.2'
          }}>
            LATEST RELEASE
          </h2>

          <h3 style={{ 
            fontSize: '28px', 
            color: '#a78bfa', 
            marginBottom: '25px',
            fontWeight: '600'
          }}>
            Universe 1st Single [STARDUST]
          </h3>

          <p style={{ 
            color: '#cbd5e0', 
            lineHeight: '1.9', 
            marginBottom: '40px',
            fontSize: '17px',
            maxWidth: '500px'
          }}>
            무한한 우주 속에서 빛나는 별가루처럼, 여러분의 마음속에 영원히 남을 첫 번째 이야기. 지금 바로 확인하세요.
          </p>

          <div className="latest-release-actions" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <motion.button 
              onClick={showPreparingMessage}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                padding: '16px 40px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '30px', 
                fontSize: '16px', 
                fontWeight: '600', 
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s'
              }}
            >
              WATCH NOW
            </motion.button>

            <motion.button
              onClick={() => navigate('/content')}
              whileHover={{ 
                scale: 1.05,
                borderColor: '#a78bfa',
                color: '#a78bfa'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '16px 40px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              전체 음원 보기
            </motion.button>
          </div>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div 
          className="release-placeholder"
          role="button"
          tabIndex={0}
          onClick={showPreparingMessage}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              showPreparingMessage();
            }
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          style={{ 
            flex: 1, 
            height: '400px', 
            background: 'linear-gradient(135deg, #1e1e3f 0%, #2d3748 100%)', 
            borderRadius: '24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '1px solid rgba(102, 126, 234, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 10px 50px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Video thumbnail overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            opacity: 0.6
          }} />

          {/* Play button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              zIndex: 1
            }}
          >
            <div style={{ 
              width: 0,
              height: 0,
              borderLeft: '20px solid #667eea',
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              marginLeft: '4px'
            }} />
          </motion.div>

          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            zIndex: 1,
            color: 'rgba(255, 255, 255, 0.62)',
            fontSize: '13px',
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            VIDEO COMING SOON
          </div>

          {/* Corner label */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 16px',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            fontSize: '12px',
            color: '#fff',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            MV
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: '12+', label: '(예시)_크리에이터', icon: '🎭' },
    { number: '500K+', label: '(예시)_구독자', icon: '💫' },
    { number: '50+', label: '(예시)_발매곡', icon: '🎵' },
    { number: '100+', label: '(예시)_방송 시간/주', icon: '📺' }
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 60px',
        background: '#0a0a0f'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          className="quick-stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px'
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '40px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#a0aec0',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
