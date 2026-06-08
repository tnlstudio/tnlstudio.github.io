import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: '지원 경험이 전혀 없어도 지원할 수 있나요?',
    a: '네, 가능합니다. 경험보다는 열정과 방향성을 중요하게 봅니다. 스트리밍·영상 제작·기획 경험이 없더라도 T&L STUDIO와 함께 성장하고 싶은 분이라면 누구든지 지원할 수 있습니다.',
  },
  {
    q: '활동 시 개인 세금이나 계약 조건은 어떻게 되나요?',
    a: '세부 계약 조건은 합격 이후 개별적으로 안내드립니다. 모집 단계에서는 구체적인 수익 배분이나 계약 형태를 확정하지 않으며, 합격자와의 협의를 통해 결정됩니다.',
  },
  {
    q: '장비나 소프트웨어가 없어도 지원 가능한가요?',
    a: '최소한의 환경(마이크, PC 등)은 갖추어 주시면 좋지만, 장비 유무가 합격 여부에 결정적인 영향을 미치지는 않습니다. 활동에 필요한 환경 구성은 합류 후 팀과 함께 논의합니다.',
  },
  {
    q: '활동 방향이나 콘텐츠는 어떻게 결정되나요?',
    a: '크리에이터와 제작팀이 함께 논의하여 결정합니다. 특정 콘텐츠를 강요하지 않으며, 각 크리에이터의 개성과 강점을 살릴 수 있는 방향을 함께 모색합니다.',
  },
  {
    q: '합격 후 활동까지 얼마나 걸리나요?',
    a: '팀 구성 완료 후 캐릭터 공개 및 데뷔 준비 단계를 거칩니다. 정확한 일정은 팀 구성 상황에 따라 달라지며, 합격 통보 시 예상 일정을 함께 안내드립니다.',
  },
  {
    q: '수익 발생은 언제부터인가요?',
    a: '데뷔 후 실제 활동이 시작되면서 수익이 발생합니다. 세부적인 수익 구조와 배분 방식은 계약 단계에서 상세히 설명드립니다.',
  },
  {
    q: '팀 전체 활동 참여가 필수인가요?',
    a: '팀 합방이나 공동 콘텐츠에 참여를 권장하지만, 개인 활동도 병행할 수 있습니다. 강제적인 공동 활동은 없으며, 참여 여부는 개인의 의사를 존중합니다.',
  },
  {
    q: '지원 결과는 언제, 어떻게 알 수 있나요?',
    a: '지원서 검토 후 개별적으로 연락드립니다. 서류 검토에는 수 주가 소요될 수 있으며, 결과와 관계없이 모든 지원자에게 결과를 안내드리는 것을 목표로 하고 있습니다.',
  },
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '28px 0', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '20px', textAlign: 'left',
          fontFamily: "'Pretendard', sans-serif",
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <span style={{
            fontSize: '12px', fontWeight: '800', color: '#a78bfa',
            letterSpacing: '1px', flexShrink: 0, marginTop: '3px',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#fff', lineHeight: '1.5' }}>
            {item.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            width: '32px', height: '32px', flexShrink: 0,
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', color: open ? '#a78bfa' : 'rgba(255,255,255,0.4)',
          }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              paddingBottom: '28px', paddingLeft: '36px',
              fontSize: '15px', color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.8',
            }}>
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
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
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="faq-hero-title" style={{
            fontSize: '64px', fontWeight: '800', marginBottom: '20px', lineHeight: 1.1,
          }}>
            FAQ
          </h1>
          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '500px',
            margin: '0 auto', lineHeight: '1.75',
          }}>
            지원 및 활동과 관련해 자주 묻는 질문을 정리했습니다.
          </p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <div className="faq-container" style={{ maxWidth: '780px', margin: '80px auto 0', padding: '0 60px' }}>
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: '64px', padding: '40px',
          background: 'rgba(102,126,234,0.06)',
          border: '1px solid rgba(102,126,234,0.18)',
          borderRadius: '24px', textAlign: 'center',
        }}>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', marginBottom: '20px', lineHeight: '1.75' }}>
            여기서 해결되지 않은 궁금한 점이 있으신가요?<br />
            지원 폼을 통해 문의 내용을 남겨주시면 검토 후 안내드립니다.
          </p>
          <motion.a
            href="#/apply"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block', padding: '12px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff', borderRadius: '28px',
              fontSize: '14px', fontWeight: '700',
              textDecoration: 'none', letterSpacing: '0.5px',
              boxShadow: '0 4px 20px rgba(102,126,234,0.35)',
            }}
          >
            지원하기 / 문의하기
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
