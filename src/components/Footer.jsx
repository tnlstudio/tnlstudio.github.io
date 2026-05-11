import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer" style={{ padding: '80px 60px 40px', background: 'linear-gradient(to top, #000000 0%, #0a0a0f 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="site-footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', marginBottom: '60px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T&L STUDIO</h3>
            <p style={{ fontSize: '14px', opacity: 0.6, lineHeight: '1.8' }}>새로운 세계에서의 즐거움을 제공하는 VTuber 매니지먼트 스튜디오</p>
          </div>
        </div>
        <div style={{ paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', opacity: 0.5 }}>© 2026 T&L STUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
