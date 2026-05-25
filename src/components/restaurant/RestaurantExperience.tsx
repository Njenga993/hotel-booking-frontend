import { motion } from "framer-motion";
import "./restaurantExperience.css";

const RestaurantExperience = () => {
  return (
    <section className="restaurant-section" id="dining">
      
      {/* ══ SECTION HEADER ══ */}
      <div className="restaurant-header">
        <motion.span 
          className="restaurant-header-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Dining Experience
        </motion.span>

        <motion.div
          className="restaurant-header-rule"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="restaurant-headline">
            Farm-To-Table Dining <br />
            Inspired By Indigenous Traditions
          </h2>
        </motion.div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="restaurant-container">
        
        {/* ── LEFT: VISUALS ── */}
        <motion.div
          className="restaurant-visuals"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="restaurant-main-image">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Farm-to-table dining experience"
            />
          </div>

          <div className="restaurant-floating-card card-top">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80"
              alt="Organic ingredients"
            />
            <div>
              <h4>Organic Ingredients</h4>
              <p>Freshly sourced daily</p>
            </div>
          </div>

          <div className="restaurant-floating-card card-bottom">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=200&q=80"
              alt="Indigenous cuisine"
            />
            <div>
              <h4>Indigenous Cuisine</h4>
              <p>Authentic cultural flavors</p>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: CONTENT ── */}
        <motion.div
          className="restaurant-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="restaurant-description">
            Our restaurant celebrates indigenous ingredients,
            traditional recipes, organic farming,
            and authentic culinary storytelling.
            Every meal is thoughtfully prepared to connect guests
            with culture, nature, and nourishment.
          </p>

          {/* Experience Features */}
          <div className="restaurant-features">
            <div className="restaurant-feature">
              <div className="restaurant-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3>Organic Ingredients</h3>
                <p>Locally grown produce harvested from nearby farms and gardens.</p>
              </div>
            </div>

            <div className="restaurant-feature">
              <div className="restaurant-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h18" />
                  <path d="M12 3v18" />
                </svg>
              </div>
              <div>
                <h3>Traditional Cooking</h3>
                <p>Indigenous preparation methods inspired by cultural heritage.</p>
              </div>
            </div>

            <div className="restaurant-feature">
              <div className="restaurant-feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3>Seasonal Menu</h3>
                <p>Fresh rotating dishes designed around seasonal harvests.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="restaurant-buttons">
            <button className="restaurant-btn-primary">
              Explore Menu
            </button>
            <button className="restaurant-btn-secondary">
              Reserve Table
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RestaurantExperience;