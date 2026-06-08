import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const positions = [
  {
    id: 1,
    title: 'Vocal Type',
    role: '보컬 포지션',
    color: '#ff7675',
    category: 'vocal',
    icon: '🎤',
    concept: '감성 · 희망',
    seeking: '노래와 음악으로 팬과 소통하고 싶은 분',
    activities: [
      '오리지널 곡 발매 및 커버 영상 제작',
      '노래 방송 및 팬 소통 정기 라이브',
      '음악 기반 다양한 콘텐츠 활동',
    ],
    preferred: [
      '보컬 또는 음악 관련 경험',
      '음악 창작에 관심 있는 분',
      '감성적인 콘텐츠를 즐기는 분',
    ],
    tags: ['#보컬', '#음악', '#감성콘텐츠'],
    guide: '지원서에는 보컬 샘플, 커버 영상, 음악 활동 경험을 함께 적어주세요.',
  },
  {
    id: 2,
    title: 'Game & Talk Type',
    role: '게임 · 토크 포지션',
    color: '#74b9ff',
    category: 'game',
    icon: '🎮',
    concept: '에너지 · 소통',
    seeking: '게임과 토크로 팬들을 즐겁게 해줄 분',
    activities: [
      '다양한 장르 게임 플레이 방송',
      '팬과 함께하는 토크 콘텐츠',
      '기획 예능 방송 참여',
    ],
    preferred: [
      '게임 방송 또는 토크 방송 경험',
      '밝고 에너지 넘치는 분',
      '팬과의 소통을 즐기는 분',
    ],
    tags: ['#게임', '#토크', '#소통'],
    guide: '지원서에는 진행 경험, 즐겨 다루는 게임 장르, 토크 콘텐츠 강점을 적어주세요.',
  },
  {
    id: 3,
    title: 'Music Creator Type',
    role: '뮤직 크리에이터 포지션',
    color: '#a29bfe',
    category: 'vocal',
    icon: '🎵',
    concept: '창작 · 예술',
    seeking: '음악으로 자신만의 세계를 표현하고 싶은 분',
    activities: [
      '자체 음악 제작 및 발표',
      '뮤직비디오 기획 및 제작 참여',
      '음악 기반 창작 콘텐츠 활동',
    ],
    preferred: [
      '작사·작곡 경험 또는 관심',
      'DAW 활용 가능한 분',
      '독창적인 음악 세계관을 가진 분',
    ],
    tags: ['#음악제작', '#아티스트', '#창작'],
    guide: '지원서에는 작업물 링크, 사용 가능한 제작 도구, 음악 활동 방향을 적어주세요.',
  },
  {
    id: 4,
    title: 'Variety Type',
    role: '버라이어티 포지션',
    color: '#fd79a8',
    category: 'variety',
    icon: '✨',
    concept: '다재다능 · 재미',
    seeking: '무엇이든 즐겁게 도전하는 버라이어티 정신의 소유자',
    activities: [
      '다양한 장르의 기획 콘텐츠',
      '쿡방·ASMR·일상 등 생활형 방송',
      '합동 기획 방송 참여',
    ],
    preferred: [
      '다양한 방송 형식에 도전할 의지',
      '유머 감각과 순발력',
      '팀워크를 즐기는 분',
    ],
    tags: ['#버라이어티', '#예능감', '#도전'],
    guide: '지원서에는 자신 있는 콘텐츠 장르와 보여주고 싶은 캐릭터성을 적어주세요.',
  },
  {
    id: 5,
    title: 'Creative / Story Type',
    role: '창작 · 스토리 포지션',
    color: '#00b894',
    category: 'variety',
    icon: '📖',
    concept: '세계관 · 몰입',
    seeking: '자신만의 이야기로 팬들의 마음을 사로잡을 분',
    activities: [
      '세계관 기반 롤플레이 방송',
      '일러스트·창작 콘텐츠 공개',
      '스토리텔링 라이브 진행',
    ],
    preferred: [
      '창작 활동 경험 (일러스트, 글쓰기 등)',
      '독특한 세계관을 가진 분',
      '이야기를 만들고 나누는 것을 좋아하는 분',
    ],
    tags: ['#창작', '#세계관', '#스토리텔링'],
    guide: '지원서에는 창작물, 글 또는 일러스트 포트폴리오가 있다면 함께 적어주세요.',
  },
  {
    id: 6,
    title: '기획자',
    role: '콘텐츠 · 세계관 기획',
    color: '#f6ad55',
    category: 'creativeTeam',
    icon: '🧭',
    concept: '기획 · 구조화',
    seeking: '콘텐츠 기획, 세계관 정리, 방송 아이디어 구성에 관심 있는 분',
    activities: [
      '콘텐츠 아이디어 정리 및 방송 흐름 구성',
      '세계관·캐릭터 설정 문서화',
      '프로젝트 일정과 제작 흐름 정리',
    ],
    preferred: [
      '문서 정리와 일정 흐름을 잘 잡는 분',
      '콘텐츠 레퍼런스 분석을 즐기는 분',
      '팀원과 명확하게 소통할 수 있는 분',
    ],
    tags: ['#기획', '#세계관', '#문서정리'],
    guide: '지원서에는 기획서, 문서 샘플, 참여한 콘텐츠 프로젝트가 있다면 함께 적어주세요.',
  },
  {
    id: 7,
    title: '일러스트레이터',
    role: '캐릭터 · 썸네일 비주얼',
    color: '#f687b3',
    category: 'creativeTeam',
    icon: '🎨',
    concept: '비주얼 · 표현',
    seeking: '캐릭터 일러스트, 팬아트풍 이미지, 썸네일 이미지 제작에 관심 있는 분',
    activities: [
      '캐릭터 일러스트 및 키비주얼 제작',
      '콘텐츠 썸네일과 홍보 이미지 제작',
      '세계관 분위기에 맞는 비주얼 방향 제안',
    ],
    preferred: [
      '포트폴리오 링크 제출 가능자',
      '캐릭터 디자인 또는 팬아트 작업 경험',
      '일정에 맞춰 결과물을 정리할 수 있는 분',
    ],
    tags: ['#일러스트', '#캐릭터', '#썸네일'],
    guide: '지원서에는 포트폴리오 링크와 선호 작업 범위를 함께 적어주세요.',
  },
  {
    id: 8,
    title: '영상 편집자',
    role: '쇼츠 · 하이라이트 · 영상 편집',
    color: '#63b3ed',
    category: 'creativeTeam',
    icon: '🎬',
    concept: '편집 · 리듬',
    seeking: '쇼츠, 하이라이트, 커버 영상, 방송 편집에 관심 있는 분',
    activities: [
      '쇼츠 및 하이라이트 클립 편집',
      '커버 영상과 콘텐츠 영상 편집',
      '자막·효과·템포를 살린 영상 구성',
    ],
    preferred: [
      'Premiere Pro, After Effects, DaVinci Resolve 등 사용 가능자',
      '숏폼 콘텐츠 편집 경험',
      '영상 톤과 리듬을 세밀하게 조정할 수 있는 분',
    ],
    tags: ['#영상편집', '#쇼츠', '#하이라이트'],
    guide: '지원서에는 편집 포트폴리오 링크와 사용 가능한 편집 툴을 적어주세요.',
  },
  {
    id: 9,
    title: '개발자',
    role: '웹 · 방송 도구 · 자동화',
    color: '#68d391',
    category: 'creativeTeam',
    icon: '💻',
    concept: '도구 · 자동화',
    seeking: '웹사이트, 방송 도구, 자동화 도구, 팬 커뮤니티 기능 제작에 관심 있는 분',
    activities: [
      '공식 웹사이트 기능 개선',
      '방송 운영에 필요한 자동화 도구 제작',
      'Discord Bot 또는 팬 커뮤니티 기능 개발',
    ],
    preferred: [
      'React, Python, Discord Bot, 자동화 경험',
      '작은 기능을 안정적으로 완성할 수 있는 분',
      '운영자가 쓰기 쉬운 도구를 고민하는 분',
    ],
    tags: ['#개발', '#React', '#자동화'],
    guide: '지원서에는 GitHub, 포트폴리오, 제작한 도구나 프로젝트 링크를 적어주세요.',
  },
  {
    id: 10,
    title: '매니저 / 운영 지원자',
    role: '일정 · 커뮤니티 · 자료 정리',
    color: '#b794f4',
    category: 'support',
    icon: '🗂️',
    concept: '운영 · 지원',
    seeking: '일정 관리, 커뮤니티 운영, 자료 정리, 지원자 응대에 관심 있는 분',
    activities: [
      '콘텐츠 일정과 자료 정리',
      '커뮤니티 운영 보조',
      '지원자 응대 및 진행 상황 관리',
    ],
    preferred: [
      '꼼꼼하고 책임감 있는 분',
      '기본적인 문서 정리와 커뮤니케이션이 가능한 분',
      '운영 흐름을 차분하게 관리할 수 있는 분',
    ],
    tags: ['#운영지원', '#매니저', '#커뮤니티'],
    guide: '지원서에는 운영 경험, 가능한 업무 범위, 주로 사용할 수 있는 시간대를 적어주세요.',
  },
];

