import React from 'react';
import { motion } from 'framer-motion';

const allowedItems = [
  { title: '팬아트 / 일러스트', desc: '캐릭터를 활용한 비상업적 팬아트 및 일러스트 창작' },
  { title: '2차 창작 소설 / 시나리오', desc: '세계관을 바탕으로 한 팬픽, 단편 소설 등 텍스트 창작' },
  { title: '커버 / 편곡', desc: 'T&L STUDIO 오리지널 곡의 비상업적 커버 및 편곡' },
  { title: '팬메이드 굿즈 (비판매)', desc: '개인 소장 목적의 팬메이드 굿즈 제작 (판매 금지)' },
  { title: '밈 / 짤 콘텐츠', desc: '방송·영상 클립을 활용한 유머성 밈 및 짤 제작' },
  { title: '응원 영상 / 편집', desc: '팬 편집 영상, 응원 콘텐츠, 클립 모음 영상' },
];

const cautionItems = [
  { title: '상업적 이용', desc: '팬아트·굿즈 등 모든 창작물의 판매 및 수익화는 금지' },
  { title: '성인(18+) 콘텐츠', desc: '성적 묘사가 포함된 창작물은 플랫폼 불문 전면 금지' },
  { title: '명예 훼손 / 비방', desc: '멤버·운영진을 부정적으로 묘사하는 콘텐츠 금지' },
  { title: '허위 사실 유포', desc: '공식 발표가 아닌 정보를 사실인 것처럼 배포하는 행위' },
  { title: '무단 AI 학습 활용', desc: '창작물을 AI 학습 데이터로 무단 사용하는 행위 금지' },
  { title: '공식 로고 무단 사용', desc: '공식 로고·트레이드마크를 허가 없이 창작물에 삽입 금지' },
];

const hashtags = ['#TnLStudio', '#T&L_팬아트', '#TnLFanwork', '#TnLCreators'];

const FanworksCard = ({ item, color, icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    style={{
      background: '#111',
      border: `1px solid ${color}30`,
      borderRadius: '16px',
      padding: '22px 24px',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
    }}
  >
    <div style={{
      width: '36px', height: '36px', borderRadius: '50%',
      background: `${color}18`, border: `1px solid ${color}40`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '16px', flexShrink: 0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>
        {item.title}
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
        {item.desc}
      </div>
    </div>
  </motion.div>
);

const Fanworks = () => {
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
            FAN COMMUNITY
          </div>
          <h1 className="fanworks-hero-title" style={{
            fontSize: '64px', fontWeight: '800', marginBottom: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
          }}>
            CREATE WITH US
          </h1>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px',
            margin: '0 auto', lineHeight: '1.75',
          }}>
            T&L STUDIO의 세계관을 함께 넓혀주세요.<br />
            팬 여러분의 창작을 진심으로 환영합니다.
          </p>
        </motion.div>
      </section>

      <div className="fanworks-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>

        {/* Guidelines Grid */}
        <div style={{ marginTop: '80px', marginBottom: '80px' }}>
          <div className="fanworks-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

            {/* Allowed */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#00b894', boxShadow: '0 0 10px rgba(0,184,148,0.6)',
                }}/>
                <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', margin: 0 }}>
                  허용 항목
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {allowedItems.map((item, i) => (
                  <FanworksCard key={i} item={item} color="#00b894" icon="✓" />
                ))}
              </div>
            </div>

            {/* Caution */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#ff7675', boxShadow: '0 0 10px rgba(255,118,117,0.6)',
                }}/>
                <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', margin: 0 }}>
                  주의 항목
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cautionItems.map((item, i) => (
                  <FanworksCard key={i} item={item} color="#ff7675" icon="✕" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hashtag Credits */}
        <div style={{
          background: 'rgba(102,126,234,0.06)',
          border: '1px solid rgba(102,126,234,0.18)',
          borderRadius: '24px', padding: '48px',
          marginBottom: '48px', textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
            창작물 공유 시 태그를 달아주세요
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '32px', lineHeight: '1.7' }}>
            해시태그를 사용하면 공식 팀이 여러분의 창작물을 더 쉽게 찾아볼 수 있습니다.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {hashtags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.06 }}
                style={{
                  padding: '10px 24px',
                  background: 'rgba(167,139,250,0.12)',
                  border: '1px solid rgba(167,139,250,0.35)',
                  borderRadius: '24px', fontSize: '14px',
                  fontWeight: '700', color: '#a78bfa', cursor: 'default',
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div style={{
          padding: '24px 32px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          display: 'flex', gap: '16px', alignItems: 'flex-start',
        }}>
          <div style={{ fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>📢</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.75', margin: 0 }}>
            본 가이드라인은 T&L Studio 콘텐츠 운영 상황에 따라 업데이트될 수 있습니다. 변경 사항은 공식 채널을 통해 안내드립니다.
            문의 사항이 있으실 경우 지원 폼을 통해 연락해 주세요.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Fanworks;
