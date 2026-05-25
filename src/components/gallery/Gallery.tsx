import { motion } from "framer-motion";
import { useState } from "react";
import "./gallery.css";

// Import your real images
import natureRetreats from "../../assets/images/agro3.webp";
import organicCuisine from "../../assets/images/fresh.jpg";
import traditionalDining from "../../assets/images/rustic.jpg";
import outdoorExperiences from "../../assets/images/seedschool.webp";
import ecoLuxuryRooms from "../../assets/images/room2.jpeg";
import seedHeritage from "../../assets/images/seeds.webp";

/* ═══════════════════════════════
   FOCUS CARDS COMPONENT
═══════════════════════════════ */

interface FocusCardProps {
  cards: {
    title: string;
    src: string;
  }[];
}

const FocusCards = ({ cards }: FocusCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="focus-cards-grid">
      {cards.map((card, index) => {
        const isOther = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <div
            key={card.title}
            className="focus-card-wrapper"
            style={{ zIndex: hoveredIndex === index ? 10 : 1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="focus-card"
              animate={{
                scale: isOther ? 0.93 : 1,
                opacity: isOther ? 0.55 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="focus-card-image">
                <img src={card.src} alt={card.title} loading="lazy" />
              </div>
              <div className="focus-card-overlay">
                <h3 className="focus-card-title">{card.title}</h3>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════
   GALLERY SECTION
═══════════════════════════════ */

const Gallery = () => {
  const cards = [
    {
      title: "Nature Retreats",
      src: natureRetreats,
    },
    {
      title: "Organic Cuisine",
      src: organicCuisine,
    },
    {
      title: "Traditional Dining",
      src: traditionalDining,
    },
    {
      title: "Outdoor Experiences",
      src: outdoorExperiences,
    },
    {
      title: "Eco Luxury Rooms",
      src: ecoLuxuryRooms,
    },
    {
      title: "Seed Heritage",
      src: seedHeritage,
    },
  ];

  return (
    <section className="gallery-section" id="gallery">

      {/* ══ SECTION HEADER ══ */}
      <div className="gallery-header">
        <motion.span
          className="gallery-header-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Visual Journey
        </motion.span>

        <motion.div
          className="gallery-header-rule"
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
          <h2 className="gallery-headline">
            Explore The Atmosphere
            <br />
            Of Indigenous Seeds Village
          </h2>
          <p className="gallery-subtitle">
            Discover peaceful landscapes, organic dining,
            eco-inspired spaces, and immersive cultural experiences
            through moments captured across the village.
          </p>
        </motion.div>
      </div>

      {/* ══ FOCUS CARDS ══ */}
      <div className="gallery-cards-container">
        <FocusCards cards={cards} />
      </div>

    </section>
  );
};

export default Gallery;