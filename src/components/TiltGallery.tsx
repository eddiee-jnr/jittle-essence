import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { products } from '../data';

// 6 iconic showcase bottles for the 3D Tilted Orbit
const GALLERY_ITEMS = products.slice(0, 6);

export default function TiltGallery() {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius calculation
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { radiusX, radiusY, cardWidth, cardHeight } = useMemo(() => {
    if (windowWidth < 640) {
      return { radiusX: 190, radiusY: 85, cardWidth: 140, cardHeight: 180 };
    }
    if (windowWidth < 1024) {
      return { radiusX: 270, radiusY: 110, cardWidth: 175, cardHeight: 225 };
    }
    return { radiusX: 380, radiusY: 145, cardWidth: 210, cardHeight: 270 };
  }, [windowWidth]);

  // Rotation angle in degrees
  const rawRotation = useMotionValue(0);
  const smoothRotation = useSpring(rawRotation, { stiffness: 85, damping: 22 });
  const [currentRotation, setCurrentRotation] = useState(0);

  // Keep state in sync with spring for rendering math
  useEffect(() => {
    const unsubscribe = smoothRotation.on('change', (val) => {
      setCurrentRotation(val);
    });
    return () => unsubscribe();
  }, [smoothRotation]);

  // Subtle auto-orbit when not interacting
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isDragging && !isHovered) {
        // Slow luxury idle spin: ~7 degrees per second
        rawRotation.set(rawRotation.get() + delta * 7);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isHovered, rawRotation]);

  // Drag interaction handlers with gesture disambiguation (allows vertical page scrolling)
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const rotationAtDragStart = useRef(0);
  const gestureIntent = useRef<'vertical' | 'horizontal' | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    rotationAtDragStart.current = rawRotation.get();
    gestureIntent.current = null;

    if (e.pointerType === 'mouse') {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const deltaX = e.clientX - dragStartX.current;
    const deltaY = e.clientY - dragStartY.current;

    // Determine gesture intent on touch devices
    if (!gestureIntent.current) {
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > 6 || absY > 6) {
        if (absY > absX) {
          // User is scrolling vertically -> allow native page scroll with zero interference
          gestureIntent.current = 'vertical';
          return;
        } else {
          // User is dragging horizontally -> engage 3D turntable spin
          gestureIntent.current = 'horizontal';
          setIsDragging(true);
          try {
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          } catch {}
        }
      } else {
        return;
      }
    }

    if (gestureIntent.current === 'vertical') {
      return;
    }

    if (gestureIntent.current === 'horizontal' || isDragging) {
      rawRotation.set(rotationAtDragStart.current + deltaX * 0.35);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    gestureIntent.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  // Click card to bring it front & center
  const rotateToIndex = (index: number) => {
    const total = GALLERY_ITEMS.length;
    const targetAngle = -(index * (360 / total));
    const current = rawRotation.get();
    const diff = ((targetAngle - current) % 360 + 540) % 360 - 180;
    rawRotation.set(current + diff);
  };

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        background: '#070707',
        color: '#FAF8F5',
        padding: 'clamp(4.5rem, 7vw, 7.5rem) 0 clamp(5.5rem, 8vw, 8.5rem)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        userSelect: 'none',
      }}
    >
      {/* Background Ambient Pedestal Glow (Calm, Soft Diffusion) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '47%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '760px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(232, 213, 183, 0.075) 0%, rgba(200, 169, 110, 0.035) 35%, rgba(18, 75, 67, 0.015) 60%, transparent 80%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative luxury radial coordinate ring (Shifted up with gallery) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(320px, 60vw, 720px)',
          height: 'clamp(320px, 60vw, 720px)',
          borderRadius: '50%',
          border: '1px dashed rgba(232, 213, 183, 0.08)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1380px' }}>
        
        {/* 3D Tilt Turntable Stage Container (Shifted up slightly) */}
        <div
          ref={containerRef}
          className="gallery-stage"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(480px, 58vw, 620px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'pan-y',
            transform: 'translateY(-16px)',
          }}
        >
          {/* 2D STATIC CENTER BRAND MOTTO ANCHOR (Centered in middle) */}
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 12,
              textAlign: 'center',
              pointerEvents: 'none',
              width: '100%',
              maxWidth: '560px',
              padding: '1rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Official Brand Motto (Bold Serif + Playfair Italic) */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                  color: '#FFFFFF',
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.95)',
                  marginBottom: '0.4rem',
                }}
              >
                Stand Out
                <br />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: '#E8D5B7',
                    textShadow: '0 0 28px rgba(232, 213, 183, 0.22), 0 2px 15px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  From The Crowd
                </span>
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
                  fontStyle: 'italic',
                  color: '#FAF8F5',
                  letterSpacing: '0.04em',
                  marginTop: '0.2rem',
                }}
              >
                Define Your Essence.
              </p>
            </motion.div>
          </div>

          {/* 3D TILTED ORBITING CARDS */}
          {GALLERY_ITEMS.map((item, idx) => {
            const count = GALLERY_ITEMS.length;
            const stepAngle = 360 / count;
            const itemAngleDeg = idx * stepAngle + currentRotation;
            const itemAngleRad = (itemAngleDeg * Math.PI) / 180;

            // Symmetrical positioning on the receding 3D ellipse around center text
            const posX = Math.sin(itemAngleRad) * radiusX;
            const posY = Math.cos(itemAngleRad) * radiusY;

            // Depth calculation: -1 (far back) to +1 (front center)
            const depthFactor = (Math.cos(itemAngleRad) + 1) / 2;

            // Dynamic scale: 0.72 (back) -> 1.08 (front)
            const scale = 0.72 + depthFactor * 0.36;
            // Vibrant visibility: minimum 58% opacity instead of washed-out 32%
            const opacity = 0.58 + depthFactor * 0.42;
            // Subtle photographic micro-blur (max 0.6px instead of 2.8px) so all bottles stay sharp
            const blurAmount = (1 - depthFactor) * 0.6;

            const zIndex = Math.round(depthFactor * 30);
            const isFront = depthFactor > 0.85;

            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => rotateToIndex(idx)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px)) scale(${scale})`,
                  zIndex,
                  opacity,
                  filter: `blur(${blurAmount}px)`,
                  transition: isDragging ? 'none' : 'filter 0.3s ease, opacity 0.3s ease',
                  cursor: 'pointer',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  willChange: 'transform',
                }}
              >
                {/*Image Card Body */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    background: '#121110',
                    border: isFront
                      ? '1px solid rgba(232, 213, 183, 0.45)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isFront
                      ? '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 28px rgba(232, 213, 183, 0.16)'
                      : '0 10px 30px rgba(0, 0, 0, 0.65)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        filter: isFront ? 'brightness(1)' : 'brightness(0.9)',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E8D5B7',
                        fontSize: '2rem',
                      }}
                    >
                      ✦
                    </div>
                  )}

                  {/* Subtle luxury edge reflection on front card */}
                  {isFront && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '22px',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Drag Hint Pill (Positioned outside the 3D spin orbit) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.75rem',
            position: 'relative',
            zIndex: 15,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.38rem 1rem',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.62rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C7BFB0',
            }}
          >
            <span>↔</span>
            <span>Drag to Spin · Tap Bottle to Focus</span>
          </div>
        </div>

      </div>
    </section>
  );
}
