import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./testimonialsCTA.css";

// Import your real images
import guest1 from "../../assets/images/agro3.webp";
import guest2 from "../../assets/images/agro5.webp";
import guest3 from "../../assets/images/agro1.webp";

const testimonials = [
  {
    quote:
      "A truly grounding experience. The food, the silence, the nature — everything felt intentional and deeply connected to heritage.",
    name: "Amina K.",
    designation: "Guest • Nairobi",
    src: guest1,
  },
  {
    quote:
      "This is not a hotel. It's an experience of slowing down and reconnecting with something real.",
    name: "Daniel M.",
    designation: "Visitor • Kenya",
    src: guest2,
  },
  {
    quote:
      "The indigenous cuisine alone is worth the visit. Every meal felt like a story.",
    name: "Sarah L.",
    designation: "Traveler • UK",
    src: guest3,
  },
];

const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

const TestimonialsCTA = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="testimonials-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="testimonials-label">Guest Stories</span>

          <h2 className="testimonials-headline">
            Memories That Stay Long After The Journey Ends
          </h2>

          <p className="testimonials-subtitle">
            Every guest leaves with a different story — of nature, culture, food,
            and reconnection. Here's what they experienced.
          </p>

          <div className="cta-box">
            <h3 className="cta-box-title">Plan Your Stay</h3>
            <p className="cta-box-text">
              Experience Indigenous Seeds Village firsthand — where nature,
              culture, and comfort come together.
            </p>
            <button className="cta-box-btn">Book Your Experience</button>
          </div>
        </motion.div>

        {/* RIGHT ANIMATED TESTIMONIALS */}
        <div className="testimonials-right">
          <div className="animated-testimonials-wrapper">
            
            {/* IMAGE STACK */}
            <div className="animated-testimonials-images">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: active === index ? 1 : 0.7,
                      scale: active === index ? 1 : 0.95,
                      z: active === index ? 0 : -100,
                      rotate: active === index ? 0 : randomRotateY(),
                      zIndex: active === index ? 40 : testimonials.length + 2 - index,
                      y: active === index ? [0, -40, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="animated-testimonial-img-container"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="animated-testimonial-img"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* TEXT CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="animated-testimonials-content"
              >
                <h3 className="animated-testimonial-name">
                  {testimonials[active].name}
                </h3>
                <p className="animated-testimonial-role">
                  {testimonials[active].designation}
                </p>

                <motion.p className="animated-testimonial-quote">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="animated-testimonial-word"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                {/* NAVIGATION BUTTONS */}
                <div className="animated-testimonial-nav">
                  <button onClick={handlePrev} className="animated-nav-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </button>
                  <button onClick={handleNext} className="animated-nav-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>

      {/* BACKGROUND GLOW */}
      <div className="testimonials-glow" />
    </section>
  );
};

export default TestimonialsCTA;