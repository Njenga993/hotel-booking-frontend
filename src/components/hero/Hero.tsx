import { motion } from "framer-motion";
import "./hero.css";

// Import the image properly
import heroImage from "../../assets/images/hero_1.webp";

const Hero = () => {
  // Functional "Check Availability" - opens a date picker or alert
  const handleCheckAvailability = () => {
    // You can replace this with your backend logic later
    alert("Booking system coming soon! Please check back later.");
    // Or open a date picker modal here
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Image */}
      <div className="hero-bg">
        <img 
          src={heroImage}
          alt="Luxury eco resort with pool and ocean view"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-container">
        {/* Main Hero Content - Left Side */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="hero-subtitle">Indigenous Seeds Village</span>
            <h1>
              Where Heritage
              <br />
              Meets the Wild
            </h1>
            <p>
              An eco-hospitality sanctuary rooted in indigenous culture,
              organic living, and the stillness of nature.
            </p>
            <button className="btn-explore">EXPLORE OUR VILLAGE</button>
          </motion.div>
        </div>

        {/* Booking Widget - Bottom Right */}
        <motion.div
          className="booking-widget"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="booking-field">
            <label>CHECK-IN</label>
            <div className="field-value">
              <span>Select date</span>
              <svg className="icon-calendar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>
          
          <div className="booking-sep" />
          
          <div className="booking-field">
            <label>CHECK-OUT</label>
            <div className="field-value">
              <span>Select date</span>
              <svg className="icon-calendar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>
          
          <div className="booking-sep" />
          
          <div className="booking-field">
            <label>GUESTS</label>
            <div className="field-value">
              <span>2 Adults, 0 Children</span>
              <svg className="icon-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
          
          <button 
            className="btn-check-availability" 
            onClick={handleCheckAvailability}
          >
            CHECK AVAILABILITY
          </button>
        </motion.div>

        {/* Side Gallery - Right Side 
        <motion.div
          className="side-gallery"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=500&fit=crop"
              alt="Eco Suites"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=500&fit=crop"
              alt="Organic Dining"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop"
              alt="Nature Trails"
            />
          </div>
        </motion.div>*/}
      </div>

      {/* Scroll Indicator 
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>SCROLL</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </motion.div>*/}
    </section>
  );
};

export default Hero;