import { motion } from 'framer-motion';
import { STORE_WHATSAPP_PHONE, getWhatsAppInquiryUrl } from '../utils/whatsapp';

export default function ContactCTA() {
  const whatsappUrl = getWhatsAppInquiryUrl(
    "Hello Jittle Essence, I would like to order a fragrance and get personal scent recommendations."
  );

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: '#F6F4EE', // Off-white luxury cream matching inspo
        color: '#151311',
        padding: 'clamp(5.5rem, 8vw, 8rem) 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column: WhatsApp-First Instagram-Ad Style CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '580px' }}
          >
            {/* Live Online Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                marginBottom: '1.4rem',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  boxShadow: '0 0 10px #25D366',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#124B43',
                }}
              >
                CHAT WITH US ON WHATSAPP · FAST REPLY
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#151311',
                marginBottom: '1.4rem',
              }}
            >
              Stay connected to
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#2B2724' }}>
                elegance in every drop
              </span>
            </h2>

            {/* Narrative text */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#5E5952',
                marginBottom: '2.5rem',
              }}
            >
              Order directly on WhatsApp. Chat with us to ask questions, check available perfumes, and enjoy same-day doorstep delivery in Accra or fast shipping across Ghana.
            </p>

            {/* ── Main WhatsApp Action Buttons (Instagram-Ad High Conversion) ── */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              {/* Primary WhatsApp Pill Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderRadius: '999px',
                  padding: '1.05rem 2.6rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: '#124B43', // Deep Emerald / Green
                  color: '#FFFFFF',
                  boxShadow: '0 8px 25px rgba(18, 75, 67, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0E3B35';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(18, 75, 67, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#124B43';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(18, 75, 67, 0.3)';
                }}
              >
                {/* WhatsApp Logo */}
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.058-2.126-.531-1.825-.753-2.999-2.613-3.09-2.735-.091-.121-.737-.981-.737-1.87 0-.89.467-1.327.633-1.509.167-.182.366-.228.489-.228.122 0 .245.002.35.007.112.006.262-.043.41.312.152.365.518 1.267.564 1.359.046.091.077.198.016.32-.061.122-.092.198-.183.305-.091.106-.192.238-.274.32-.091.091-.187.19-.08.374.106.183.473.78 1.014 1.263.696.621 1.282.814 1.465.906.183.091.29.076.396-.046.106-.122.456-.533.578-.716.121-.182.244-.152.41-.091.167.061 1.06.5 1.243.591.183.091.305.137.35.213.045.076.045.441-.099.846z" />
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 1.846.505 3.577 1.382 5.064L2.05 21.95l5.02-1.317C8.508 21.464 10.198 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.636 0-3.167-.47-4.469-1.28l-.321-.202-3.084.81.823-3.007-.22-.35C3.864 14.654 3.333 13.364 3.333 12c0-4.779 3.888-8.667 8.667-8.667 4.778 0 8.667 3.888 8.667 8.667 0 4.779-3.889 8.667-8.667 8.667z" />
                </svg>
                <span>ORDER ON WHATSAPP</span>
              </a>

              {/* Secondary Call Action */}
              <a
                href={`tel:+${STORE_WHATSAPP_PHONE}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  borderRadius: '999px',
                  padding: '1.05rem 1.8rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  color: '#151311',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#124B43';
                  e.currentTarget.style.color = '#124B43';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.color = '#151311';
                }}
              >
                <span>CALL US DIRECTLY</span>
              </a>
            </div>

            {/* Trust Bullet Row */}
            <div
              style={{
                display: 'flex',
                gap: '1.2rem',
                flexWrap: 'wrap',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-sans)',
                color: '#7A7368',
              }}
            >
              <span>⚡ Same-Day Accra Delivery</span>
              <span>✦ 100% Authentic Guaranteed</span>
              <span>📦 Nationwide Ghana Courier</span>
            </div>
          </motion.div>

          {/* ── Right Column: Botanical Sculptural Composition ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                aspectRatio: '16/11',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.03)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                background: '#FFFFFF',
              }}
            >
              <img
                src="/images/cta-botanical.webp"
                alt="Jittle Essence Botanical Elegance"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.96) contrast(1.05)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
