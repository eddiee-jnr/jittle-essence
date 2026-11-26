import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT US', href: '#story' },
  { label: 'COLLECTION', href: '#collection' },
  { label: 'BRANDS', href: '#brands' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }
    return () => {
      document.body.classList.remove('mobile-nav-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        id="navbar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(8, 8, 8, 0.92)' : 'rgba(8, 8, 8, 0.4)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.15)' : '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'flex',alignItems: 'center',
              justifyContent: 'space-between', height: '84px',
            }}
          >
            {/* Logo (Crest + Luxury Wordmark) */}
            <a
              href="#" id="nav-logo" aria-label="Jittle Essence — Home"
              style={{
                textDecoration: 'none', display: 'inline-flex',
                alignItems: 'center', gap: '0.85rem',
              }}
            >
              <img
                src="/images/logo-navbar.webp"
                alt="Jittle Essence Crest"
                style={{
                  width: '42px', height: '42px',objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(200, 169, 110, 0.25))',
                }}
              />
              <div
                style={{
                  display: 'flex', flexDirection: 'column',
                  letterSpacing: '0.18em', lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.65rem',
                    fontWeight: 600, color: 'var(--color-gold)',
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                  }}
                >
                  JITTLE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    color: 'var(--color-gold-bright)',
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                    opacity: 0.9,
                  }}
                >
                  ESSENCE
                </span>
              </div>
            </a>

            {/* Center Desktop Nav Links */}
            <nav
              aria-label="Main navigation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.8rem',
              }}
              className="hide-mobile"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-gold)' : 'var(--color-text-primary)',
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '0.5rem 0',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-gold)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)';
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Search Action & Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Search button */}
              <button
                type="button"
                id="nav-search-btn"
                onClick={() => {
                  const searchEl = document.getElementById('collection');
                  if (searchEl) searchEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hide-mobile"
                aria-label="Search fragrances"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex',alignItems: 'center',gap: '0.55rem',
                  fontFamily: 'var(--font-sans)',fontSize: '0.74rem',
                  fontWeight: 500,letterSpacing: '0.2em',textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',transition: 'color 0.3s ease',padding: '0.4rem 0.2rem',}}                
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>SEARCH</span>
              </button>

              {/* Mobile hamburger toggle */}
              <button
                id="nav-hamburger"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="show-mobile"
                style={{
                  background: 'none',
                  border: '1px solid rgba(200, 169, 110, 0.3)',
                  cursor: 'pointer',
                  color: 'var(--color-gold)',
                  padding: '0.5rem',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {menuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="4" y1="17" x2="20" y2="17" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer matching 84px height */}
      <div style={{ height: '84px' }} aria-hidden="true" />

      {/* Mobile Full-Screen Menu (Rendered outside transformed header) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-nav-drawer"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`mobile-nav-link ${activeLink === link.label ? 'active' : ''}`}
                onClick={() => {
                  setActiveLink(link.label);
                  closeMenu();
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}

            <div className="gold-divider gold-divider--center" style={{ width: '60px' }} />

            <button
              type="button"
              className="mobile-nav-search-btn"
              onClick={() => {
                closeMenu();
                const searchEl = document.getElementById('collection');
                if (searchEl) searchEl.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>SEARCH</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
