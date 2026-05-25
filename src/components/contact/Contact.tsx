import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      
      {/* ══ SECTION HEADER ══ */}
      <div className="contact-header">
        <motion.span 
          className="contact-header-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.span>

        <motion.div
          className="contact-header-rule"
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
          <h2 className="contact-headline">
            We'd Love To Hear From You
          </h2>
          <p className="contact-subtitle">
            Reach out to us for reservations, inquiries, or any assistance you may need.
          </p>
        </motion.div>
      </div>

      {/* ══ CONTENT GRID ══ */}
      <div className="contact-grid">
        
        {/* ── LEFT: CONTACT INFORMATION ── */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="contact-info-label">Location</span>
              <span className="contact-info-value">Elementaita, Gilgil, Nakuru, Kenya</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="contact-info-label">Phone</span>
              <span className="contact-info-value">+254 712 451 777</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">reservations@indigenousseedsvillage.com</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <span className="contact-info-label">Opening Hours</span>
              <span className="contact-info-value">Reception: 6:00 AM – 10:00 PM</span>
            </div>
          </div>

          <div className="contact-info-cta">
            <button className="contact-info-btn">
              Book Your Stay
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: MAP ── */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219672230432!3d-1.3031595984867962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indigenous Seeds Village Location Map"
            />
            <div className="contact-map-overlay">
              <div className="contact-map-pin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Indigenous Seeds Village</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;