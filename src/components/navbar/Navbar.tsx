import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import "./navbar.css";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container-custom navbar-container">

        {/* LOGO */}

        <div className="navbar-logo">
          Indigenous Seeds Village
        </div>

        {/* DESKTOP NAV */}

        <nav className="navbar-links">

          <a href="#">Home</a>

          <a href="#">About</a>

          {/* MEGA MENU */}

          <div
            className="mega-menu-wrapper"
            onMouseEnter={() => setActiveMegaMenu("stay")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >

            <button className="mega-menu-trigger">
              Stay
              <ChevronDown size={18} />
            </button>

            <div className={`mega-menu ${activeMegaMenu === "stay" ? "mega-menu-active" : ""}`}>

              <div className="mega-menu-content">

                <div className="mega-menu-column">
                  <h4>Accommodation</h4>

                  <a href="#">Luxury Cottage</a>
                  <a href="#">Garden Suites</a>
                  <a href="#">Family Rooms</a>
                  <a href="#">Eco Cabins</a>
                </div>

                <div className="mega-menu-column">
                  <h4>Experiences</h4>

                  <a href="#">Farm Walks</a>
                  <a href="#">Nature Trails</a>
                  <a href="#">Seed Learning</a>
                  <a href="#">Traditional Cooking</a>
                </div>

                <div className="mega-menu-column mega-highlight">

                  <span>Featured Experience</span>

                  <h3>
                    Indigenous Eco Living
                  </h3>

                  <p>
                    Experience organic hospitality,
                    traditional foods, and sustainable living.
                  </p>

                  <button className="primary-btn">
                    Explore
                  </button>

                </div>

              </div>

            </div>

          </div>

          <a href="#">Restaurant</a>

          <a href="#">Gallery</a>

          <a href="#">Contact</a>

        </nav>

        {/* RIGHT CTA */}

        <div className="navbar-right">

          <button className="primary-btn">
            Book Now
          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={28} />
          </button>

        </div>

      </div>

      {/* MOBILE SIDEBAR */}

      <div className={`mobile-sidebar-overlay ${mobileMenu ? "mobile-sidebar-overlay-active" : ""}`}
        onClick={() => setMobileMenu(false)}
      />

      <div className={`mobile-sidebar ${mobileMenu ? "mobile-sidebar-active" : ""}`}>

        <div className="mobile-sidebar-header">

          <h3>Menu</h3>

          <button onClick={() => setMobileMenu(false)}>
            <X size={28} />
          </button>

        </div>

        <div className="mobile-sidebar-links">

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Stay</a>
          <a href="#">Restaurant</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>

          <button className="primary-btn mobile-book-btn">
            Book Now
          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;