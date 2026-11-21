const ROW_1_BRANDS = [
  'SAUVAGE DIOR',
  'HER CONFESSION',
  'VALENTINO',
  'CLUB DE NUIT',
  'TOM FORD',
  'LATTAFA',
  'LOUIS VUITTON',
  'CREED AVENTUS',
  'ARMAF',
  'MAISON FRANCIS KURKDJIAN',
  'BLEU DE CHANEL',
  'YVES SAINT LAURENT',
];

const ROW_2_BRANDS = [
  'PARFUMS DE MARLY',
  'BYREDO',
  'KILIAN PARIS',
  'AMOUAGE',
  'GUCCI GUILTY',
  'PRADA LUNA ROSSA',
  'JEAN PAUL GAULTIER',
  'GIORGIO ARMANI',
  'VERSACE EROS',
  'MONTBLANC EXPLORER',
  'XERJOFF',
  'BURBERRY GODDESS',
];

export default function BrandTicker() {
  return (
    <section
      id="brands"
      aria-label="Featured Luxury Fragrance Houses"
      style={{
        position: 'relative',
        background: '#0B0B0B',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '3rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Section Header / Eyebrow */}
      <div
        className="section-container"
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <span
            style={{
              width: '24px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #E8D5B7)',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#E8D5B7',
            }}
          >
            CURATED PRESTIGE HOUSES · 100% ORIGINAL
          </p>
          <span
            style={{
              width: '24px',
              height: '1px',
              background: 'linear-gradient(90deg, #E8D5B7, transparent)',
            }}
          />
        </div>
      </div>

      {/* Left & Right Fade Masks for Smooth Infinite Marquee Effect */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: 'clamp(50px, 12vw, 160px)',
          background: 'linear-gradient(to right, #0B0B0B 15%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: 'clamp(50px, 12vw, 160px)',
          background: 'linear-gradient(to left, #0B0B0B 15%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Marquee Rows Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
        }}
      >
        {/* Row 1: Leftward Marquee */}
        <div className="marquee-track" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-content" style={{ display: 'flex', alignItems: 'center', animationDuration: '38s' }}>
            {/* Duplicated list to ensure unbroken infinite loop */}
            {[...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, index) => (
              <div
                key={`r1-${index}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 2.2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#FAF8F5',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E8D5B7';
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FAF8F5';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {brand}
                </span>
                <span
                  style={{
                    marginLeft: '2.2rem',
                    color: '#E8D5B7',
                    opacity: 0.5,
                    fontSize: '0.85rem',
                  }}
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward / Reverse Marquee */}
        <div className="marquee-track" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-content marquee-content--reverse" style={{ display: 'flex', alignItems: 'center', animationDuration: '42s' }}>
            {/* Duplicated list to ensure unbroken infinite loop */}
            {[...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, index) => (
              <div
                key={`r2-${index}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 2.2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.78rem, 1.2vw, 0.95rem)',
                    fontWeight: 500,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: '#A8A29A',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E8D5B7')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A8A29A')}
                >
                  {brand}
                </span>
                <span
                  style={{
                    marginLeft: '2.2rem',
                    color: '#E8D5B7',
                    opacity: 0.35,
                    fontSize: '0.7rem',
                  }}
                >
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
