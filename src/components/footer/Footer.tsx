import { useState } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import "./footer.css";

/* ============================================================
   ANIMATION HELPERS
============================================================ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const inView = (delay = 0, y = 24) => ({
  initial:    { opacity: 0, y },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.85, ease: EASE, delay } satisfies Transition,
});

const inViewX = (x: number, delay = 0) => ({
  initial:    { opacity: 0, x },
  whileInView:{ opacity: 1, x: 0 },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: EASE, delay } satisfies Transition,
});

/* Column stagger */
const colContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const colItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } as Transition },
};

/* ============================================================
   DATA
============================================================ */

const QUICK_LINKS = [
  { label: "Stay", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/restaurant" },
  { label: "Wellness", href: "/wellness" },
  { label: "Offers", href: "/offers" },
  { label: "Gallery", href: "/gallery" },
];

const GUEST_SERVICES = [
  { label: "Concierge", href: "/concierge" },
  { label: "Airport Transfer", href: "/transfer" },
  { label: "Room Service", href: "/room-service" },
  { label: "Laundry", href: "/laundry" },
  { label: "FAQ", href: "/faq" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

/* ============================================================
   FOOTER
============================================================ */

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="footer-section" id="contact">

      {/* ══ CTA HERO BLOCK ══ */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <motion.div className="footer-cta-left" {...inView(0, 30)}>
            <p className="footer-cta-eyebrow">Limited Time Offer</p>
            <h2 className="footer-cta-headline">
              Stay Longer, Save More
            </h2>
            <p className="footer-cta-description">
              Enjoy up to 20% off when you stay 3 nights or more.
            </p>
          </motion.div>

          <motion.div className="footer-cta-right" {...inViewX(-30, 0.2)}>
            <button className="footer-cta-btn">
              View Offers
            </button>
          </motion.div>
        </div>
      </div>

      {/* ══ MAIN GRID ══ */}
      <div className="footer-main">
        <motion.div
          className="footer-grid"
          variants={colContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* ── Brand Column ── */}
          <motion.div className="footer-col" variants={colItem}>
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-icon">⋂</span>
                <div className="footer-logo-text">
                  <span>Indigenous Seeds Village</span>
                  <small>Hotel & Resort</small>
                </div>
              </div>
              <p className="footer-brand-description">
                Where timeless elegance meets unforgettable experiences.
                A sanctuary rooted in indigenous culture and nature.
              </p>
            </div>

            <div className="footer-social" role="list" aria-label="Social media links">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  role="listitem"
                  aria-label={`Visit us on ${label}`}
                >
                  <span className="footer-social-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links Column ── */}
          <motion.div className="footer-col" variants={colItem}>
            <p className="footer-col-title">Quick Links</p>
            <ul className="footer-nav-list" role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Guest Services Column ── */}
          <motion.div className="footer-col" variants={colItem}>
            <p className="footer-col-title">Guest Services</p>
            <ul className="footer-nav-list" role="list">
              {GUEST_SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact & Newsletter Column ── */}
          <motion.div className="footer-col" variants={colItem}>
            <p className="footer-col-title">Contact</p>
            
            <div className="footer-contact-item">
              <div className="footer-contact-label">Location</div>
              <div className="footer-contact-value">Elementaita, Gilgil, Nakuru, Kenya</div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-label">Phone</div>
              <div className="footer-contact-value">+254 712 451 777</div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-label">Email</div>
              <div className="footer-contact-value">reservations@indigenousseedsvillage.com</div>
            </div>

            <p className="footer-col-title" style={{ marginTop: "32px" }}>Newsletter</p>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="footer-thank-you"
              >
                Thank you for subscribing!
              </motion.div>
            ) : (
              <div className="footer-newsletter">
                <p className="footer-newsletter-body">
                  Subscribe to receive exclusive offers and travel inspiration.
                </p>
                <div className="footer-newsletter-bar">
                  <input
                    className="footer-newsletter-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    aria-label="Email address for newsletter"
                  />
                  <button
                    className="footer-newsletter-submit"
                    onClick={handleSubscribe}
                    aria-label="Subscribe to newsletter"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ══ BOTTOM STRIP ══ */}
      <motion.div className="footer-bottom" {...inView(0, 0)}>
        <p className="footer-bottom-copy">
          © {new Date().getFullYear()} Indigenous Seeds Village Hotel & Resort. All rights reserved.
        </p>

        <nav className="footer-bottom-links" aria-label="Legal links">
          <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
          <span className="footer-bottom-dot" aria-hidden>•</span>
          <a href="/terms" className="footer-bottom-link">Terms & Conditions</a>
        </nav>
      </motion.div>

    </footer>
  );
};

export default Footer;