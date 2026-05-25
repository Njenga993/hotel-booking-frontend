import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import "./about.css";
import heroImage from "../../assets/images/hero_1.webp";
import Room2 from "../../assets/images/room2.jpeg";

/* ============================================================
   ANIMATION HELPERS
============================================================ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const inView = (delay = 0, y = 30) => ({
  initial:    { opacity: 0, y },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.85, ease: EASE, delay } satisfies Transition,
});

const inViewX = (x = 40, delay = 0) => ({
  initial:    { opacity: 0, x },
  whileInView:{ opacity: 1, x: 0 },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.85, ease: EASE, delay } satisfies Transition,
});

const scaleIn = (delay = 0) => ({
  initial:    { opacity: 0, scale: 0.96 },
  whileInView:{ opacity: 1, scale: 1 },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 1, ease: EASE, delay } satisfies Transition,
});

/* Pillar stagger container */
const pillarContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const pillarItem = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } as Transition },
};

/* ============================================================
   PILLARS DATA
============================================================ */

const PILLARS = [
  {
    num: "01",
    title: "Eco Hospitality",
    body: "Thoughtfully designed eco-spaces surrounded by gardens, warmth, and living nature.",
  },
  {
    num: "02",
    title: "Organic Cuisine",
    body: "Indigenous meals prepared from locally sourced, farm-fresh seasonal ingredients.",
  },
  {
    num: "03",
    title: "Nature Experiences",
    body: "Seed heritage walks, garden trails, traditional cooking, and forest meditation.",
  },
  {
    num: "04",
    title: "Sustainable Living",
    body: "Every experience honours environmental awareness, community, and regeneration.",
  },
];

/* ============================================================
   ABOUT
============================================================ */

const About = () => (
  <section className="about-section" id="about">

    {/* ══ SECTION HEADER ROW ══ */}
    <div className="about-header">

      <motion.span className="about-header-label" {...inView(0, 10)}>
        Our Heritage
      </motion.span>

      {/* Animated ruled line */}
      <motion.div
        className="about-header-rule"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 } satisfies Transition}
      />

      <motion.div {...inView(0.2, 20)}>
        <h2 className="about-headline">
          Hospitality Redefined
        </h2>
        <p className="about-header-sub">
          At Indigenous Seeds Village, we blend modern elegance with authentic heritage to create exceptional experiences that stay with you forever.
        </p>
        <button className="about-header-cta">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </motion.div>

    </div>

    {/* ══ MAIN BODY ══ */}
    <div className="about-body">

      {/* ── LEFT: IMAGE COLLAGE ── */}
      <div className="about-collage">

        {/* Primary tall image */}
        <motion.div className="about-img-primary" {...scaleIn(0.1)}>
          <img
            src={heroImage}
            alt="Indigenous Seeds Village landscape"
          />
        </motion.div>

        {/* Stacked secondary images */}
        <div className="about-img-stack">
          <motion.div className="about-img-stack-item" {...scaleIn(0.25)}>
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
              alt="Organic dining experience"
            />
          </motion.div>

          <motion.div className="about-img-stack-item" {...scaleIn(0.38)}>
            <img
              src={Room2}
              alt="Nature trails and forest"
            />
          </motion.div>
        </div>

      </div>

      {/* ── RIGHT: STORY + PILLARS ── */}
      <div className="about-right">

        {/* Story text */}
        <motion.div className="about-story" {...inViewX(30, 0.15)}>
          <p>
            Indigenous Seeds Village was born from a deep reverence
            for the land — a place where ancient food traditions,
            sustainable practices, and genuine African hospitality
            converge into a single, unhurried experience.
          </p>

          <p>
            Every corner of our village has been shaped by the wisdom
            of local communities: the seeds we plant, the meals we
            share, the stories we tell around open fires at dusk.
            We do not simply offer accommodation — we offer belonging.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="about-pillars"
          variants={pillarContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="about-pillars-grid">
            {PILLARS.map(({ num, title, body }) => (
              <motion.div
                key={num}
                className="about-pillar"
                variants={pillarItem}
              >
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-body">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>

  </section>
);

export default About;