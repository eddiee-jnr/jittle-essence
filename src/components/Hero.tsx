import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Subtle floating ambient particles in soft warm champagne
function FloatingParticles() {
  const particles = [
    { x: '8%', y: '22%', size: 2.5, duration: 8, delay: 0 },
    { x: '88%', y: '16%', size: 2.5, duration: 9.5, delay: 1 },
    { x: '72%', y: '68%', size: 3, duration: 7.5, delay: 2 },
    { x: '16%', y: '78%', size: 2, duration: 11, delay: 0.5 },
    { x: '50%', y: '26%', size: 2.5, duration: 10, delay: 3 },
    { x: '94%', y: '82%', size: 2, duration: 6.5, delay: 1.5 },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    >
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1, y: 0 }}
          animate={{
            opacity: [0.1, 0.45, 0.1],
            y: [-15, 15, -15],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: '#E8D5B7',
            boxShadow: '0 0 8px rgba(232, 213, 183, 0.5)',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 84px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '3rem 0 4.5rem',
        background: 'var(--color-obsidian)',
      }}
    >
      {/* ── Background Video Layer ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero.webm#t=0,14"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 14) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.88,
          }}
        />

        {/* Cinematic Vignette Overlay (Crisp video, neutral high contrast on left) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(8, 8, 8, 0.9) 0%, rgba(8, 8, 8, 0.6) 42%, rgba(8, 8, 8, 0.2) 100%),
              linear-gradient(to bottom, rgba(8, 8, 8, 0.5) 0%, transparent 40%, rgba(8, 8, 8, 0.92) 100%)
            `,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* ── Hero Foreground Content (Left-Aligned, Tight & Neutral Luxury Palette) ── */}
      <motion.div
        className="section-container"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 4,
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            maxWidth: '680px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.35rem 0.95rem',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(15, 15, 15, 0.75)',
              backdropFilter: 'blur(12px)',
              marginBottom: '1.2rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#E8D5B7',
                boxShadow: '0 0 6px rgba(232, 213, 183, 0.6)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.64rem',
                fontWeight: 600,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#E8D5B7',
              }}
            >
              SCENT IS MEMORY · AUTHENTIC LUXURY
            </span>
          </motion.div>

          {/* High-Impact Editorial Display Title (Clean White + Refined Champagne Italic) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.4rem, 7.5vw, 6.2rem)',
              fontWeight: 300,
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
              marginBottom: '1.2rem',
            }}
          >
            Essence of{' '}
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: '#E8D5B7',
                fontWeight: 400,
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
              }}
            >
              Every Moment.
            </span>
          </motion.h1>

          {/* Slogan & Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.92rem, 1.25vw, 1.05rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#D4CEBF',
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.95)',
              maxWidth: '540px',
              marginBottom: '2rem',
            }}
          >
            <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>
              Stand out from the crowd, define your essence.
            </strong>{' '}
            Timeless authentic fragrances crafted to evoke emotion, leave an indelible trace, and elevate your presence wherever you go.
          </motion.p>

          {/* Dual Pill CTA Buttons (Neutral Luxury Ivory & Frosted Glass) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '1.1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <a
              href="#collection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '999px',
                padding: '0.95rem 2.4rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                background: '#F0EDE8',
                color: '#080808',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F0EDE8';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
              }}
            >
              <span>EXPLORE COLLECTIONS</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#story"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '999px',
                padding: '0.95rem 2.2rem',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                color: '#FFFFFF',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>OUR STORY</span>
            </a>
          </motion.div>
        </div>

        {/* ── Scroll to Explore Indicator (Subtle Muted Champagne) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            marginTop: '3.5rem',
            textAlign: 'left',
          }}
        >
          <a
            href="#collection"
            aria-label="Scroll to collection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#C5C0B8',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C5C0B8')}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
              }}
            >
              SCROLL TO EXPLORE
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
