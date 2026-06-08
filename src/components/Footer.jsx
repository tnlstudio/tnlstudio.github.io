import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer" style={{
      padding: '80px 60px 40px',
      background: 'linear-gradient(to top, #000000 0%, #0a0a0f 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="site-footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '60px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: '20px', fontWeight: '700', marginBottom: '16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              T&L STUDIO
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '16px' }}>
              다양한 재능을 가진 사람들과 함께 성장하는 크리에이터 스튜디오
            </p>
            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              borderRadius: '20px',
              fontSize: '12px', color: '#a78bfa',
              fontWeight: '600', letterSpacing: '1px',
            }}>
              멤버 및 제작 파트너 모집 중
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Recruit', path: '/talents' },
                { name: 'Content', path: '/content' },
                { name: '지원하기', path: '/apply' },
                { name: 'Fanworks', path: '/fanworks' },
                { name: 'FAQ', path: '/faq' },
                { name: '정보 처리 안내', path: '/privacy' },
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{
                    fontSize: '14px', color: 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s', cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Recruitment */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              RECRUITMENT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['크리에이터', '편집자', '기획자', '일러스트레이터', '개발자'].map((item) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '14px', color: 'rgba(255,255,255,0.5)',
                }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & SNS */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '20px', letterSpacing: '1px' }}>
              OFFICIAL CHANNELS
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.75', marginBottom: '20px' }}>
              공식 채널은 콘텐츠 공개 일정에 맞춰 순차적으로 오픈됩니다.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
              {[
                { label: 'X', icon: '𝕏' },
                { label: 'YouTube', icon: '▶' },
                { label: 'TikTok', icon: '♪' },
                { label: 'Discord', icon: '◈' },
              ].map((sns) => (
                <div
                  key={sns.label}
                  title={sns.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', color: 'rgba(255,255,255,0.3)',
                    cursor: 'default',
                  }}
                >
                  {sns.icon}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.75' }}>
              지원 및 문의는 지원 폼을 통해 주세요.
            </p>
          </div>
        </div>

        {/* Recruitment notice */}
        <div style={{
          padding: '20px 28px',
          background: 'rgba(102, 126, 234, 0.05)',
          border: '1px solid rgba(102, 126, 234, 0.15)',
          borderRadius: '16px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#a78bfa',
            boxShadow: '0 0 8px rgba(167,139,250,0.8)',
            flexShrink: 0,
            animation: 'none',
          }} />
          <p style={{ fontSize: '14px', color: '#a0aec0', margin: 0, lineHeight: '1.6' }}>
            현재 T&L STUDIO는 <span style={{ color: '#a78bfa', fontWeight: '600' }}>크리에이터 및 제작 파트너</span>를 모집 중입니다.
            관심 있으신 분은 지원하기 페이지를 통해 지원서를 제출해 주세요.
          </p>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © 2026 T&L STUDIO. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            함께 성장하는 크리에이터 스튜디오 · 멤버 및 제작 파트너 모집 중
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
