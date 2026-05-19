import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORY_INFO = {
  editor: {
    label: '편집자',
    formTitle: '[편집자] 지원서',
    extraFields: [
      { key: 'tools', label: '사용 가능한 편집 툴', placeholder: 'After Effects, Premiere Pro, DaVinci Resolve 등', type: 'text' },
      { key: 'workScope', label: '작업 가능 분야', placeholder: '숏폼, 유튜브 영상, 뮤직비디오, 자막 등', type: 'text' },
      { key: 'sampleLink', label: '작업 샘플 링크', placeholder: 'https://...', type: 'url' },
    ],
  },
  planner: {
    label: '기획자',
    formTitle: '[기획자] 지원서',
    extraFields: [
      { key: 'planningField', label: '관심 기획 분야', placeholder: '콘텐츠 기획, 이벤트 기획, SNS 마케팅 등', type: 'text' },
      { key: 'projectExp', label: '프로젝트 경험', placeholder: '참여했던 프로젝트를 간략히 소개해 주세요.', type: 'textarea' },
      { key: 'docTypes', label: '작성 가능한 문서 종류', placeholder: '기획서, 시나리오, 보도자료, 제안서 등', type: 'text' },
    ],
  },
  streamer: {
    label: '스트리머',
    formTitle: '[스트리머] 1기생 지원서',
    extraFields: [
      { key: 'platform', label: '주요 활동 플랫폼', placeholder: 'YouTube, Twitch, CHZZK, AfreecaTV 등', type: 'text' },
      { key: 'broadcastSchedule', label: '방송 가능 시간대', placeholder: '예) 평일 저녁 20:00 ~ 23:00', type: 'text' },
      { key: 'concept', label: '캐릭터 / 콘셉트 방향', placeholder: '원하는 캐릭터나 방송 콘셉트를 자유롭게 작성해 주세요.', type: 'textarea' },
    ],
  },
};

const baseInput = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  color: '#ffffff',
  fontSize: '15px',
  fontFamily: "'Pretendard', -apple-system, sans-serif",
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: '#a0aec0',
  letterSpacing: '0.4px',
  marginBottom: '8px',
};

const fieldWrap = { marginBottom: '20px' };

