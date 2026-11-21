import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section
      id="story"
      style={{
        position: 'relative',
        background: '#F4EFEA',
        color: '#151311',
        padding: 'clamp(2.8rem, 4.2vw, 3.8rem) 0 clamp(4.5rem, 6vw, 5.5rem)',
        overflow: 'hidden',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1320px', position: 'relative', zIndex: 2 }}>

        {/* ── Top Centered Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4.2vw, 3.6rem)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#8A8275',
              marginBottom: '0.6rem',
            }}
          >
            CRAFTED IN DETAIL
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
              color: '#151311',
            }}
          >
            The Art of the Essence
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3.5rem)',
            alignItems: 'end',
          }}
        >
          {/* ── Column 1 (Left): Taller Portrait Perfume Flacon ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08), 0 4px 15px rgba(0, 0, 0, 0.03)',
              background: '#FFFFFF',
              aspectRatio: '3/4',
            }}
          >
            <img
              src="/images/story-perfume.webp"
              alt="Jittle Essence Flacon Detail"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.98) contrast(1.02)',
              }}
            />
          </motion.div>

          {/* ── Column 2 (Middle): Offset Staggered Macro Detail ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08), 0 4px 15px rgba(0, 0, 0, 0.03)',
              background: '#FFFFFF',
              aspectRatio: '1/1',
              alignSelf: 'end',
            }}
          >
            <img
              src="/images/perfumes.webp"
              alt="Jittle Essence Botanical Composition"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.98) contrast(1.04)',
              }}
            />
          </motion.div>

          {/* ── Column 3 (Right): Editorial Story Text & Metric Callout ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              transform: 'translateY(-20px)',
              padding: 'clamp(0.5rem, 1.5vw, 1.5rem) 0',
              maxWidth: '380px',
            }}
          >
            {/* Small Eyebrow */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#151311',
                marginBottom: '1.2rem',
              }}
            >
              FROM ORIGIN TO FLACON
            </p>

            {/* Narrative Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#5E5952',
                marginBottom: '2rem',
              }}
            >
              Every reference in our vault is curated directly from authorized European and Middle Eastern perfume houses. Verified authenticity, uncut sillage, and seamless doorstep delivery across Ghana.
            </p>

            {/* Large Italic Serif Stat / Callout (Matching Reference) */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#151311',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}
            >
              100% CERTIFIED AUTHENTICITY
            </h3>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
