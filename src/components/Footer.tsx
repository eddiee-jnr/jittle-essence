import { getWhatsAppInquiryUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        background: '#F4F1EB',
        color: '#151311',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
        
        {/* Top Center: Emblem, Brand Name & Philosophy */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4.5rem' }}>
          {/* Luxury Brand Crest Monogram */}
          <img
            src="/images/logo-dark-crest.webp"
            alt="Jittle Essence Monogram Crest"
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1.5rem',
              display: 'block',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
            }}
          />

          {/* Large Serif Italic Brand Title (Inspo: TREFUME) */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#151311',
              lineHeight: 1,
              marginBottom: '1.4rem',
            }}
          >
            Jittle Essence
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#55514B',
            }}
          >
            Curated with precision and passion, Jittle Essence brings you certified 100% authentic luxury fragrances designed to inspire confidence, presence, and unforgettable memories.
          </p>
        </div>

        {/* 3-Column Navigation & Location Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4.5rem',
          }}
        >
          {/* Column 1: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#151311',
                marginBottom: '1.2rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#story' },
                { label: 'Collections', href: '#collection' },
                { label: 'Featured Brands', href: '#brands' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: '#656057',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
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

          {/* Column 2: Utility & Help Pages */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#151311',
                marginBottom: '1.2rem',
              }}
            >
              Customer Care & Help
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Authenticity Guarantee', href: '#story' },
                { label: 'Shipping & Delivery Info', href: '#contact' },
                { label: 'Custom Perfume Sourcing', href: '#contact' },
                { label: 'Chat on WhatsApp', href: getWhatsAppInquiryUrl(), external: true },
                { label: 'Gift Packaging Service', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: '#656057',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#151311',
                marginBottom: '1.2rem',
              }}
            >
              Location & Orders
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                color: '#656057',
                lineHeight: 1.6,
                marginBottom: '0.6rem',
              }}
            >
              Jittle Essence Fragrance Store<br />
              Accra, Ghana
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                color: '#124B43',
                fontWeight: 600,
              }}
            >
              ⚡ Same-Day Delivery in Accra & Tema<br />
              📦 2-3 Days Nationwide Delivery
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            padding: '2.5rem 0 3rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.76rem',
              color: '#7D756A',
            }}
          >
            © {new Date().getFullYear()} JITTLE ESSENCE. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              color: '#8A8275',
            }}
          >
            Made by <strong style={{ color: '#151311', fontWeight: 600 }}>EddTech Studios</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}
