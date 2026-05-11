import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Content = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeDay, setActiveDay] = useState('MON');

  const categories = ['ALL', 'MUSIC VIDEO', 'COVER', 'LIVE', 'SHORTS'];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const featuredVideo = {
    title: "Universe 1st Single 'STARDUST' Official MV",
    desc: "T&L STUDIO.의 첫 번째 오리지널 단체곡. 별가루처럼 쏟아지는 기적의 멜로디를 지금 감상하세요.",
    views: "1.5M views",
    date: "2026.05.06",
    url: null
  };

  const videos = [
    { type: 'MUSIC VIDEO', title: '[MV] STARDUST - Universe', creator: 'NULL USER 3', img: '#667eea', url: null },
    { type: 'COVER', title: '아이돌(IDOL) Cover by Ayane', creator: 'NULL USER 2', img: '#ff7675', url: null },
    { type: 'LIVE', title: '🔴 1주년 기념 3D 라이브 콘서트', creator: 'NULL USER 1', img: '#a78bfa', url: null },
    { type: 'COVER', title: 'KICK BACK Cover by Kuro', creator: 'NULL USER 4', img: '#74b9ff', url: null },
    { type: 'SHORTS', title: '방송 중 마이크를 끄는 걸 잊었을 때', creator: 'NULL USER 5', img: '#00b894', url: null },
    { type: 'MUSIC VIDEO', title: '[MV] LUNAR ECLIPSE - Everlis', creator: 'NULL USER 1', img: '#fd79a8', url: null },
  ];

  const scheduleData = {
    MON: [
      { time: '18:00', type: 'GAME', title: '롤 5인큐 내전', creator: 'NULL USER 1 & Friends', color: '#74b9ff', url: null },
      { time: '21:00', type: 'SING', title: '버튜버 이상형 월드컵', creator: 'NULL USER 2', color: '#ff7675', url: null }
    ],
    TUE: [
      { time: '19:00', type: 'TALK', title: '사연 읽어주는 라디오', creator: 'NULL USER 3', color: '#a29bfe', url: null }
    ],

  };

  const openUrlOrNotify = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    window.alert('준비 중입니다.');
  };

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh', color: '#fff', paddingBottom: '100px' }}>
      
      {/* 1. Featured Hero Video Section */}
      <section style={{ paddingTop: '100px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px' }}>
          <div className="content-featured" style={{ position: 'relative', height: '600px', borderRadius: '24px', overflow: 'hidden', background: '#111', display: 'flex', alignItems: 'flex-end', padding: '60px' }}>
            {/* Background Placeholder */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)', zIndex: 0 }}>
               {/* 여기에 실제 <video> 태그나 유튜브 썸네일 이미지가 들어갑니다 */}
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,1) 0%, rgba(10,10,15,0) 60%)' }} />
            </div>
            
            {/* Play Button Center */}
            <button type="button" aria-label="대표 영상 재생" onClick={() => openUrlOrNotify(featuredVideo.url)} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2, border: '1px solid rgba(255,255,255,0.5)' }}>
              <div style={{ borderLeft: '20px solid #fff', borderTop: '12px solid transparent', borderBottom: '12px solid transparent', marginLeft: '5px' }}></div>
            </button>

            {/* Featured Text Info */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
              <div style={{ padding: '6px 16px', background: '#667eea', display: 'inline-block', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>HOT RELEASE</div>
              <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '15px', lineHeight: '1.2' }}>{featuredVideo.title}</h1>
              <p style={{ color: '#cbd5e0', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>{featuredVideo.desc}</p>
              <div style={{ color: '#718096', fontSize: '14px' }}>{featuredVideo.views} · {featuredVideo.date}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px', marginTop: '100px' }}>
        
        {/* 2. Video Gallery Section */}
        <div style={{ marginBottom: '120px' }}>
          <div className="content-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '700' }}>CONTENT GALLERY</h2>
            <div className="content-filter-row" style={{ display: 'flex', gap: '15px' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '8px 20px', background: activeCategory === cat ? '#fff' : 'transparent', color: activeCategory === cat ? '#000' : '#718096', border: '1px solid', borderColor: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="content-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {videos.filter(v => activeCategory === 'ALL' || v.type === activeCategory).map((video, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} onClick={() => openUrlOrNotify(video.url)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openUrlOrNotify(video.url); } }} style={{ cursor: 'pointer' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: `linear-gradient(135deg, #111, ${video.img}40)`, borderRadius: '16px', marginBottom: '15px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '6px', fontSize: '12px' }}>04:20</div>
                  <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '13px', letterSpacing: '1px', fontWeight: '600' }}>THUMBNAIL<br />COMING SOON</div>
                </div>
                <div style={{ color: '#a78bfa', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>{video.type}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.4' }}>{video.title}</h3>
                <div style={{ color: '#718096', fontSize: '14px' }}>{video.creator}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Interactive Schedule Section */}
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '40px' }}>WEEKLY SCHEDULE</h2>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            {/* 요일 탭 */}
            <div className="schedule-day-tabs" style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {days.map(day => (
                <button key={day} onClick={() => setActiveDay(day)} style={{ flex: 1, padding: '20px 0', background: activeDay === day ? 'rgba(102, 126, 234, 0.1)' : 'transparent', border: 'none', borderBottom: activeDay === day ? '2px solid #667eea' : '2px solid transparent', color: activeDay === day ? '#fff' : '#718096', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {day}
                </button>
              ))}
            </div>

            {/* 타임라인 콘텐츠 */}
            <div style={{ padding: '40px' }}>
              {(scheduleData[activeDay] || []).length > 0 ? (
                scheduleData[activeDay].map((sch, i) => (
                  <motion.div className="schedule-row" key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', gap: '30px', marginBottom: i === scheduleData[activeDay].length - 1 ? 0 : '30px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: sch.color, width: '80px', paddingTop: '5px' }}>{sch.time}</div>
                    
                    <div style={{ flex: 1, background: '#111', padding: '25px', borderRadius: '16px', borderLeft: `4px solid ${sch.color}`, borderTop: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="schedule-card-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ padding: '4px 10px', background: `${sch.color}20`, color: sch.color, borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block', marginBottom: '10px' }}>{sch.type}</div>
                          <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', margin: '0 0 10px 0' }}>{sch.title}</h4>
                          <div style={{ color: '#a0aec0', fontSize: '15px' }}>🎙️ {sch.creator}</div>
                        </div>
                        <button onClick={() => openUrlOrNotify(sch.url)} style={{ padding: '10px 20px', background: 'transparent', border: `1px solid ${sch.color}`, color: sch.color, borderRadius: '20px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>방송 대기실</button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div style={{ textAlign: 'center', color: '#718096', padding: '40px 0', fontSize: '16px' }}>
                  예정된 공식 일정이 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Content;
