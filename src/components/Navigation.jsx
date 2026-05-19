import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'RECRUIT', path: '/talents' },
    { name: 'CONTENT', path: '/content' },
    { name: 'FANWORKS', path: '/fanworks' },
    { name: 'ROADMAP', path: '/roadmap' },
    { name: 'FAQ', path: '/faq' },
    { name: '지원하기', path: '/apply', cta: true }
  ];

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '20px 60px',
        background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.3)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="site-nav-inner" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              cursor: 'pointer',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            T&L STUDIO
            {/* Subtle glow effect */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent)',
              filter: 'blur(10px)',
              opacity: 0.5,
              zIndex: -1
            }} />
          </motion.div>
        </NavLink>

        {/* Menu Items */}
        <div className="site-nav-menu" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {menus.map((item) => {
            const isActive = location.pathname === item.path;

            if (item.cta) {
              return (
                <NavLink key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '9px 22px',
                      borderRadius: '22px',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      background: isActive
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'rgba(167, 139, 250, 0.1)',
                      border: isActive ? 'none' : '1px solid rgba(167, 139, 250, 0.3)',
                      color: isActive ? '#fff' : '#a78bfa',
                      boxShadow: isActive ? '0 4px 16px rgba(102, 126, 234, 0.35)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {item.name}
                  </motion.div>
                </NavLink>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                style={{ textDecoration: 'none', position: 'relative' }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    color: isActive ? '#a78bfa' : '#fff',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '500',
                    letterSpacing: '1.5px',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    opacity: isActive ? 1 : 0.7,
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '8px 0'
                  }}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      transition={{ 
                        type: 'spring', 
                        stiffness: 380, 
                        damping: 30,
                        duration: 0.3
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(102, 126, 234, 0.6)'
                      }}
                    />
                  )}

                  {/* Hover indicator */}
                  {!isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        transformOrigin: 'left',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
