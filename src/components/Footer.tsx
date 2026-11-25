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
                { label: 'Custom Perfume Sourcing', href: '#contact' },
                { label: 'Gift Packaging Service', href: '#contact' },
                { label: 'Chat on WhatsApp', href: getWhatsAppInquiryUrl(), external: true, icon: 'whatsapp', },
                { label: '+233 54 755 0593', href: 'tel:+233547550593', icon: 'phone', },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: '#656057',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#151311')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#656057')}
                  >
                    {item.icon === 'whatsapp' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.058-2.126-.531-1.825-.753-2.999-2.613-3.09-2.735-.091-.121-.737-.981-.737-1.87 0-.89.467-1.327.633-1.509.167-.182.366-.228.489-.228.122 0 .245.002.35.007.112.006.262-.043.41.312.152.365.518 1.267.564 1.359.046.091.077.198.016.32-.061.122-.092.198-.183.305-.091.106-.192.238-.274.32-.091.091-.187.19-.08.374.106.183.473.78 1.014 1.263.696.621 1.282.814 1.465.906.183.091.29.076.396-.046.106-.122.456-.533.578-.716.121-.182.244-.152.41-.091.167.061 1.06.5 1.243.591.183.091.305.137.35.213.045.076.045.441-.099.846z" />
                        <path d="M12 2C6.486 2 2 6.486 2 12c0 1.846.505 3.577 1.382 5.064L2.05 21.95l5.02-1.317C8.508 21.464 10.198 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.636 0-3.167-.47-4.469-1.28l-.321-.202-3.084.81.823-3.007-.22-.35C3.864 14.654 3.333 13.364 3.333 12c0-4.779 3.888-8.667 8.667-8.667 4.778 0 8.667 3.888 8.667 8.667 0 4.779-3.889 8.667-8.667 8.667z" />
                      </svg>
                    )}
                    {item.icon === 'phone' && (
                      <span style={{ fontSize: '0.82rem', flexShrink: 0 }}>📞</span>
                    )}
                    <span>{item.label}</span>
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
