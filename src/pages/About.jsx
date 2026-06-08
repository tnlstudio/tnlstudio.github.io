import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0f', color: '#fff' }}>
      <HeroSection />
      <VisionSection />
      <SupportSection />
      <MissionSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="about-hero" style={{
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1e1e3f 0%, #0a0a0f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.4
      }} />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '20%', left: '10%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)',
          filter: 'blur(60px)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '900px', padding: '0 40px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: 'rgba(167, 139, 250, 0.1)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            borderRadius: '20px',
            fontSize: '13px',
            color: '#a78bfa',
            letterSpacing: '3px',
            marginBottom: '30px',
            fontWeight: '600'
          }}
        >
          WHO WE ARE
        </motion.div>

        <h1 className="about-hero-title" style={{
          fontSize: '72px',
          fontWeight: '800',
          marginBottom: '30px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.1',
          letterSpacing: '-2px'
        }}>
          ABOUT US
        </h1>
        <p style={{
          fontSize: '19px',
          lineHeight: '1.9',
          color: '#cbd5e0',
          opacity: 0.85
        }}>
          가능성을 가진 크리에이터가<br />
          혼자서는 어려운 시작을 이어갈 수 있도록<br />
          함께 성장하는 스튜디오
        </p>
      </motion.div>
    </section>
  );
};

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paragraphs = [
    {
      delay: 0.2,
      text: 'T&L의 시작은 빛날 수 있는 여러 아티스트들의 가능성을 지켜보는 데에서 시작했습니다.',
    },
    {
      delay: 0.35,
      text: '재능(Talent)은 그 스스로 빛날 수 있는 가능성을 언제나 품고 있지만,\n그 빛은 때로 희미하고 연약하여 쉽게 사라지기도 합니다.',
    },
    {
      delay: 0.5,
      text: '우리는 재능이 만개하기 위해서는\n그에 따른 기회와 환경, 그리고 작은 행운(Luck)이 필요하다는 것을 알게 되었습니다.',
    },
    {
      delay: 0.65,
      highlight: true,
      text: '스스로 무한한 가능성을 지닌 당신(Talent)에게\n그 빛을 더욱 밝게 만들어줄 수 있는 작은 행운(Luck)이 되는 것,\n그것이 T&L Studio의 바람입니다.',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 60px',
        background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a0f2e 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <motion.div
          className="about-section-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            VISION
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: para.delay }}
              style={{
                fontSize: para.highlight ? '18px' : '17px',
                lineHeight: '2',
                color: para.highlight ? '#e2d9f3' : 'rgba(203, 213, 224, 0.7)',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                margin: 0,
                fontWeight: para.highlight ? '500' : '400',
              }}
            >
              {para.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

const supportItems = [
  {
    icon: '📋',
    title: '활동 매니지먼트',
    color: '#667eea',
    lines: [
      '일정 및 활동 방향 정리',
      '콘텐츠 활동 보조',
      '커뮤니티 운영 지원',
    ],
  },
  {
    icon: '🎙️',
    title: 'Essential Setup',
    color: '#a78bfa',
    lines: [
      '방송 시작을 위한 기본 세팅 지원',
      '활동에 필요한 최소 환경 정리',
      '방송 · 콘텐츠 입문 지원',
    ],
  },
  {
    icon: '💡',
    title: 'Creative Support',
    color: '#764ba2',
    lines: [
      '콘텐츠 아이디어 보조',
      '활동 중 필요한 추가 지원',
      '개인 활동을 존중하는 방향',
    ],
  },
];

const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 60px',
        background: 'linear-gradient(to bottom, #1a0f2e 0%, #0a0a0f 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '18px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            함께하는 활동 지원
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: '1.85',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            모든 것을 대신하지 않습니다.<br />
            부족할 수 있는 부분을 함께 채워나갑니다.
          </p>
        </motion.div>

        <div className="about-support-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px'
        }}>
          {supportItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${item.color}28`,
                borderRadius: '24px',
                padding: '40px 32px',
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '16px',
                background: `${item.color}18`,
                border: `1px solid ${item.color}38`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', marginBottom: '24px',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '18px', fontWeight: '700', color: '#fff',
                marginBottom: '20px', margin: '0 0 20px 0',
              }}>
                {item.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {item.lines.map((line, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: item.color, flexShrink: 0, marginTop: '8px',
                    }} />
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.52)', lineHeight: '1.65' }}>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const missions = [
    '가능성을 가진 크리에이터의 시작을 함께한다',
    '재능이 지속될 수 있는 환경을 만든다',
    '더 오래, 더 밝게 빛날 수 있도록 돕는다',
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 60px 120px',
        background: '#0a0a0f',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))',
            border: '1px solid rgba(102,126,234,0.2)',
            borderRadius: '28px',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          <div style={{
            fontSize: '12px', fontWeight: '700', letterSpacing: '3px',
            color: '#a78bfa', marginBottom: '36px',
          }}>
            MISSION
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {missions.map((m, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                style={{
                  fontSize: '18px',
                  color: i === missions.length - 1 ? '#e2d9f3' : 'rgba(255,255,255,0.6)',
                  margin: 0,
                  lineHeight: '1.6',
                  fontWeight: i === missions.length - 1 ? '500' : '400',
                }}
              >
                {m}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