const Field = ({ as: Tag = 'input', type = 'text', rows, ...props }) => {
  const [focused, setFocused] = useState(false);
  const style = {
    ...baseInput,
    borderColor: focused ? 'rgba(167, 139, 250, 0.6)' : 'rgba(255, 255, 255, 0.08)',
    boxShadow: focused ? '0 0 0 3px rgba(167, 139, 250, 0.1)' : 'none',
    ...(Tag === 'textarea' && {
      resize: 'vertical',
      minHeight: `${(rows || 3) * 28}px`,
      lineHeight: '1.7',
    }),
  };
  return (
    <Tag
      type={Tag === 'input' ? type : undefined}
      rows={rows}
      style={style}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
};

const Apply = () => {
  const [category, setCategory] = useState('editor');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', nickname: '',
    portfolio: '', intro: '', motivation: '',
    tools: '', workScope: '', sampleLink: '',
    planningField: '', projectExp: '', docTypes: '',
    platform: '', broadcastSchedule: '', concept: '',
  });

  const currentCat = CATEGORY_INFO[category];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setAgreementError(true);
      setTimeout(() => setAgreementError(false), 2500);
      return;
    }

    const extraData = {};
    currentCat.extraFields.forEach((f) => {
      if (formData[f.key]) extraData[f.label] = formData[f.key];
    });

    const payload = {
      지원분야: currentCat.label,
      이름: formData.name,
      연락처: formData.phone,
      이메일: formData.email,
      활동닉네임: formData.nickname,
      포트폴리오: formData.portfolio,
      자기소개: formData.intro,
      지원동기: formData.motivation,
      개인정보동의: '동의함',
      ...extraData,
    };

    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch('https://formspree.io/f/mdajkvod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #1e1e3f 0%, #0a0a0f 60%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '560px' }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 20 }}
            style={{
              width: '84px', height: '84px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
              boxShadow: '0 12px 48px rgba(102, 126, 234, 0.45)',
              fontSize: '36px', color: '#fff',
            }}
          >
            ✓
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              borderRadius: '20px',
              fontSize: '12px', color: '#a78bfa',
              letterSpacing: '2.5px', marginBottom: '24px', fontWeight: '600',
            }}
          >
            APPLICATION RECEIVED
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            style={{ fontSize: '38px', fontWeight: '700', color: '#fff', marginBottom: '20px', lineHeight: '1.35' }}
          >
            지원 감사합니다.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
            style={{ fontSize: '17px', color: '#cbd5e0', lineHeight: '1.95' }}
          >
            입력하신 내용이 정상적으로 접수되었습니다.<br />
            검토 후 연락드리겠습니다.
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        padding: '140px 60px 72px',
        background: 'radial-gradient(ellipse at top, #1e1e3f 0%, #0a0a0f 65%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(102, 126, 234, 0.1), transparent)',
          filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block', padding: '8px 26px',
              border: '1px solid rgba(167, 139, 250, 0.4)',
              borderRadius: '30px', color: '#a78bfa',
              fontSize: '12px', letterSpacing: '3px',
              marginBottom: '28px',
              background: 'rgba(167, 139, 250, 0.08)', fontWeight: '600',
            }}
          >
            1기생 & 제작팀 모집
          </motion.div>

          <h1 className="apply-hero-title" style={{
            fontSize: '68px', fontWeight: '800',
            margin: '0 0 22px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 55%, #667eea 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            letterSpacing: '-2px', lineHeight: '1.12',
          }}>
            함께 만들어갈<br />첫 번째 팀
          </h1>

          <p className="apply-hero-sub" style={{
            fontSize: '18px', color: '#cbd5e0',
            maxWidth: '540px', margin: '0 auto', lineHeight: '1.85',
          }}>
            T&L STUDIO 1기생 및 제작팀 모집이 시작되었습니다.<br />
            지원 분야를 선택하고 지원서를 작성해 주세요.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section
        className="apply-form-section"
        style={{ padding: '0 60px 120px', maxWidth: '860px', margin: '0 auto' }}
      >
        {/* Category buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.6 }}
          className="apply-category-row"
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginBottom: '48px' }}
        >
          {Object.entries(CATEGORY_INFO).map(([key, info]) => {
            const active = category === key;
            return (
              <motion.button
                key={key}
                onClick={() => setCategory(key)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '13px 38px', borderRadius: '50px',
                  fontSize: '16px', fontWeight: '700',
                  fontFamily: "'Pretendard', sans-serif",
                  cursor: 'pointer', letterSpacing: '0.3px',
                  border: active ? 'none' : '2px solid rgba(255,255,255,0.13)',
                  background: active
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(255,255,255,0.03)',
                  color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                  boxShadow: active ? '0 6px 24px rgba(102, 126, 234, 0.38)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {info.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7 }}
          className="apply-form-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '28px', padding: '56px',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Animated title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${category}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.28 }}
              style={{ marginBottom: '40px' }}
            >
              <div style={{
                display: 'inline-block', padding: '5px 16px',
                background: 'rgba(167,139,250,0.09)',
                border: '1px solid rgba(167,139,250,0.22)',
                borderRadius: '20px', fontSize: '11px', color: '#a78bfa',
                letterSpacing: '2.5px', marginBottom: '12px', fontWeight: '700',
              }}>
                APPLICATION
              </div>
              <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#fff', margin: 0 }}>
                {currentCat.formTitle}
              </h2>
              <div style={{
                width: '44px', height: '3px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                borderRadius: '2px', marginTop: '14px',
              }} />
            </motion.div>
          </AnimatePresence>

          <form onSubmit={handleSubmit}>

            {/* 이름 + 연락처 */}
            <div className="apply-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>이름 *</label>
                <Field name="name" placeholder="홍길동" value={formData.name} onChange={handleChange} required />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>연락처 *</label>
                <Field name="phone" type="tel" placeholder="010-0000-0000" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            {/* 이메일 + 닉네임 */}
            <div className="apply-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>이메일 *</label>
                <Field name="email" type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>활동 닉네임</label>
                <Field name="nickname" placeholder="활동명 또는 닉네임" value={formData.nickname} onChange={handleChange} />
              </div>
            </div>

            {/* 포트폴리오 */}
            <div style={fieldWrap}>
              <label style={labelStyle}>포트폴리오 / 참고 링크</label>
              <Field name="portfolio" type="url" placeholder="https://..." value={formData.portfolio} onChange={handleChange} />
            </div>

            {/* 자기소개 */}
            <div style={fieldWrap}>
              <label style={labelStyle}>자기소개 *</label>
              <Field as="textarea" name="intro" rows={4} placeholder="간단하게 자신을 소개해 주세요." value={formData.intro} onChange={handleChange} required />
            </div>

            {/* 지원 동기 */}
            <div style={fieldWrap}>
              <label style={labelStyle}>지원 동기 *</label>
              <Field as="textarea" name="motivation" rows={4} placeholder="T&L STUDIO에 지원하게 된 이유를 알려 주세요." value={formData.motivation} onChange={handleChange} required />
            </div>

            {/* Category-specific fields */}
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{
                  margin: '4px 0 24px',
                  padding: '14px 20px',
                  background: 'rgba(102,126,234,0.05)',
                  border: '1px solid rgba(102,126,234,0.14)',
                  borderRadius: '12px',
                  fontSize: '12px', color: '#a78bfa',
                  fontWeight: '700', letterSpacing: '1.5px',
                }}>
                  {currentCat.label} 추가 항목
                </div>

                {currentCat.extraFields.map((f) => (
                  <div key={f.key} style={fieldWrap}>
                    <label style={labelStyle}>{f.label}</label>
                    {f.type === 'textarea' ? (
                      <Field as="textarea" name={f.key} rows={3} placeholder={f.placeholder} value={formData[f.key]} onChange={handleChange} />
                    ) : (
                      <Field name={f.key} type={f.type} placeholder={f.placeholder} value={formData[f.key]} onChange={handleChange} />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Privacy checkbox */}
            <div style={{
              marginTop: '4px', marginBottom: '28px',
              padding: '20px 22px',
              background: 'rgba(255,255,255,0.02)',
              border: agreementError
                ? '1px solid rgba(239,68,68,0.5)'
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px', transition: 'border-color 0.3s',
            }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{
                    width: '18px', height: '18px', marginTop: '2px',
                    accentColor: '#a78bfa', cursor: 'pointer', flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '600', marginBottom: '6px' }}>
                    개인정보 수집 및 이용 동의 (필수)
                  </div>
                  <div style={{ fontSize: '13px', color: '#718096', lineHeight: '1.75' }}>
                    T&L STUDIO는 지원서 검토 목적으로 이름, 연락처, 이메일 등 개인정보를 수집합니다.
                    수집된 정보는 채용 검토 외 다른 목적으로 사용되지 않으며, 검토 완료 후 안전하게 폐기됩니다.
                  </div>
                  <AnimatePresence>
                    {agreementError && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ fontSize: '13px', color: '#fc8181', marginTop: '8px', fontWeight: '600' }}
                      >
                        개인정보 수집 및 이용에 동의해 주세요.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </label>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={submitting ? {} : { scale: 1.02, boxShadow: '0 14px 44px rgba(102,126,234,0.5)' }}
              whileTap={submitting ? {} : { scale: 0.98 }}
              style={{
                width: '100%', padding: '18px',
                background: submitting
                  ? 'rgba(102,126,234,0.4)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff', border: 'none', borderRadius: '16px',
                fontSize: '17px', fontWeight: '700',
                cursor: submitting ? 'not-allowed' : 'pointer',
                fontFamily: "'Pretendard', sans-serif",
                letterSpacing: '0.5px',
                boxShadow: submitting ? 'none' : '0 6px 24px rgba(102,126,234,0.35)',
                transition: 'all 0.3s',
              }}
            >
              {submitting ? '전송 중...' : '지원서 제출하기'}
            </motion.button>

            {/* Submit error */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '16px', padding: '14px 18px',
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '12px',
                    fontSize: '14px', color: '#fc8181',
                    textAlign: 'center', lineHeight: '1.6',
                  }}
                >
                  전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Apply;
