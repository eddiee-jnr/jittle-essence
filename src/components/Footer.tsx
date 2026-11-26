import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppInquiryUrl } from '../utils/whatsapp';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  // Lock body scroll when legal modal is open
  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalType]);

  const closeModal = () => setModalType(null);

  return (
    <footer
      id="footer"
      style={{
        position: 'relative', background: '#F4F1EB', color: '#151311',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)', overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Subtle Background Watermark Crest for Mobile (Controlled in mobile.css) */}
      <div className="footer-watermark" aria-hidden="true">
        <img
          src="/images/logo-dark-crest.webp"
          alt=""
          className="footer-watermark-img"
        />
      </div>

      <div className="section-container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
        
        {/* Top Center: Emblem, Brand Name & Philosophy (Hidden on Mobile via mobile.css) */}
        <div className="footer-brand-section" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4.5rem' }}>
          <img
            src="/images/logo-dark-crest.webp"
            alt="Jittle Essence Monogram Crest"
            style={{
              width: '64px', height: '64px', margin: '0 auto 1.5rem',
              display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
            }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#151311', lineHeight: 1, marginBottom: '1.4rem',
            }}
          >
            Jittle Essence
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 400, lineHeight: 1.7, color: '#55514B',
            }}
          >
            Curated with precision and passion, Jittle Essence brings you certified 100% authentic luxury fragrances designed to inspire confidence, presence, and unforgettable memories.
          </p>
        </div>

        {/* 4-Column Navigation & Information Grid (2x2 on Mobile via mobile.css) */}
        <div
          className="footer-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '4.5rem',
          }}
        >
          {/* Column 1 (Top-Left on Mobile): Quick Links */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, color: '#151311',
                marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#story' },
                { label: 'Collections', href: '#collection' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: '#656057',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 (Top-Right on Mobile): Customer Care & Help */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem',
                fontWeight: 700, color: '#151311', marginBottom: '0.9rem',
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}
            >
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'Chat on WhatsApp', href: getWhatsAppInquiryUrl(), external: true, icon: 'whatsapp' },
                { label: '+233 54 755 0593', href: 'tel:+233547550593', icon: 'phone' },
                { label: 'Custom Sourcing', href: '#contact' },
                { label: 'Gift Packaging', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                      fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: '#656057',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                  >
                    {item.icon === 'whatsapp' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.058-2.126-.531-1.825-.753-2.999-2.613-3.09-2.735-.091-.121-.737-.981-.737-1.87 0-.89.467-1.327.633-1.509.167-.182.366-.228.489-.228.122 0 .245.002.35.007.112.006.262-.043.41.312.152.365.518 1.267.564 1.359.046.091.077.198.016.32-.061.122-.092.198-.183.305-.091.106-.192.238-.274.32-.091.091-.187.19-.08.374.106.183.473.78 1.014 1.263.696.621 1.282.814 1.465.906.183.091.29.076.396-.046.106-.122.456-.533.578-.716.121-.182.244-.152.41-.091.167.061 1.06.5 1.243.591.183.091.305.137.35.213.045.076.045.441-.099.846z" />
                        <path d="M12 2C6.486 2 2 6.486 2 12c0 1.846.505 3.577 1.382 5.064L2.05 21.95l5.02-1.317C8.508 21.464 10.198 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.636 0-3.167-.47-4.469-1.28l-.321-.202-3.084.81.823-3.007-.22-.35C3.864 14.654 3.333 13.364 3.333 12c0-4.779 3.888-8.667 8.667-8.667 4.778 0 8.667 3.888 8.667 8.667 0 4.779-3.889 8.667-8.667 8.667z" />
                      </svg>
                    )}
                    {item.icon === 'phone' && (
                      <span style={{ fontSize: '0.8rem', flexShrink: 0 }}>📞</span>
                    )}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Bottom-Left on Mobile): Location & Orders */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem',fontWeight: 700, color: '#151311',
                marginBottom: '0.9rem',textTransform: 'uppercase',letterSpacing: '0.06em',
              }}
            >
              Location & Orders
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.86rem',
                color: '#656057', lineHeight: 1.6, marginBottom: '0.45rem',
              }}
            >
              Jittle Essence Store<br />
              Accra, Ghana
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#124B43', fontWeight: 600, lineHeight: 1.5,
              }}
            >
              📦 Nationwide Delivery
            </p>
          </div>

          {/* Column 4 (Bottom-Right on Mobile): Legal & Policies */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700,
                color: '#151311', marginBottom: '0.9rem',textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Privacy & Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('privacy')}
                  style={{
                    background: 'none', border: 'none',padding: 0, margin: 0, fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem', color: '#656057', textDecoration: 'none', cursor: 'pointer',
                    transition: 'color 0.2s ease',textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('terms')}
                  style={{
                    background: 'none', border: 'none',padding: 0, margin: 0, fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem', color: '#656057', textDecoration: 'none', cursor: 'pointer',
                    transition: 'color 0.2s ease',textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            padding: '2.5rem 0 3rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.76rem', color: '#7D756A',
            }}
          >
            © {new Date().getFullYear()} JITTLE ESSENCE. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
              letterSpacing: '0.08em', color: '#8A8275',
            }}
          >
            Made by <strong style={{ color: '#151311', fontWeight: 600 }}>Edd's Lab</strong>
          </p>
        </div>

      </div>

      {/* ── Interactive Legal & Policy Modal ── */}
      <AnimatePresence>
        {modalType && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            style={{
              position: 'fixed', inset: 0, zIndex: 100000, display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: '1.25rem',
              background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#141414',color: '#F0EDE8', border: '1px solid rgba(200, 169, 110, 0.25)', width: '100%',
                maxWidth: '560px', maxHeight: '85vh', display: 'flex',
                flexDirection: 'column', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: '1.4rem 1.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <img
                    src="/images/logo-navbar.webp"
                    alt=""
                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic',
                      fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '0.04em',
                    }}
                  >
                    {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close dialog"
                  style={{
                    background: 'none', border: 'none', color: '#8A8275',
                    fontSize: '1.3rem', cursor: 'pointer', padding: '0.2rem 0.5rem',
                    lineHeight: 1, transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8275')}
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div
                style={{
                  padding: '1.8rem', overflowY: 'auto',
                  fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                  lineHeight: 1.7, color: '#B8B2AA',
                }}
              >
                {modalType === 'privacy' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <p>
                      At <strong style={{ color: '#F0EDE8' }}>Jittle Essence</strong>, we value your trust and are committed to protecting your personal information.
                    </p>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        1. Information We Collect
                      </h4>
                      <p>
                        When placing orders or inquiring via WhatsApp or phone, we collect only the necessary details required for fulfillment: your name, contact phone number, and delivery location across Ghana.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        2. How Your Information Is Used
                      </h4>
                      <p>
                        Your data is used solely to coordinate direct deliveries, provide order tracking updates, and offer customer support. We do not sell, rent, or distribute your private contact details to third parties.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        3. Secure Communication
                      </h4>
                      <p>
                        All fragrance consultations and order interactions take place through end-to-end encrypted WhatsApp messaging or direct telephone calls.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <p>
                      Welcome to <strong style={{ color: '#F0EDE8' }}>Jittle Essence</strong>. By viewing our catalogue or ordering fragrances, you agree to the following terms:
                    </p>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        1. Ordering & Confirmation
                      </h4>
                      <p>
                        All fragrance orders are finalized and confirmed directly via WhatsApp or phone. Price quotations in Ghana Cedis (GHS) are confirmed prior to dispatch.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        2. 100% Authenticity Guarantee
                      </h4>
                      <p>
                        Every bottle in our collection is 100% certified authentic, sourced from verified European and Middle Eastern distributors. We do not deal in diluted fragrances.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                        3. Delivery & Inspection
                      </h4>
                      <p>
                        Same-day delivery is available in Accra and Tema. Nationwide Delivery arrives within 2 to 3 business days. Customers are encouraged to inspect packaging upon delivery before unsealing.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '1rem 1.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex', justifyContent: 'flex-end',
                }}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    background: 'var(--color-gold)', color: '#080808', border: 'none',
                    borderRadius: '8px', padding: '0.6rem 1.4rem', fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase', cursor: 'pointer',
                  }}
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
