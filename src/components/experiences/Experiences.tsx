import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "../../components/ui/ScrollStack";
import "./experiences.css";

// Import images from your gallery
import natureRetreats from "../../assets/images/hero_1.webp";
import seedHeritage from "../../assets/images/seeds.webp";
import traditionalDining from "../../assets/images/rustic.jpg";
import outdoorExperiences from "../../assets/images/seedschool.webp";

const experiences = [
  {
    title: "Farm Walk Experiences",
    image: natureRetreats,
    description:
      "Explore peaceful gardens, organic farms, and immersive outdoor spaces connected to sustainable living.",
  },
  {
    title: "Seed Heritage Tours",
    image: seedHeritage,
    description:
      "Discover indigenous seed preservation, local farming traditions, and ecological storytelling.",
  },
  {
    title: "Traditional Cooking Sessions",
    image: traditionalDining,
    description:
      "Learn authentic cooking practices inspired by indigenous ingredients and cultural heritage.",
  },
  {
    title: "Nature Retreat Activities",
    image: outdoorExperiences,
    description:
      "Reconnect through calm nature spaces, relaxation zones, and wellness-centered experiences.",
  },
];

const Experiences = () => {
  return (
    <section className="experiences-section" id="experiences">
      <div className="experiences-container">
        
        {/* ══ HEADER ══ */}
        <div className="experiences-header">
          <motion.span 
            className="experiences-header-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Signature Experiences
          </motion.span>

          <motion.div
            className="experiences-header-rule"
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
            <h2 className="experiences-headline">
              Discover Culture, Nature & Sustainable Living
            </h2>
            <p className="experiences-subtitle">
              Indigenous Seeds Village offers immersive experiences designed to
              reconnect guests with nature, culture, food traditions, and mindful
              living.
            </p>
          </motion.div>
        </div>

        {/* ══ SCROLL STACK CONTAINER ══ */}
        <ScrollStack
          className="experiences-scroll-stack"
          useWindowScroll={false}
          itemDistance={80}
          itemStackDistance={40}
          baseScale={0.92}
          itemScale={0.03}
          stackPosition="15%"
          scaleEndPosition="10%"
          blurAmount={0.8}
        >
          {experiences.map((experience, index) => (
            <ScrollStackItem key={index}>
              <div
                className={`experience-card ${index % 2 !== 0 ? "reverse" : ""}`}
              >
                {/* IMAGE */}
                <div className="experience-image">
                  <img src={experience.image} alt={experience.title} />
                </div>

                {/* CONTENT */}
                <div className="experience-content">
                  <div className="experience-number">0{index + 1}</div>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <button className="experience-btn">Explore Experience</button>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* DECORATIVE SHAPES */}
      <div className="experience-shape shape-one" />
      <div className="experience-shape shape-two" />
    </section>
  );
};

export default Experiences;