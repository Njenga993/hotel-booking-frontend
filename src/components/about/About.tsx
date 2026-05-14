import { motion } from "framer-motion";
import "./about.css";

const About = () => {

  return (
    <section className="about-section section-padding">

      <div className="container-custom about-container">

        {/* LEFT STORY CARD */}

        <motion.div
          className="about-story-card"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <span className="about-label">
            Rooted In Heritage
          </span>

          <h2>
            A Living Experience Inspired By Nature & Indigenous Culture
          </h2>

          <p>
            Indigenous Seeds Village blends eco-hospitality,
            indigenous food traditions, sustainable living,
            and nature-centered experiences into one peaceful destination.
          </p>

        </motion.div>

        {/* CENTER IMAGE COLLAGE */}

        <motion.div
          className="about-collage"
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <img
            className="collage-main"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt=""
          />

          <img
            className="collage-small collage-top"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt=""
          />

          <img
            className="collage-small collage-bottom"
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739"
            alt=""
          />

        </motion.div>

        {/* RIGHT INFO BLOCKS */}

        <motion.div
          className="about-info-grid"
          initial={{ opacity:0, x:40 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <div className="about-info-card">

            <h3>Eco Hospitality</h3>

            <p>
              Relax in thoughtfully designed eco-inspired spaces
              surrounded by gardens, warmth, and nature.
            </p>

          </div>

          <div className="about-info-card">

            <h3>Organic Cuisine</h3>

            <p>
              Enjoy indigenous meals prepared using locally sourced
              and farm-fresh ingredients.
            </p>

          </div>

          <div className="about-info-card">

            <h3>Nature Experiences</h3>

            <p>
              Explore seed heritage, garden walks,
              traditional cooking, and peaceful outdoor experiences.
            </p>

          </div>

          <div className="about-info-card">

            <h3>Sustainable Living</h3>

            <p>
              Every experience celebrates environmental awareness,
              community, and regenerative hospitality.
            </p>

          </div>

        </motion.div>

      </div>

      {/* DECORATIVE ELEMENT */}

      <div className="about-blob" />

    </section>
  );
};

export default About;