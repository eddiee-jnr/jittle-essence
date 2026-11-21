import { motion } from 'framer-motion';
import { testimonials, type Testimonial } from '../data';

// Split testimonials into two distinct columns for the dual-column wall
const column1Reviews = [testimonials[0], testimonials[1], testimonials[4]];
const column2Reviews = [testimonials[2], testimonials[3], testimonials[5]];

// Duplicate reviews to achieve seamless, infinite continuous loops
const loopColumn1 = [...column1Reviews, ...column1Reviews, ...column1Reviews];
const loopColumn2 = [...column2Reviews, ...column2Reviews, ...column2Reviews];

// Compact Review Card component matching reference design
function TestimonialCard({ item }: { item: Testimonial }) {
  const handle = `@${item.name.toLowerCase().replace(/[^a-z0-9]/g, '')}_${item.location.split(',')[0].toLowerCase().trim()}`;
  
  const initials = item.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '18px',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 6px 22px rgba(0, 0, 0, 0.035), 0 2px 8px rgba(0, 0, 0, 0.02)',
        padding: '1.15rem 1.35rem',
        marginBottom: '1rem',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.07)';
        e.currentTarget.style.borderColor = 'rgba(18, 75, 67, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 22px rgba(0, 0, 0, 0.035), 0 2px 8px rgba(0, 0, 0, 0.02)';
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
      }}
    >
      {/* Card Header: Avatar, Name & Handle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
        {/* Avatar Circle */}
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #124B43 0%, #0E3B35 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.72rem',
            fontWeight: 700,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.05em',
            flexShrink: 0,
            boxShadow: '0 3px 10px rgba(18, 75, 67, 0.18)',
          }}
        >
          {initials}
        </div>

        {/* User Info */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              fontWeight: 700,
              color: '#151311',
              lineHeight: 1.2,
              marginBottom: '0.1rem',
            }}
          >
            {item.name}
          </h4>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              color: '#7D756A',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {handle} · <span style={{ color: '#124B43', fontWeight: 600 }}>✓ Verified</span>
          </p>
        </div>
      </div>

      {/* Review Text */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.82rem',
          fontWeight: 400,
          lineHeight: 1.55,
          color: '#4A453F',
          margin: 0,
        }}
      >
        {item.text}
      </p>

      {/* Verified Order Tag */}
      <div
        style={{
          marginTop: '0.65rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.62rem',
          fontFamily: 'var(--font-sans)',
          color: '#8A8275',
          background: '#F9F8F5',
          padding: '0.18rem 0.55rem',
          borderRadius: '999px',
          border: '1px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        <span>{item.verifiedOrder}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        background: '#F4EFEA', // Luxury warm cream canvas matching reference
        color: '#151311',
        padding: 'clamp(4rem, 6.5vw, 6.5rem) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 2 }}>
        
        {/* ── Restored Original Header Section ── */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(2rem, 3.5vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.7rem',
              }}
            >
              <span style={{ width: '18px', height: '1px', background: '#9A8E7E' }} />
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.66rem',
                  fontWeight: 600,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#8A7E70',
                }}
              >
                TESTIMONIALS · AUTHENTIC VOICES
              </p>
              <span style={{ width: '18px', height: '1px', background: '#9A8E7E' }} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#151311',
              }}
            >
              What Our{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#2B2724' }}>
                Customers
              </span>{' '}
              Are Saying
            </h2>
          </motion.div>
        </div>

        {/* ── Dual-Column Infinite Scrolling Marquee Wall ── */}
        <div
          style={{
            position: 'relative',
            height: 'clamp(460px, 52vw, 560px)',
            overflow: 'hidden',
            // Seamless gradient fade masks at top and bottom
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1rem, 2vw, 1.6rem)',
              height: '100%',
            }}
          >
            {/* ── Column 1: Upward Infinite Stream ── */}
            <div className="testimonial-column" style={{ overflow: 'hidden', position: 'relative' }}>
              <div className="testimonial-track-up">
                {loopColumn1.map((review, i) => (
                  <TestimonialCard key={`col1-${review.id}-${i}`} item={review} />
                ))}
              </div>
            </div>

            {/* ── Column 2: Downward Infinite Stream ── */}
            <div className="testimonial-column" style={{ overflow: 'hidden', position: 'relative' }}>
              <div className="testimonial-track-down">
                {loopColumn2.map((review, i) => (
                  <TestimonialCard key={`col2-${review.id}-${i}`} item={review} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
