import { motion } from "framer-motion";
import "./testimonialsCTA.css";

const testimonials = [
  {
    name: "Amina K.",
    text: "A truly grounding experience. The food, the silence, the nature — everything felt intentional and deeply connected to heritage.",
    role: "Guest • Nairobi"
  },
  {
    name: "Daniel M.",
    text: "This is not a hotel. It’s an experience of slowing down and reconnecting with something real.",
    role: "Visitor • Kenya"
  },
  {
    name: "Sarah L.",
    text: "The indigenous cuisine alone is worth the visit. Every meal felt like a story.",
    role: "Traveler • UK"
  }
];

const TestimonialsCTA = () => {
  return (
    <section className="testimonials-section section-padding">

      <div className="container-custom testimonials-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="testimonials-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="testimonials-label">
            Guest Stories
          </span>

          <h2 className="section-title">
            Memories That Stay Long After The Journey Ends
          </h2>

          <p className="section-subtitle">
            Every guest leaves with a different story — of nature, culture,
            food, and reconnection. Here’s what they experienced.
          </p>

          <div className="cta-box">

            <h3>Plan Your Stay</h3>

            <p>
              Experience Indigenous Seeds Village firsthand — where nature,
              culture, and comfort come together.
            </p>

            <button className="primary-btn">
              Book Your Experience
            </button>

          </div>

        </motion.div>

        {/* RIGHT TESTIMONIALS */}
        <div className="testimonials-right">

          {testimonials.map((t, index) => (
            <motion.div
              className={`testimonial-card card-${index}`}
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <p className="testimonial-text">
                “{t.text}”
              </p>

              <div className="testimonial-meta">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* BACKGROUND GLOW */}
      <div className="testimonials-glow" />

    </section>
  );
};

export default TestimonialsCTA;