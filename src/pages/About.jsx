import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0f', color: '#fff' }}>
      <HeroSection />
      <VisionSection />
      <TechnologySection />
      <ValuesSection />
      <TimelineSection />
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
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.4
      }} />

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
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
          fontSize: '20px',
          opacity: 0.8,
          lineHeight: '1.8',
          color: '#cbd5e0'
        }}>
          새로운 세계에서의 즐거움을 제공하는<br />
          차세대 VTuber 매니지먼트 스튜디오
        </p>
      </motion.div>
    </section>
  );
};

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '120px 60px',
        background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a0f2e 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          className="about-section-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 style={{
            fontSize: '56px',
            fontWeight: '700',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            VISION & UNIVERSE
          </h2>
          <p style={{
            fontSize: '19px',
            lineHeight: '2',
            color: '#cbd5e0',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            V-AGENCY는 단순한 매니지먼트를 넘어 하나의 거대한 유니버스를 창조합니다.
            <br />
            각 크리에이터가 가진 고유의 스토리와 세계관이 맞물려
            <br />
            팬 여러분께 몰입감과 감동을 선사합니다.
          </p>
        </motion.div>

        <div className="about-feature-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          marginBottom: '100px'
        }}>
          {[
            {
              icon: '🌌',
              title: 'Deep Worldview',
              desc: '멤버별 고유의 기원과 스토리가 연결된 방대한 시네마틱 유니버스 구축. 각 크리에이터의 배경 스토리가 하나의 큰 세계관으로 이어집니다.'
            },
            {
              icon: '🎙️',
              title: 'Premium Music',
              desc: '탑티어 프로듀서진과 협업한 고품질 오리지널 디스코그래피 전개. 정규 앨범부터 싱글까지 다양한 음원을 선보입니다.'
            },
            {
              icon: '🤝',
              title: 'Fandom First',
              desc: '팬들과 실시간으로 호흡하고 서사를 함께 만들어가는 양방향 소통. 팬 참여형 콘텐츠로 함께 성장합니다.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '50px 35px',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Hover glow effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05), transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '56px', marginBottom: '24px' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '18px',
                  color: '#fff'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#a0aec0',
                  lineHeight: '1.8',
                  fontSize: '15px'
                }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            borderRadius: '24px',
            padding: '60px',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#fff'
          }}>
            Our Mission
          </h3>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.9',
            color: '#cbd5e0',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            "가상과 현실의 경계를 넘어, 모든 이에게 특별한 경험을 선사하고
            <br />
            크리에이터가 자신의 꿈을 마음껏 펼칠 수 있는 무대를 만듭니다."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 60px',
        background: 'linear-gradient(to bottom, #1a0f2e 0%, #0f0a1e 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '25px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            VIRTUAL TECHNOLOGY
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            최첨단 기술로 구현하는 차세대 버추얼 프로덕션
          </p>
        </motion.div>

        <div className="about-tech-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left - Tech Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '32px',
              color: '#a78bfa',
              marginBottom: '25px',
              fontWeight: '700'
            }}>
              State-of-the-art Studio
            </h3>
            <p style={{
              color: '#cbd5e0',
              lineHeight: '1.9',
              marginBottom: '40px',
              fontSize: '16px'
            }}>
              자체 구축한 모션 캡처 스튜디오와 실시간 렌더링 시스템을 통해
              크리에이터의 미세한 표정과 움직임까지 완벽하게 구현합니다.
              최신 기술과 전문 인력이 결합되어 최고 품질의 방송을 제공합니다.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { icon: '🎯', title: '고정밀 광학식 모션 캡처 시스템', desc: '1mm 단위의 정밀한 움직임 포착' },
                { icon: '😊', title: '실시간 페이셜 캡처 연동', desc: '52개 표정 포인트 실시간 추적' },
                { icon: '🎨', title: '3D 모델링 및 물리 엔진 적용', desc: 'Unity & Unreal Engine 기반' },
                { icon: '📡', title: '4K 실시간 스트리밍 지원', desc: '초저지연 방송 시스템' }
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{
                    background: 'rgba(102, 126, 234, 0.08)',
                    padding: '20px 24px',
                    borderRadius: '16px',
                    border: '1px solid rgba(102, 126, 234, 0.15)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                    <span style={{ fontSize: '24px' }}>{tech.icon}</span>
                    <div>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#fff',
                        marginBottom: '6px'
                      }}>
                        {tech.title}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: '#a0aec0'
                      }}>
                        {tech.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: '500px',
              background: 'linear-gradient(135deg, #1e1e3f, #000)',
              borderRadius: '24px',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  borderRadius: '50%',
                  border: '2px solid rgba(102, 126, 234, 0.3)',
                  zIndex: i
                }}
              />
            ))}

            <div style={{
              fontSize: '100px',
              opacity: 0.5,
              position: 'relative',
              zIndex: 10
            }}>
              ⚙️
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: 'Innovation',
      icon: '🚀',
      desc: '끊임없는 기술 혁신과 창의적 시도',
      color: '#667eea'
    },
    {
      title: 'Quality',
      icon: '💎',
      desc: '타협 없는 최고 품질 추구',
      color: '#a78bfa'
    },
    {
      title: 'Trust',
      icon: '🤝',
      desc: '투명하고 신뢰할 수 있는 운영',
      color: '#764ba2'
    },
    {
      title: 'Respect',
      icon: '❤️',
      desc: '크리에이터 중심의 상호 존중',
      color: '#ff7675'
    }
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 60px',
        background: '#0a0a0f'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: '48px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          CORE VALUES
        </motion.h2>

        <div className="about-values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              style={{
                textAlign: 'center',
                padding: '50px 30px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.4s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${value.color}60`;
                e.currentTarget.style.boxShadow = `0 10px 40px ${value.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>{value.icon}</div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '12px',
                color: value.color
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#a0aec0',
                lineHeight: '1.6'
              }}>
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { year: '2026', event: 'T&L STUDIO 프로젝트 출범', detail: '새로운 버추얼 크리에이터 발굴 및 스튜디오 기획 시작' },
    { year: '2026', event: 'TBD', detail: '준비 중입니다.' }
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 60px',
        background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a0f2e 100%)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: '48px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '100px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          OUR JOURNEY
        </motion.h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #667eea, #764ba2)',
            transform: 'translateX(-50%)'
          }} />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '80px',
                position: 'relative'
              }}
            >
              <div style={{
                width: '45%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '20px',
                padding: '35px',
                position: 'relative'
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [i % 2 === 0 ? 'right' : 'left']: '-18px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  transform: 'translateY(-50%)',
                  border: '4px solid #0a0a0f',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }} />

                <div style={{
                  fontSize: '40px',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '15px'
                }}>
                  {item.year}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '12px'
                }}>
                  {item.event}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: '#a0aec0'
                }}>
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
