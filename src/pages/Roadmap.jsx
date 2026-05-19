import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'PHASE 01',
    label: '팀 빌딩',
    current: true,
    items: ['1기생 모집 진행', '제작팀 구성 (편집자·기획자)', '운영 방향 및 콘셉트 정리', '스튜디오 내부 세계관 개발'],
  },
  {
    phase: 'PHASE 02',
    label: '공개 준비',
    current: false,
    items: ['캐릭터 디자인 공개', '공식 SNS 채널 오픈', '콘텐츠 방향 및 포맷 공개', '팬 커뮤니티 채널 개설'],
  },
  {
    phase: 'PHASE 03',
    label: '제작 & 준비',
    current: false,
    items: ['첫 오리지널 콘텐츠 제작', '데뷔 방송 환경 구축', '정기 콘텐츠 스케줄 확정', '팬 커뮤니티 활성화'],
  },
  {
    phase: 'PHASE 04',
    label: '데뷔',
    current: false,
    items: ['데뷔 프로젝트 공식 공개', '오리지널 곡 · 영상 릴리즈', '정식 활동 시작', '팬과 함께하는 첫 이벤트'],
  },
];

const Roadmap = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh', color: '#fff', paddingBottom: '100px' }}>

      {/* Hero */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px', textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-block', padding: '6px 18px',
            background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.35)',
            borderRadius: '20px', fontSize: '12px', fontWeight: '700',
            color: '#a78bfa', letterSpacing: '2px', marginBottom: '28px',
          }}>
            PROJECT ROADMAP
          </div>
          <h1 className="roadmap-hero-title" style={{
            fontSize: '64px', fontWeight: '800', marginBottom: '20px', lineHeight: 1.1,
          }}>
            OUR JOURNEY
          </h1>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '520px',
            margin: '0 auto', lineHeight: '1.75',
          }}>
            T&L STUDIO가 걸어갈 단계별 여정을 소개합니다.<br />
            현재 우리는 첫 번째 단계에 있습니다.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <div className="roadmap-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 60px 0' }}>
        <div style={{ position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '28px',
            bottom: '28px',
            width: '2px',
            background: 'linear-gradient(to bottom, #667eea, rgba(118,75,162,0.3))',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
              >
                {/* Node */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: phase.current
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(255,255,255,0.04)',
                    border: phase.current
                      ? 'none'
                      : '2px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: phase.current ? '0 0 24px rgba(102,126,234,0.5)' : 'none',
                  }}>
                    <span style={{
                      fontSize: '13px', fontWeight: '800',
                      color: phase.current ? '#fff' : 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.5px',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {phase.current && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        background: 'rgba(102,126,234,0.4)',
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: phase.current
                    ? 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.08))'
                    : 'rgba(255,255,255,0.02)',
                  border: phase.current
                    ? '1px solid rgba(102,126,234,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px', padding: '28px 32px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '12px', fontWeight: '800', letterSpacing: '2px',
                      color: phase.current ? '#a78bfa' : 'rgba(255,255,255,0.3)',
                    }}>
                      {phase.phase}
                    </span>
                    <h3 style={{
                      fontSize: '20px', fontWeight: '700', margin: 0,
                      color: phase.current ? '#fff' : 'rgba(255,255,255,0.45)',
                    }}>
                      {phase.label}
                    </h3>
                    {phase.current && (
                      <div style={{
                        padding: '3px 12px',
                        background: 'rgba(102,126,234,0.25)',
                        border: '1px solid rgba(102,126,234,0.5)',
                        borderRadius: '12px', fontSize: '11px',
                        fontWeight: '700', color: '#a78bfa', letterSpacing: '1px',
                      }}>
                        CURRENT
                      </div>
                    )}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, marginTop: '7px',
                          background: phase.current ? '#a78bfa' : 'rgba(255,255,255,0.2)',
                        }} />
                        <span style={{
                          fontSize: '14px', lineHeight: '1.6',
                          color: phase.current ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                        }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: '64px', padding: '24px 32px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', textAlign: 'center',
        }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: '1.75' }}>
            로드맵은 팀 구성 및 운영 상황에 따라 일정이 조정될 수 있습니다.<br />
            변경 사항은 공식 채널을 통해 가장 먼저 알려드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
