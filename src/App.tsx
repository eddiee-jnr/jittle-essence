import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import CollectionSpotlight from './components/CollectionSpotlight';
import OurStory from './components/OurStory';
import TiltGallery from './components/TiltGallery';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-obsidian)' }}>

      {/* ── Fixed Luxury Navigation ── */}
      <Navbar />

      <main id="main-content" style={{ flex: 1 }}>
        {/* ── Hero Section (Cinematic Video, 14s Crop, High-Contrast Typography) ── */}
        <Hero />

        {/* ── Brand Ticker (Continuous Dual-Direction Infinite Ribbon) ── */}
        <BrandTicker />

        {/* ── Collection Spotlight (Light Stone Palette, 3-Card Grid, Serif Pricing) ── */}
        <CollectionSpotlight />

        {/* ── Our Story & Philosophy (High-Contrast Editorial Split, Parallax Flacon) ── */}
        <OurStory />

        {/* ── Interactive 3D Tilt Turntable Gallery (Receding Disc with 2D Center Motto) ── */}
        <TiltGallery />

        {/* ── Client Testimonials (Magazine Pull-Quotes, Clean Vertical Dividers) ── */}
        <Testimonials />

        {/* ── Contact / WhatsApp CTA ── */}
        <ContactCTA />
      </main>

      {/* ── Luxury Footer ── */}
      <Footer />

    </div>
  );
}
