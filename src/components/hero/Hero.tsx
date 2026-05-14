import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {

  return (
    <section className="hero-section">

      {/* BACKGROUND VIDEO/IMAGE */}

      <div className="hero-bg-overlay" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src="https://videos.pexels.com/video-files/856987/856987-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container-custom hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
        >

          <span className="hero-tag">
            Eco • Indigenous • Hospitality
          </span>

          <h1>
            Experience Nature,
            Heritage &
            Organic Living
          </h1>

          <p>
            Indigenous Seeds Village offers a unique eco-hospitality
            experience inspired by indigenous culture,
            sustainable living, organic cuisine, and peaceful retreat.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Book Your Stay
            </button>

            <button className="secondary-btn">
              Explore Experiences
            </button>

          </div>

          {/* MINI STATS */}

          <div className="hero-stats">

            <div>
              <h3>20+</h3>
              <span>Eco Rooms</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Organic Cuisine</span>
            </div>

            <div>
              <h3>15+</h3>
              <span>Nature Experiences</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT VISUALS */}

        <motion.div
          className="hero-visuals"
          initial={{ opacity:0, scale:0.9 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
        >

          <div className="hero-main-image">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Eco Resort"
            />

          </div>

          <div className="floating-card card-one">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Organic Food"
            />

            <div>
              <h4>Organic Restaurant</h4>
              <p>Farm-to-table dining</p>
            </div>

          </div>

          <div className="floating-card card-two">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Nature Experience"
            />

            <div>
              <h4>Nature Experiences</h4>
              <p>Reconnect with nature</p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">

        <span />

      </div>

    </section>
  );
};

export default Hero;