import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kuldeep-jewellers-logo.jpg";
import heroImage from "@/assets/jewellery-editorial.jpg";
import necklaceImage from "@/assets/necklace-detail.jpg";
import earringsImage from "@/assets/earrings-detail.jpg";
import banglesImage from "@/assets/bangles-detail.jpg";

const instagram = "https://www.instagram.com/kuldeep_jewellers_meerut/";
const maps = "https://share.google/gH59okTZQMCcIptyy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuldeep Jewellers | Jewellery in Meerut" },
      { name: "description", content: "Discover Kuldeep Jewellers in Meerut. Visit us at Bhagat Singh Market, Shohrab Gate, and explore our latest jewellery on Instagram." },
      { property: "og:title", content: "Kuldeep Jewellers | Jewellery in Meerut" },
      { property: "og:description", content: "Visit Kuldeep Jewellers at Bhagat Singh Market, Shohrab Gate, Meerut. Explore the latest jewellery on Instagram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collections = [
  { title: "Necklaces", image: necklaceImage, alt: "Illustrative Indian gold necklace with green accents" },
  { title: "Earrings", image: earringsImage, alt: "Illustrative pair of traditional gold earrings" },
  { title: "Bangles", image: banglesImage, alt: "Illustrative pair of ornate gold bangles" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="announcement text-center">KULDEEP JEWELLERS <span className="mx-3 opacity-50">✦</span> MEERUT</div>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="Kuldeep Jewellers, back to top" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Kuldeep Jewellers logo" className="brand-mark" width="48" height="48" />
            <span className="brand-name">KULDEEP <span>JEWELLERS</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#collections">COLLECTIONS</a>
            <a href="#our-story">OUR STORY</a>
            <a href="#visit">VISIT US</a>
          </nav>
          <div className="header-actions">
            <a className="instagram-icon" href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit Kuldeep Jewellers on Instagram"><Instagram size={19} strokeWidth={1.6} /></a>
            <Button asChild variant="jewel" className="header-visit"><a href="#visit">FIND US <ArrowRight /></a></Button>
            <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#our-story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Instagram ↗</a>
        </nav>}
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img src={heroImage} alt="Illustrative traditional gold necklace with green accents on a dark display" className="hero-image" width="1600" height="1104" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content page-container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> A MEERUT JEWELLER SINCE 1965</p>
              <h1 id="hero-title">Kuldeep<br /><em>Jewellers</em></h1>
              <p className="hero-description">Jewellery for the moments you’ll always remember.</p>
              <div className="hero-buttons">
                <Button asChild variant="jewel" size="lg"><a href="#collections">EXPLORE JEWELLERY <ArrowRight /></a></Button>
                <Button asChild variant="jewelOutline" size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram /> VIEW INSTAGRAM</a></Button>
              </div>
            </div>
            <a className="hero-scroll" href="#collections" aria-label="Scroll to collections"><span>SCROLL TO DISCOVER</span><ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="intro-band" id="collections">
          <div className="page-container intro-inner">
            <div><p className="eyebrow dark-eyebrow">DISCOVER THE DETAILS</p><h2>Made to be <em>remembered.</em></h2></div>
            <p>Explore the beauty of traditional jewellery, then find the latest pieces from Kuldeep Jewellers on Instagram or visit us in Meerut.</p>
          </div>
        </section>

        <section className="collection-section" aria-label="Jewellery inspiration">
          <div className="page-container">
            <div className="section-heading-row"><p className="eyebrow dark-eyebrow">JEWELLERY INSPIRATION</p><a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">SEE ACTUAL PIECES ON INSTAGRAM <ArrowRight size={17} /></a></div>
            <div className="collection-grid">
              {collections.map((item, index) => <a className="collection-item" href={instagram} target="_blank" rel="noopener noreferrer" key={item.title} aria-label={`Explore ${item.title} on Instagram`}>
                <div className="collection-image-wrap"><img src={item.image} alt={item.alt} loading="lazy" width="912" height="1104" /><span className="collection-number">0{index + 1}</span></div>
                <div className="collection-caption"><h3>{item.title}</h3><ArrowRight size={22} strokeWidth={1.3} /></div>
              </a>)}
            </div>
            <p className="image-note">Images are illustrative. Visit Instagram to see jewellery from the store.</p>
          </div>
        </section>

        <section className="story-section" id="our-story">
          <div className="page-container story-inner">
            <div className="story-emblem"><span className="story-since">SINCE</span><strong>1965</strong><span className="story-line" /><span>MEERUT</span></div>
            <div className="story-copy"><p className="eyebrow">OUR STORY</p><h2>A familiar name in <em>Meerut.</em></h2><p>Kuldeep Jewellers has been part of Meerut since 1965. Find us at Bhagat Singh Market, Shohrab Gate, and discover what’s new through our Instagram page.</p><Button asChild variant="jewelOutline" size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer">FOLLOW OUR INSTAGRAM <ArrowRight /></a></Button></div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="page-container visit-inner">
            <div className="visit-heading"><p className="eyebrow dark-eyebrow">COME FIND US</p><h2>Visit us in <em>Meerut.</em></h2><p>We’d love to see you at our store.</p></div>
            <div className="visit-details">
              <div className="visit-detail"><MapPin size={21} strokeWidth={1.5} /><div><span>OUR ADDRESS</span><p>Bhagat Singh Market, Shohrab Gate<br />Meerut, Uttar Pradesh</p></div></div>
              <div className="visit-detail"><Phone size={21} strokeWidth={1.5} /><div><span>CALL US</span><p><a href="tel:+917060582026">+91 70605 82026</a></p></div></div>
              <div className="visit-actions"><Button asChild variant="jewel" size="lg"><a href={maps} target="_blank" rel="noopener noreferrer">GET DIRECTIONS <ArrowRight /></a></Button><Button asChild variant="jewelOutline" size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram /> INSTAGRAM</a></Button></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="page-container footer-inner"><div className="footer-brand"><img src={logo} alt="" width="44" height="44" /><span>KULDEEP JEWELLERS<small>MEERUT</small></span></div><p>Bhagat Singh Market, Shohrab Gate, Meerut</p><div className="footer-links"><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href={maps} target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps"><MapPin size={18} /></a></div></div><div className="page-container footer-bottom"><span>© {new Date().getFullYear()} KULDEEP JEWELLERS</span><span>CRAFTED FOR LIFE’S MOMENTS</span></div></footer>
    </div>
  );
}