const categories = [
  { id: 'all', name: 'ALL', color: '#a78bfa' },
  { id: 'vocal', name: 'VOCAL · MUSIC', color: '#ff7675' },
  { id: 'game', name: 'GAME · TALK', color: '#74b9ff' },
  { id: 'variety', name: 'CREATIVE · VARIETY', color: '#00b894' },
  { id: 'creativeTeam', name: 'CREATIVE TEAM', color: '#f6ad55' },
  { id: 'support', name: 'SUPPORT', color: '#b794f4' },
];

const Talents = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedPosition) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') setSelectedPosition(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPosition]);

  const filtered = selectedCategory === 'all'
    ? positions
    : positions.filter(p => p.category === selectedCategory);

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0f', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="talents-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(167, 139, 250, 0.1)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#a78bfa',
            letterSpacing: '3px',
            marginBottom: '25px',
            fontWeight: '600',
          }}>
            OPEN RECRUIT
          </div>

          <h2 style={{
            fontSize: '64px',
            fontWeight: '700',
            marginBottom: '25px',
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1',
          }}>
            함께할 사람을 찾습니다
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            크리에이터와 제작 파트너가 함께 성장할 수 있도록<br />
            다양한 포지션에서 여러분을 기다립니다.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '80px', flexWrap: 'wrap' }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '12px 32px',
                background: selectedCategory === cat.id
                  ? `linear-gradient(135deg, ${cat.color}, ${cat.color}dd)`
                  : 'rgba(255, 255, 255, 0.05)',
                border: selectedCategory === cat.id
                  ? `2px solid ${cat.color}`
                  : '2px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                letterSpacing: '1px',
                boxShadow: selectedCategory === cat.id ? `0 4px 20px ${cat.color}40` : 'none',
                fontFamily: "'Pretendard', sans-serif",
              }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Positions Grid */}
        <motion.div
          className="talents-grid"
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((pos, index) => (
              <motion.div
                key={pos.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedPosition(pos)}
                style={{
                  background: `linear-gradient(to bottom, #111, ${pos.color}15)`,
                  border: `1px solid ${pos.color}30`,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: `0 4px 20px ${pos.color}10`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px ${pos.color}30`;
                  e.currentTarget.style.borderColor = `${pos.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${pos.color}10`;
                  e.currentTarget.style.borderColor = `${pos.color}30`;
                }}
              >
                {/* Icon Area */}
                <div className="talent-image-placeholder" style={{
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(180deg, ${pos.color}20 0%, ${pos.color}05 100%)`,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle at 50% 100%, ${pos.color}25, transparent 70%)`,
                  }} />

                  {/* OPEN badge */}
                  <div style={{
                    position: 'absolute', top: '15px', right: '15px',
                    padding: '6px 14px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    fontSize: '11px', color: pos.color,
                    fontWeight: '600', border: `1px solid ${pos.color}40`,
                    letterSpacing: '1px',
                  }}>
                    OPEN
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      fontSize: '72px',
                      position: 'relative', zIndex: 1,
                      filter: `drop-shadow(0 0 20px ${pos.color}80)`,
                    }}
                  >
                    {pos.icon}
                  </motion.div>

                  <div style={{
                    marginTop: '16px',
                    fontSize: '13px', color: pos.color,
                    fontWeight: '600', letterSpacing: '1px',
                    position: 'relative', zIndex: 1, opacity: 0.9,
                  }}>
                    {pos.concept}
                  </div>
                </div>

                {/* Info */}
                <div style={{
                  padding: '28px 30px',
                  background: 'rgba(0,0,0,0.85)',
                  backdropFilter: 'blur(15px)',
                  borderTop: `1px solid ${pos.color}20`,
                }}>
                  <h3 style={{
                    fontSize: '22px', fontWeight: '700', color: '#fff',
                    margin: '0 0 6px 0', letterSpacing: '-0.5px',
                  }}>
                    {pos.title}
                  </h3>

                  <p style={{
                    color: pos.color, fontWeight: '600',
                    margin: '0 0 12px 0', letterSpacing: '0.5px', fontSize: '13px',
                  }}>
                    {pos.role}
                  </p>

                  <p style={{
                    fontSize: '13px', color: '#a0aec0', lineHeight: '1.6', marginBottom: '16px',
                  }}>
                    {pos.seeking}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {pos.tags.map((tag, i) => (
                      <span key={i} style={{
                        padding: '4px 10px',
                        background: `${pos.color}12`,
                        border: `1px solid ${pos.color}30`,
                        borderRadius: '10px', fontSize: '11px',
                        color: pos.color, fontWeight: '500',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Recruitment Modal */}
      <AnimatePresence>
        {selectedPosition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedPosition(null)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
              zIndex: 2000, display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: '40px', overflowY: 'auto',
            }}
          >
            <motion.div
              className="talent-modal"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#0f0f14',
                border: `2px solid ${selectedPosition.color}40`,
                borderRadius: '32px',
                width: '100%', maxWidth: '1100px',
                display: 'flex', flexDirection: 'row',
                overflow: 'hidden',
                boxShadow: `0 20px 80px ${selectedPosition.color}30`,
                maxHeight: '90vh',
              }}
            >
              <button
                type="button"
                className="talent-modal-mobile-close"
                onClick={() => setSelectedPosition(null)}
                aria-label="닫기"
              >
                Close
              </button>

              {/* Left - Icon Display */}
              <div className="talent-modal-image" style={{
                flex: '0 0 40%',
                background: `linear-gradient(135deg, #000, ${selectedPosition.color}20)`,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
                padding: '60px 40px',
              }}>
                <motion.div
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 50%, ${selectedPosition.color}30, transparent 50%)`,
                      `radial-gradient(circle at 80% 50%, ${selectedPosition.color}30, transparent 50%)`,
                      `radial-gradient(circle at 20% 50%, ${selectedPosition.color}30, transparent 50%)`,
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    filter: [
                      `drop-shadow(0 0 20px ${selectedPosition.color}80)`,
                      `drop-shadow(0 0 40px ${selectedPosition.color})`,
                      `drop-shadow(0 0 20px ${selectedPosition.color}80)`,
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ fontSize: '110px', position: 'relative', zIndex: 1, marginBottom: '28px' }}
                >
                  {selectedPosition.icon}
                </motion.div>

                <div style={{
                  position: 'relative', zIndex: 1, textAlign: 'center',
                  padding: '14px 24px',
                  background: `${selectedPosition.color}15`,
                  border: `1px solid ${selectedPosition.color}40`,
                  borderRadius: '16px',
                }}>
                  <div style={{
                    fontSize: '11px', color: '#a0aec0',
                    letterSpacing: '2px', marginBottom: '6px',
                    fontWeight: '700', textTransform: 'uppercase',
                  }}>
                    Concept
                  </div>
                  <div style={{ fontSize: '18px', color: selectedPosition.color, fontWeight: '700' }}>
                    {selectedPosition.concept}
                  </div>
                </div>
              </div>

              {/* Right - Recruitment Info */}
              <div className="talent-modal-content" style={{
                flex: 1, padding: '50px',
                display: 'flex', flexDirection: 'column',
                overflowY: 'auto',
              }}>
                {/* Header */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-block', padding: '5px 14px',
                    background: 'rgba(167,139,250,0.1)',
                    border: '1px solid rgba(167,139,250,0.25)',
                    borderRadius: '15px', fontSize: '11px', color: '#a78bfa',
                    letterSpacing: '2px', marginBottom: '14px', fontWeight: '700',
                  }}>
                    RECRUIT
                  </div>

                  <h2 style={{
                    fontSize: '42px', color: '#fff', margin: '0 0 10px 0',
                    fontWeight: '800', letterSpacing: '-1px',
                  }}>
                    {selectedPosition.title}
                  </h2>

                  <div style={{
                    fontSize: '15px', color: selectedPosition.color,
                    fontWeight: '600', marginBottom: '18px',
                  }}>
                    {selectedPosition.role}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedPosition.tags.map((tag, i) => (
                      <span key={i} style={{
                        padding: '6px 14px',
                        background: `${selectedPosition.color}15`,
                        border: `1px solid ${selectedPosition.color}30`,
                        borderRadius: '15px',
                        color: selectedPosition.color, fontSize: '12px', fontWeight: '500',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Seeking */}
                <div style={{
                  padding: '18px 20px',
                  background: `${selectedPosition.color}08`,
                  border: `1px solid ${selectedPosition.color}25`,
                  borderRadius: '16px', marginBottom: '22px',
                }}>
                  <div style={{
                    fontSize: '11px', color: '#a0aec0',
                    letterSpacing: '1.5px', marginBottom: '8px',
                    fontWeight: '700', textTransform: 'uppercase',
                  }}>
                    이런 분을 찾습니다
                  </div>
                  <p style={{ color: '#e2e8f0', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                    {selectedPosition.seeking}
                  </p>
                </div>

                {/* Activities */}
                <div style={{ marginBottom: '22px' }}>
                  <h4 style={{ color: '#fff', fontSize: '15px', marginBottom: '12px', fontWeight: '700' }}>
                    활동 방향
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedPosition.activities.map((act, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '12px', fontSize: '14px', color: '#cbd5e0',
                      }}>
                        <div style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: selectedPosition.color, flexShrink: 0,
                        }} />
                        {act}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred */}
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ color: '#fff', fontSize: '15px', marginBottom: '12px', fontWeight: '700' }}>
                    우대 사항
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {selectedPosition.preferred.map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '14px', color: '#a0aec0',
                      }}>
                        <div style={{ color: selectedPosition.color, fontSize: '14px', fontWeight: '700' }}>✓</div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guide */}
                <div style={{
                  padding: '18px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  marginBottom: '28px',
                }}>
                  <h4 style={{ color: '#fff', fontSize: '15px', margin: '0 0 10px 0', fontWeight: '700' }}>
                    지원 안내
                  </h4>
                  <p style={{ color: '#a0aec0', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                    {selectedPosition.guide}
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                  <motion.button
                    onClick={() => navigate('/apply')}
                    whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${selectedPosition.color}40` }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      flex: 1, padding: '16px',
                      background: `linear-gradient(135deg, ${selectedPosition.color}, ${selectedPosition.color}bb)`,
                      border: 'none', color: '#fff',
                      borderRadius: '14px', cursor: 'pointer',
                      fontSize: '15px', fontWeight: '700',
                      fontFamily: "'Pretendard', sans-serif",
                      transition: 'all 0.3s', letterSpacing: '0.5px',
                    }}
                  >
                    지원하기
                  </motion.button>

                  <motion.button
                    onClick={() => setSelectedPosition(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '16px 28px',
                      background: 'transparent',
                      border: '2px solid rgba(255,255,255,0.15)',
                      color: '#a0aec0',
                      borderRadius: '14px', cursor: 'pointer',
                      fontSize: '14px', fontWeight: '600',
                      fontFamily: "'Pretendard', sans-serif",
                      transition: 'all 0.3s',
                    }}
                  >
                    닫기
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Talents;
