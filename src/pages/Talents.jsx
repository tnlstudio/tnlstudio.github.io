import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Talents = () => {
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!selectedTalent) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedTalent(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTalent]);

  const talents = [
    { 
      id: 1, 
      name: 'NULL USER 1', 
      role: 'Main Vocal', 
      color: '#ff7675',
      group: 'Group1',
      height: '162cm', 
      birthday: '05.14',
      debut: '2021.03',
      fanName: 'Starlight',
      hashtags: ['#희망의노래', '#별빛소녀', '#감성보컬'],
      lore: '멸망한 별에서 지구로 불시착한 기억을 잃은 소녀. 밤하늘을 볼 때마다 알 수 없는 그리움에 노래를 부른다. 노래를 부를 때면 별가루가 흩날리는 것처럼 보이는 신비로운 능력을 가지고 있다.',
      concept: '빛과 희망',
      specialty: '발라드 · R&B',
      mbti: 'INFP',
      socials: {
        youtube: '125K',
        twitter: '89K',
        instagram: '56K'
      }
    },
    { 
      id: 2, 
      name: 'NULL USER 2', 
      role: 'Lead Dancer / Rapper', 
      color: '#74b9ff',
      group: 'Group1',
      height: '175cm', 
      birthday: '11.02',
      debut: '2021.03',
      fanName: 'Cyber Knights',
      hashtags: ['#사이버펑크', '#해커', '#카리스마'],
      lore: '사이버 펑크 시티의 뒷골목 해커 출신. 감정을 숨기고 기계적으로 살았지만, 음악을 통해 진짜 자신의 모습을 찾아간다. 디지털 세계를 자유자재로 조작할 수 있는 능력을 가졌다.',
      concept: '그림자와 해방',
      specialty: '랩 · EDM · 게임',
      mbti: 'INTJ',
      socials: {
        youtube: '142K',
        twitter: '95K',
        instagram: '62K'
      }
    },
    { 
      id: 3, 
      name: 'NULL USER 3', 
      role: 'Visual / Sub Vocal', 
      color: '#a29bfe',
      group: 'Group2',
      height: '168cm', 
      birthday: '02.28',
      debut: '2021.06',
      fanName: 'Dreamers',
      hashtags: ['#몽환', '#지식', '#신비'],
      lore: '차원의 틈새를 관리하던 사서. 수많은 세계의 기록을 읽다 인간의 "감정"에 호기심을 느껴 직접 차원을 넘어왔다. 책장을 넘기듯 차원을 여행할 수 있다.',
      concept: '지식과 몽환',
      specialty: 'ASMR · 일러스트 · 북토크',
      mbti: 'INTP',
      socials: {
        youtube: '108K',
        twitter: '72K',
        instagram: '51K'
      }
    },
    {
      id: 4,
      name: 'NULL USER 4',
      role: 'Main Dancer',
      color: '#fd79a8',
      group: 'Group3',
      height: '170cm',
      birthday: '08.15',
      debut: '2022.05',
      fanName: 'Moonlight',
      hashtags: ['#달빛무희', '#우아함', '#매혹'],
      lore: '달의 여신이 보낸 사자. 보름달이 뜨는 밤에는 더욱 강력한 힘을 발휘한다.',
      concept: '우아함과 신비',
      specialty: '댄스 커버 · 안무 제작',
      mbti: 'ENFJ',
      socials: {
        youtube: '96K',
        twitter: '68K',
        instagram: '82K'
      }
    },
    {
      id: 5,
      name: 'NULL USER 5',
      role: 'Variety',
      color: '#00b894',
      group: 'Group3',
      height: '158cm',
      birthday: '12.25',
      debut: '2023.02',
      fanName: 'Mio-ment',
      hashtags: ['#일상', '#힐링', '#소소한행복'],
      lore: '평범한 일상을 사랑하는 소녀. 작은 것에서 기쁨을 찾는 능력이 있다.',
      concept: '소소한 일상',
      specialty: '토크 · 요리 · 게임',
      mbti: 'ENFP',
      socials: {
        youtube: '87K',
        twitter: '62K',
        instagram: '45K'
      }
    }
  ];

  const groups = [
    { id: 'all', name: 'ALL', color: '#a78bfa' },
    { id: 'Group1', name: 'Group1', color: '#667eea' },
    { id: 'Group2', name: 'Group2', color: '#fd79a8' },
    { id: 'Group3', name: 'Group3', color: '#00b894' }
  ];

  const filteredTalents = selectedGroup === 'all' 
    ? talents 
    : talents.filter(t => t.group === selectedGroup);

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
            fontWeight: '600'
          }}>
            OUR CREATORS
          </div>
          
          <h2 style={{ 
            fontSize: '64px', 
            fontWeight: '700', 
            marginBottom: '25px', 
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            ARTISTS
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            각자의 세계관과 개성을 가진 크리에이터들을 만나보세요
          </p>
        </motion.div>

        {/* Group Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '80px',
            flexWrap: 'wrap'
          }}
        >
          {groups.map((group) => (
            <motion.button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '12px 32px',
                background: selectedGroup === group.id 
                  ? `linear-gradient(135deg, ${group.color}, ${group.color}dd)`
                  : 'rgba(255, 255, 255, 0.05)',
                border: selectedGroup === group.id 
                  ? `2px solid ${group.color}`
                  : '2px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                letterSpacing: '1px',
                boxShadow: selectedGroup === group.id 
                  ? `0 4px 20px ${group.color}40`
                  : 'none'
              }}
            >
              {group.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Talents Grid */}
        <motion.div 
          className="talents-grid"
          ref={ref}
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '40px' 
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredTalents.map((t, index) => (
              <motion.div 
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05
                }}
                whileHover={{ y: -10, scale: 1.02 }} 
                onClick={() => setSelectedTalent(t)}
                style={{ 
                  background: `linear-gradient(to bottom, #111, ${t.color}15)`, 
                  border: `1px solid ${t.color}30`, 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  cursor: 'pointer', 
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: `0 4px 20px ${t.color}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px ${t.color}30`;
                  e.currentTarget.style.borderColor = `${t.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${t.color}10`;
                  e.currentTarget.style.borderColor = `${t.color}30`;
                }}
              >
                {/* Image Area */}
                <div className="talent-image-placeholder" style={{ 
                  height: '420px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '16px', 
                  color: '#666',
                  background: `linear-gradient(180deg, ${t.color}20 0%, ${t.color}05 100%)`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 120%, ${t.color}30, transparent 70%)`,
                    opacity: 0.6
                  }} />
                  
                  {/* Group badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    padding: '6px 14px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    fontSize: '11px',
                    color: t.color,
                    fontWeight: '600',
                    border: `1px solid ${t.color}40`,
                    letterSpacing: '1px'
                  }}>
                    {t.group}
                  </div>

                  <span style={{ position: 'relative', zIndex: 1, color: 'rgba(255,255,255,0.48)', fontWeight: 700, letterSpacing: '1px', textAlign: 'center' }}>PROFILE<br />COMING SOON</span>
                </div>

                {/* Info Card */}
                <div style={{ 
                  padding: '30px', 
                  background: 'rgba(0,0,0,0.85)', 
                  backdropFilter: 'blur(15px)',
                  borderTop: `1px solid ${t.color}20`
                }}>
                  {/* Name & Role */}
                  <h3 style={{ 
                    fontSize: '28px', 
                    fontWeight: '700', 
                    color: '#fff', 
                    margin: '0 0 8px 0',
                    letterSpacing: '-0.5px'
                  }}>
                    {t.name}
                  </h3>
                  
                  <p style={{ 
                    color: t.color, 
                    fontWeight: '600', 
                    margin: '0 0 15px 0', 
                    letterSpacing: '1px',
                    fontSize: '13px'
                  }}>
                    {t.role}
                  </p>

                  {/* Quick Stats */}
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '15px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      padding: '5px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      fontSize: '11px',
                      color: '#a0aec0',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      🎂 {t.birthday}
                    </span>
                    <span style={{
                      padding: '5px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      fontSize: '11px',
                      color: '#a0aec0',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      📏 {t.height}
                    </span>
                  </div>

                  {/* Specialty */}
                  <div style={{
                    fontSize: '12px',
                    color: '#718096',
                    marginTop: '15px',
                    paddingTop: '15px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {t.specialty}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Profile Modal */}
      <AnimatePresence>
        {selectedTalent && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedTalent(null)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              background: 'rgba(0,0,0,0.9)', 
              backdropFilter: 'blur(20px)', 
              zIndex: 2000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '40px',
              overflowY: 'auto'
            }}
          >
            <motion.div 
              className="talent-modal"
              initial={{ y: 50, scale: 0.95, opacity: 0 }} 
              animate={{ y: 0, scale: 1, opacity: 1 }} 
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                background: '#0f0f14', 
                border: `2px solid ${selectedTalent.color}40`, 
                borderRadius: '32px', 
                width: '100%', 
                maxWidth: '1100px', 
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden', 
                boxShadow: `0 20px 80px ${selectedTalent.color}30`,
                maxHeight: '90vh'
              }}
            >
              <button
                type="button"
                className="talent-modal-mobile-close"
                onClick={() => setSelectedTalent(null)}
                aria-label="프로필 닫기"
              >
                Close
              </button>
              {/* Left Side - Image */}
              <div className="talent-modal-image" style={{ 
                flex: '0 0 45%',
                background: `linear-gradient(135deg, #000, ${selectedTalent.color}30)`, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Animated background */}
                <motion.div
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 50%, ${selectedTalent.color}30, transparent 50%)`,
                      `radial-gradient(circle at 80% 50%, ${selectedTalent.color}30, transparent 50%)`,
                      `radial-gradient(circle at 20% 50%, ${selectedTalent.color}30, transparent 50%)`
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                  }}
                />
                
                <span style={{ 
                  color: '#fff', 
                  fontSize: '24px',
                  position: 'relative',
                  zIndex: 1,
                  opacity: 0.72,
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textAlign: 'center'
                }}>
                  FULL BODY<br />COMING SOON
                </span>
              </div>

              {/* Right Side - Info */}
              <div className="talent-modal-content" style={{ 
                flex: 1, 
                padding: '50px', 
                display: 'flex', 
                flexDirection: 'column',
                overflowY: 'auto'
              }}>
                {/* Header */}
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ 
                    color: selectedTalent.color, 
                    fontSize: '13px', 
                    letterSpacing: '3px', 
                    marginBottom: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {selectedTalent.concept}
                  </div>
                  
                  <h2 style={{ 
                    fontSize: '52px', 
                    color: '#fff', 
                    margin: '0 0 15px 0',
                    fontWeight: '800',
                    letterSpacing: '-1px'
                  }}>
                    {selectedTalent.name}
                  </h2>

                  <div style={{ 
                    fontSize: '16px',
                    color: selectedTalent.color,
                    fontWeight: '600',
                    marginBottom: '25px'
                  }}>
                    {selectedTalent.role}
                  </div>

                  {/* Tags */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '10px',
                    flexWrap: 'wrap',
                    marginBottom: '25px'
                  }}>
                    {selectedTalent.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '6px 14px',
                          background: `${selectedTalent.color}15`,
                          border: `1px solid ${selectedTalent.color}30`,
                          borderRadius: '15px',
                          color: selectedTalent.color,
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px', 
                  marginBottom: '35px' 
                }}>
                  {[
                    { icon: '🎂', label: 'Birthday', value: selectedTalent.birthday },
                    { icon: '📏', label: 'Height', value: selectedTalent.height },
                    { icon: '🎤', label: 'Debut', value: selectedTalent.debut },
                    { icon: '🎭', label: 'MBTI', value: selectedTalent.mbti }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.03)', 
                        padding: '15px 18px', 
                        borderRadius: '14px', 
                        color: '#cbd5e0', 
                        fontSize: '13px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{stat.icon}</span>
                      <div>
                        <div style={{ 
                          fontSize: '10px', 
                          color: '#718096',
                          marginBottom: '2px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          {stat.label}
                        </div>
                        <div style={{ fontWeight: '600', color: '#fff' }}>
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lore Section */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#fff', 
                    fontSize: '18px', 
                    marginBottom: '15px',
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                  }}>
                    LORE
                  </h4>
                  <p style={{ 
                    color: '#a0aec0', 
                    lineHeight: '1.9', 
                    fontSize: '15px',
                    letterSpacing: '0.2px'
                  }}>
                    {selectedTalent.lore}
                  </p>
                </div>

                {/* Specialty */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#fff', 
                    fontSize: '16px', 
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    SPECIALTY
                  </h4>
                  <p style={{ 
                    color: '#a0aec0', 
                    fontSize: '14px'
                  }}>
                    {selectedTalent.specialty}
                  </p>
                </div>

                {/* Social Stats */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ 
                    color: '#fff', 
                    fontSize: '16px', 
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}>
                    SOCIAL
                  </h4>
                  <div className="talent-social-row" style={{ display: 'flex', gap: '15px' }}>
                    {Object.entries(selectedTalent.socials).map(([platform, count]) => (
                      <div
                        key={platform}
                        style={{
                          padding: '10px 16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                          fontSize: '13px',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <div style={{ 
                          color: '#718096',
                          fontSize: '10px',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          {platform}
                        </div>
                        <div style={{ color: '#fff', fontWeight: '600' }}>
                          {count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fan Name */}
                <div style={{
                  padding: '20px',
                  background: `${selectedTalent.color}10`,
                  border: `1px solid ${selectedTalent.color}30`,
                  borderRadius: '16px',
                  marginBottom: '30px'
                }}>
                  <div style={{ 
                    fontSize: '11px',
                    color: '#a0aec0',
                    marginBottom: '6px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    팬덤 이름
                  </div>
                  <div style={{
                    fontSize: '20px',
                    color: selectedTalent.color,
                    fontWeight: '700'
                  }}>
                    {selectedTalent.fanName}
                  </div>
                </div>

                {/* Close Button */}
                <motion.button 
                  onClick={() => setSelectedTalent(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    marginTop: 'auto', 
                    padding: '16px', 
                    background: 'transparent', 
                    border: `2px solid ${selectedTalent.color}40`, 
                    color: '#fff', 
                    borderRadius: '14px', 
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s',
                    letterSpacing: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${selectedTalent.color}20`;
                    e.target.style.borderColor = selectedTalent.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = `${selectedTalent.color}40`;
                  }}
                >
                  Close Profile
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Talents;
