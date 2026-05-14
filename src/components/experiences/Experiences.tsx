import { motion } from "framer-motion";
import "./experiences.css";

const experiences = [

  {
    title:"Farm Walk Experiences",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description:
    "Explore peaceful gardens, organic farms, and immersive outdoor spaces connected to sustainable living.",
  },

  {
    title:"Seed Heritage Tours",
    image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    description:
    "Discover indigenous seed preservation, local farming traditions, and ecological storytelling.",
  },

  {
    title:"Traditional Cooking Sessions",
    image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    description:
    "Learn authentic cooking practices inspired by indigenous ingredients and cultural heritage.",
  },

  {
    title:"Nature Retreat Activities",
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
    "Reconnect through calm nature spaces, relaxation zones, and wellness-centered experiences.",
  },

];

const Experiences = () => {

  return (
    <section className="experiences-section section-padding">

      <div className="container-custom">

        {/* HEADER */}

        <div className="experiences-header">

          <span>
            Signature Experiences
          </span>

          <h2 className="section-title">
            Discover Culture,
            Nature & Sustainable Living
          </h2>

          <p className="section-subtitle">
            Indigenous Seeds Village offers immersive experiences
            designed to reconnect guests with nature,
            culture, food traditions, and mindful living.
          </p>

        </div>

        {/* EXPERIENCE LIST */}

        <div className="experiences-wrapper">

          {experiences.map((experience, index) => (

            <motion.div
              className={`experience-card ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
            >

              {/* IMAGE */}

              <div className="experience-image">

                <img
                  src={experience.image}
                  alt={experience.title}
                />

              </div>

              {/* CONTENT */}

              <div className="experience-content">

                <div className="experience-number">
                  0{index + 1}
                </div>

                <h3>
                  {experience.title}
                </h3>

                <p>
                  {experience.description}
                </p>

                <button className="secondary-btn">
                  Explore Experience
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* DECORATIVE SHAPES */}

      <div className="experience-shape shape-one" />
      <div className="experience-shape shape-two" />

    </section>
  );
};

export default Experiences;