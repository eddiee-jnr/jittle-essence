import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { products, type Product } from '../data';
import { getWhatsAppOrderUrl } from '../utils/whatsapp';

const CATEGORIES = [
  'All Collections',
  'Designer Perfumes',
  'Arabian & Oud',
  'Pure Perfume Oils',
  'Body Mists & Philosophy',
  'Gift Sets',
] as const;

export default function CollectionSpotlight() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Collections');
  const [isHoveredArea, setIsHoveredArea] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter products based on selected tab
  const filteredProducts =
    selectedCategory === 'All Collections'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Take 6 featured slides for the horizontal carousel
  const carouselItems = filteredProducts.slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="collection"
      style={{
        position: 'relative',
        background: '#EAE6DF',
        color: '#151311',
        padding: 'clamp(2rem, 2.8vw, 2.8rem) 0 clamp(3.8rem, 4.5vw, 4.5rem)',
        overflow: 'hidden',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1380px' }}>
        
        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.2rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#151311',
              marginBottom: '0.6rem',
            }}
          >
            Explore the{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#2B2724' }}>
              Collection
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#5E5952',
            }}
          >
            Handpicked designer extraits, pure uncut oils, and Arabian masterworks with exceptional sillage.
          </motion.p>
        </div>

        {/* ── Category Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2rem',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.55rem 1.35rem',
                  borderRadius: '999px',
                  border: isSelected ? '1px solid #124B43' : '1px solid rgba(0, 0, 0, 0.1)',
                  background: isSelected ? '#124B43' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#5E5952',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 4px 15px rgba(18, 75, 67, 0.25)' : '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Horizontal Carousel Stage with Hover-Reveal Arrows ── */}
        <div
          onMouseEnter={() => setIsHoveredArea(true)}
          onMouseLeave={() => setIsHoveredArea(false)}
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          {/* Left Arrow Button (Reveals only on hover) */}
          <button
            type="button"
            aria-label="Scroll Carousel Left"
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#151311',
              cursor: 'pointer',
              opacity: isHoveredArea ? 1 : 0,
              pointerEvents: isHoveredArea ? 'auto' : 'none',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#151311';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#151311';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button (Reveals only on hover) */}
          <button
            type="button"
            aria-label="Scroll Carousel Right"
            onClick={() => scroll('right')}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#151311',
              cursor: 'pointer',
              opacity: isHoveredArea ? 1 : 0,
              pointerEvents: isHoveredArea ? 'auto' : 'none',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#151311';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#151311';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* ── Scrollable Track (6 Slides) ── */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              gap: '1.8rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '0.4rem 0.5rem 1.6rem',
              scrollbarWidth: 'none', // Hide standard scrollbar for clean luxury look
              msOverflowStyle: 'none',
            }}
          >
            {carouselItems.map((product, idx) => (
              <CarouselCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>

        {/* ── Bottom Action Button (Inspo: Deep Forest Teal Pill) ── */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              borderRadius: '999px',
              padding: '1rem 2.6rem',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: '#124B43',
              color: '#FFFFFF',
              boxShadow: '0 6px 20px rgba(18, 75, 67, 0.25)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0E3B35';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(18, 75, 67, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#124B43';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(18, 75, 67, 0.25)';
            }}
          >
            <span>VIEW ALL COLLECTIONS</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

// ── Carousel Card Component (Matching Reference Image) ──
function CarouselCard({ product, index }: { product: Product; index: number }) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{
        flex: '0 0 290px',
        scrollSnapAlign: 'start',
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '1.2rem',
        boxShadow: isCardHovered
          ? '0 20px 40px rgba(0, 0, 0, 0.09), 0 4px 12px rgba(0, 0, 0, 0.04)'
          : '0 8px 25px rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isCardHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      <div>
        {/* Visual Image Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '250px',
            borderRadius: '14px',
            background: '#F8F6F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '1.2rem',
          }}
        >
          {product.badge && (
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#151311',
                zIndex: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              {product.badge}
            </div>
          )}

          {/* Perfume Image */}
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.name} by ${product.brand}`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: isCardHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
            />
          ) : (
            <div style={{ color: '#D4AF37', fontSize: '2rem' }}>✦</div>
          )}
        </div>

        {/* Product Name & Details (Inspo: clean centered typography) */}
        <div style={{ textAlign: 'center', padding: '0 0.4rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.94rem',
              fontWeight: 600,
              color: '#151311',
              lineHeight: 1.35,
              marginBottom: '0.35rem',
              minHeight: '2.6em',
            }}
          >
            {product.name}
          </h4>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              color: '#7D756A',
              marginBottom: '0.8rem',
            }}
          >
            {product.size} · {product.concentration}
          </p>

          {/* Price (Inspo: Bold price) */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#124B43',
              marginBottom: '1rem',
            }}
          >
            GH₵ {product.priceGHS.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Card Action Link: Direct 1-Click WhatsApp Order */}
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.8rem' }}>
        <a
          href={getWhatsAppOrderUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${product.name} on WhatsApp`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: isCardHovered ? '#124B43' : '#3E3B36',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          <span>Order on WhatsApp</span>
          <span style={{ transform: isCardHovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.2s ease' }}>
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}
