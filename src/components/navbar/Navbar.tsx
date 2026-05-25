import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Calendar, Home } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    setMobileMenu(false);
  };

  // Handle link clicks
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <header className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* ── LOGO ── */}
          <a 
            className="navbar-logo" 
            href="#home" 
            onClick={(e) => handleLinkClick(e, "home")}
            aria-label="Indigenous Seeds Village — Home"
          >
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="navbar-logo-main">Indigenous Seeds Village</span>
              <span className="navbar-logo-sub">Eco · Indigenous · Hospitality</span>
            </div>
          </a>

          {/* ── DESKTOP NAV ── */}
          <nav className="navbar-links" aria-label="Primary navigation">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>About</a>

            {/* MEGA MENU — Stay */}
            <div
              ref={megaRef}
              className="mega-menu-wrapper"
              onMouseEnter={() => setActiveMegaMenu("stay")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className="mega-menu-trigger"
                aria-haspopup="true"
                aria-expanded={activeMegaMenu === "stay"}
              >
                Stay
                <ChevronDown size={14} className={`nav-chevron ${activeMegaMenu === "stay" ? "nav-chevron-active" : ""}`} />
              </button>

              <div
                className={`mega-menu${activeMegaMenu === "stay" ? " mega-menu-active" : ""}`}
                role="region"
                aria-label="Stay menu"
              >
                <div className="mega-menu-content">
                  {/* Column 1 — Accommodation */}
                  <div className="mega-menu-column">
                    <span className="mega-menu-col-title">
                      <Home size={14} />
                      Accommodation
                    </span>
                    <a href="#rooms" onClick={(e) => handleLinkClick(e, "rooms")}>Self-Contained Single Suite</a>
                    <a href="#rooms" onClick={(e) => handleLinkClick(e, "rooms")}>Self-Contained Double Suite</a>
                  </div>

                  {/* Column 2 — Experiences */}
                  <div className="mega-menu-column">
                    <span className="mega-menu-col-title">
                      <Calendar size={14} />
                      Experiences
                    </span>
                    <a href="#experiences" onClick={(e) => handleLinkClick(e, "experiences")}>Farm Walks</a>
                    <a href="#experiences" onClick={(e) => handleLinkClick(e, "experiences")}>Nature Trails</a>
                    <a href="#experiences" onClick={(e) => handleLinkClick(e, "experiences")}>Seed Learning</a>
                    <a href="#experiences" onClick={(e) => handleLinkClick(e, "experiences")}>Traditional Cooking</a>
                  </div>

                  {/* Column 3 — Featured */}
                  <div className="mega-menu-column mega-highlight">
                    <p className="mega-highlight-eyebrow">Featured Experience</p>
                    <h3>Indigenous<br />Eco Living</h3>
                    <p>
                      Organic hospitality, traditional foods,
                      and sustainable living — all in one sanctuary.
                    </p>
                    <button 
                      className="mega-highlight-btn"
                      onClick={() => scrollToSection("experiences")}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a href="#dining" onClick={(e) => handleLinkClick(e, "dining")}>Restaurant</a>
            <a href="#gallery" onClick={(e) => handleLinkClick(e, "gallery")}>Gallery</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contact</a>
          </nav>

          {/* ── RIGHT CTA ── */}
          <div className="navbar-right">
            <button 
              className="nav-book-btn" 
              aria-label="Book your stay"
              onClick={() => scrollToSection("rooms")}
            >
              <span className="btn-text">Book Now</span>
              <span className="btn-arrow">→</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenu(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`mobile-sidebar-overlay${mobileMenu ? " mobile-sidebar-overlay-active" : ""}`}
        onClick={() => setMobileMenu(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE SIDEBAR ── */}
      <nav
        className={`mobile-sidebar${mobileMenu ? " mobile-sidebar-active" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenu}
      >
        {/* Header */}
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-logo-wrapper">
            <div className="logo-icon-small">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="mobile-sidebar-logo">Indigenous Seeds Village</span>
          </div>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenu(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div className="mobile-sidebar-links">
          <a
            href="#home"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          >
            <span className="mobile-nav-label">Home</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
          >
            <span className="mobile-nav-label">About</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
          <a
            href="#rooms"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("rooms"); }}
          >
            <span className="mobile-nav-label">Stay</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
          <a
            href="#dining"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("dining"); }}
          >
            <span className="mobile-nav-label">Restaurant</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
          <a
            href="#gallery"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("gallery"); }}
          >
            <span className="mobile-nav-label">Gallery</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          >
            <span className="mobile-nav-label">Contact</span>
            <span className="mobile-nav-arrow">→</span>
          </a>
        </div>

        {/* Footer CTA */}
        <div className="mobile-sidebar-footer">
          <button 
            className="mobile-book-btn" 
            aria-label="Book your stay"
            onClick={() => scrollToSection("rooms")}
          >
            Book Your Stay
          </button>
          <p className="mobile-sidebar-tagline">
            Experience nature, heritage &amp; organic living
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;