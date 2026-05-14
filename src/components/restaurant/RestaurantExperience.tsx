import { motion } from "framer-motion";
import "./restaurantExperience.css";

const RestaurantExperience = () => {

  return (
    <section className="restaurant-section section-padding">

      <div className="container-custom restaurant-container">

        {/* LEFT VISUALS */}

        <motion.div
          className="restaurant-visuals"
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <div className="restaurant-main-image">

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt=""
            />

          </div>

          <div className="restaurant-floating-card card-top">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt=""
            />

            <div>
              <h4>Organic Ingredients</h4>
              <p>Freshly sourced daily</p>
            </div>

          </div>

          <div className="restaurant-floating-card card-bottom">

            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
              alt=""
            />

            <div>
              <h4>Indigenous Cuisine</h4>
              <p>Authentic cultural flavors</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="restaurant-content"
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <span className="restaurant-label">
            Culinary Experience
          </span>

          <h2 className="section-title">
            Farm-To-Table Dining Inspired By Indigenous Traditions
          </h2>

          <p>
            Our restaurant celebrates indigenous ingredients,
            traditional recipes, organic farming,
            and authentic culinary storytelling.
            Every meal is thoughtfully prepared to connect guests
            with culture, nature, and nourishment.
          </p>

          {/* EXPERIENCE LIST */}

          <div className="restaurant-features">

            <div className="restaurant-feature">

              <h3>Organic Ingredients</h3>

              <p>
                Locally grown produce harvested from nearby farms and gardens.
              </p>

            </div>

            <div className="restaurant-feature">

              <h3>Traditional Cooking</h3>

              <p>
                Indigenous preparation methods inspired by cultural heritage.
              </p>

            </div>

            <div className="restaurant-feature">

              <h3>Seasonal Menu</h3>

              <p>
                Fresh rotating dishes designed around seasonal harvests.
              </p>

            </div>

          </div>

          <div className="restaurant-buttons">

            <button className="primary-btn">
              Explore Menu
            </button>

            <button className="secondary-btn">
              Reserve Table
            </button>

          </div>

        </motion.div>

      </div>

      {/* DECOR */}

      <div className="restaurant-bg-gradient" />

    </section>
  );
};

export default RestaurantExperience;