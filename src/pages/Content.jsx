import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeDay, setActiveDay] = useState('MON');
  const navigate = useNavigate();

  const categories = ['ALL', 'MUSIC VIDEO', 'COVER', 'LIVE', 'SHORTS'];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const contentLineup = [
    { type: 'MUSIC VIDEO', title: 'Original Song Project', desc: '소속 크리에이터와 함께 만들어갈 오리지널 곡', color: '#667eea', icon: '🎵' },
    { type: 'COVER', title: 'Cover Contents', desc: '인기곡 커버 및 편곡 영상', color: '#ff7675', icon: '🎤' },
    { type: 'LIVE', title: 'Live Streaming', desc: '팬과 소통하는 정기 라이브', color: '#a78bfa', icon: '📡' },
    { type: 'SHORTS', title: 'Short-form Clips', desc: '숏폼 클립 & 하이라이트', color: '#74b9ff', icon: '✂️' },
    { type: 'MUSIC VIDEO', title: 'Creator Showcase', desc: '소속 크리에이터 쇼케이스 영상', color: '#fd79a8', icon: '⭐' },
    { type: 'LIVE', title: 'Behind Story', desc: '콘텐츠 준비 과정 비하인드', color: '#00b894', icon: '📖' },
  ];

  const scheduleData = {
    MON: [{ type: 'LIVE', title: '정기 라이브 방송', desc: '팬들과 소통하는 주간 정기 라이브', color: '#74b9ff' }],
    TUE: [{ type: 'MUSIC', title: '음악 콘텐츠', desc: '커버 영상 또는 오리지널 작업 공개', color: '#ff7675' }],
    WED: [{ type: 'GAME', title: '게임 방송', desc: '다양한 장르의 게임 플레이', color: '#a29bfe' }],
    THU: [{ type: 'TALK', title: '토크 & 일상', desc: '팬과 함께하는 토크 방송', color: '#fd79a8' }],
    FRI: [{ type: 'COLLAB', title: '콜라보 콘텐츠', desc: '멤버 합방 또는 외부 콜라보', color: '#00b894' }],
    SAT: [{ type: 'SHORT', title: '숏폼 업로드', desc: '숏클립 및 하이라이트 영상', color: '#667eea' }],
    SUN: [{ type: 'EVENT', title: '스페셜 이벤트', desc: '팬 이벤트 · Q&A · 특별 방송', color: '#764ba2' }],
  };

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh', color: '#fff', paddingBottom: '100px' }}>

      {/* Featured Hero Section */}
      <section style={{ paddingTop: '100px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px' }}>
          <div
            className="content-featured"
            style={{
              position: 'relative', height: '600px', borderRadius: '24px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #1a0f2e 0%, #0a0a0f 100%)',
              display: 'flex', alignItems: 'flex-end', padding: '60px',
            }}
          >
            {/* Background decoration */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <div style={{
                position: 'absolute', top: '20%', right: '15%',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(102,126,234,0.15), transparent)',
                filter: 'blur(80px)',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,15,1) 0%, rgba(10,10,15,0.2) 60%)',
              }} />
            </div>

            {/* Center visual */}
            <div style={{
              position: 'absolute', top: '50%', left: '60%',
              transform: 'translate(-50%, -50%)', zIndex: 1, textAlign: 'center',
            }}>
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '130px', filter: 'drop-shadow(0 0 50px rgba(102,126,234,0.6))' }}
              >
                ✨
              </motion.div>
              <div style={{
                marginTop: '20px', fontSize: '14px',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '2px', fontWeight: '600',
              }}>
                소속 크리에이터와 함께 공개
              </div>
            </div>

            {/* Text */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '560px' }}>
              <div style={{
                padding: '6px 16px',
                background: 'rgba(102,126,234,0.8)',
                display: 'inline-block', borderRadius: '20px',
                fontSize: '12px', fontWeight: '700',
                marginBottom: '20px', letterSpacing: '1px',
              }}>
                CREATOR PROJECT
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.25' }}>
                소속 크리에이터와 함께 만들어갈<br />오리지널 콘텐츠 프로젝트
              </h1>
              <p style={{ color: '#cbd5e0', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                다양한 재능을 가진 크리에이터와 제작 파트너가 함께<br />
                음악, 영상, 라이브 콘텐츠를 준비하고 있습니다.
              </p>
              <motion.button
                onClick={() => navigate('/apply')}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(102,126,234,0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 36px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff', border: 'none', borderRadius: '30px',
                  fontSize: '16px', fontWeight: '700', cursor: 'pointer',
                  fontFamily: "'Pretendard', sans-serif",
                  boxShadow: '0 4px 20px rgba(102,126,234,0.35)',
                }}
              >
                지원하기
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px', marginTop: '100px' }}>

        {/* Content Lineup */}
        <div style={{ marginBottom: '120px' }}>
          <div className="content-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '8px' }}>CONTENT LINEUP</h2>
              <p style={{ fontSize: '15px', color: '#718096', margin: 0 }}>소속 크리에이터와 함께 공개할 예정 콘텐츠</p>
            </div>
            <div className="content-filter-row" style={{ display: 'flex', gap: '15px' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    background: activeCategory === cat ? '#fff' : 'transparent',
                    color: activeCategory === cat ? '#000' : '#718096',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.2)',
                    borderRadius: '20px', fontSize: '13px', fontWeight: '600',
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

          <div className="content-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {contentLineup.filter(v => activeCategory === 'ALL' || v.type === activeCategory).map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} style={{ cursor: 'default' }}>
                {/* Thumbnail */}
                <div style={{
                  width: '100%', aspectRatio: '16/9',
                  background: `linear-gradient(135deg, #111, ${item.color}30)`,
                  borderRadius: '16px', marginBottom: '15px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${item.color}15, transparent 70%)`,
                  }} />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      fontSize: '48px', position: 'relative', zIndex: 1,
                      filter: `drop-shadow(0 0 16px ${item.color}80)`,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    padding: '4px 10px',
                    background: `${item.color}25`,
                    border: `1px solid ${item.color}40`,
                    borderRadius: '8px', fontSize: '11px',
                    color: item.color, fontWeight: '700', letterSpacing: '0.5px',
                  }}>
                    {item.type}
                  </div>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '6px', lineHeight: '1.4' }}>{item.title}</h3>
                <div style={{ color: '#718096', fontSize: '14px' }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Planned Content Schedule */}
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '8px' }}>PLANNED CONTENT</h2>
            <p style={{ fontSize: '15px', color: '#718096', margin: 0 }}>
              앞으로 운영할 콘텐츠 방향 — 소속 크리에이터와 함께 실제 스케줄을 공개합니다.
            </p>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

          <div style={{
            background: 'rgba(255,255,255,0.02)', borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden',
          }}>
            {/* Day tabs */}
            <div className="schedule-day-tabs" style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  style={{
                    flex: 1, padding: '20px 0',
                    background: activeDay === day ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: activeDay === day ? '2px solid #667eea' : '2px solid transparent',
                    color: activeDay === day ? '#fff' : '#718096',
                    fontSize: '16px', fontWeight: '700',
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>

            <div style={{ padding: '40px' }}>
              {(scheduleData[activeDay] || []).map((item, i) => (
                <motion.div
                  className="schedule-row"
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    display: 'flex', gap: '24px',
                    marginBottom: i === (scheduleData[activeDay].length - 1) ? 0 : '20px',
                  }}
                >
                  <div style={{
                    flexShrink: 0, paddingTop: '4px',
                    display: 'flex', alignItems: 'flex-start',
                  }}>
                    <span style={{
                      padding: '6px 12px',
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                      borderRadius: '10px', fontSize: '11px',
                      color: item.color, fontWeight: '700', letterSpacing: '1px',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.type}
                    </span>
                  </div>
                  <div style={{
                    flex: 1, background: '#111', padding: '22px 24px',
                    borderRadius: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    borderLeft: `4px solid ${item.color}`,
                  }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', margin: '0 0 8px 0' }}>
                      {item.title}
                    </h4>
                    <div style={{ color: '#a0aec0', fontSize: '14px' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Content;
