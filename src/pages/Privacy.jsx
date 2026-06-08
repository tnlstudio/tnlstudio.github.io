import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    num: '01',
    title: '수집하는 정보',
    content: '지원 폼 제출 시 이름(닉네임), 연락처(이메일 또는 SNS ID), 지원 분야, 자기소개 및 포트폴리오 등 지원자가 직접 입력한 정보를 수집합니다.',
  },
  {
    num: '02',
    title: '이용 목적',
    content: '수집된 정보는 오직 T&L STUDIO 크리에이터 및 제작팀 모집 전형을 위해서만 사용됩니다. 지원자 식별, 전형 진행, 결과 안내 목적 외에는 이용하지 않습니다.',
  },
  {
    num: '03',
    title: '보관 기간',
    content: '모집 전형 종료 후 최대 90일 이내에 수집된 개인정보를 파기합니다. 합격자의 정보는 계약 체결 및 활동 관리를 위해 별도 동의 하에 보관될 수 있습니다.',
  },
  {
    num: '04',
    title: '제3자 제공',
    content: '수집한 개인정보는 외부에 제공하지 않습니다. 단, 법령에 의거한 요청이 있는 경우에는 예외적으로 제공될 수 있습니다.',
  },
  {
    num: '05',
    title: '연락 및 안내',
    content: '지원 결과 안내 및 필요한 경우에 한해 지원자에게 연락할 수 있습니다. 마케팅 또는 홍보 목적의 연락은 하지 않습니다.',
  },
  {
    num: '06',
    title: '정보 삭제 요청',
    content: '제출하신 지원서의 삭제를 원하시는 경우 지원 폼을 통해 삭제 요청을 남겨주시면 확인 후 처리해 드립니다.',
  },
];

const Privacy = () => {
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
            APPLICANT INFORMATION
          </div>
          <h1 className="privacy-hero-title" style={{
            fontSize: '56px', fontWeight: '800', marginBottom: '20px', lineHeight: 1.15,
          }}>
            지원자 정보 처리 안내
          </h1>
          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px',
            margin: '0 auto', lineHeight: '1.8',
          }}>
            T&L STUDIO는 지원자의 개인정보를 소중히 다룹니다.<br />
            아래 내용을 통해 정보 처리 방식을 확인해 주세요.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="privacy-container" style={{ maxWidth: '800px', margin: '80px auto 0', padding: '0 60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {sections.map((sec, i) => (
            <motion.div
              key={sec.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px', padding: '32px 36px',
                display: 'flex', gap: '24px', alignItems: 'flex-start',
              }}
            >
              <div style={{
                flexShrink: 0,
                fontSize: '13px', fontWeight: '800', letterSpacing: '1px',
                color: '#a78bfa', marginTop: '3px',
              }}>
                {sec.num}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginBottom: '10px', margin: '0 0 10px 0' }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', margin: 0 }}>
                  {sec.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Update notice */}
        <div style={{
          marginTop: '48px', padding: '24px 32px',
          background: 'rgba(102,126,234,0.05)',
          border: '1px solid rgba(102,126,234,0.15)',
          borderRadius: '16px', textAlign: 'center',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: '1.8' }}>
            본 안내는 운영 정책에 따라 변경될 수 있으며, 변경 시 사이트를 통해 고지합니다.<br />
            최종 업데이트: 2026년 5월
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
