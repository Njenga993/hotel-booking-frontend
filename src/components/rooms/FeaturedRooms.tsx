import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import "./featuredRooms.css";
import Room1 from "../../assets/images/room1.jpeg";
import Room2 from "../../assets/images/room2.jpeg";

/* ============================================================
   ANIMATION HELPERS
============================================================ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const inView = (delay = 0, y = 28) => ({
  initial:    { opacity: 0, y },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.85, ease: EASE, delay } satisfies Transition,
});

/* ============================================================
   ROOM DATA
============================================================ */

interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  availability: string;
}

const ROOMS: Room[] = [
  {
    id: "01",
    title: "Self-Contained Single Suite",
    description: "A fully self-contained private suite featuring one comfortable bed, en-suite bathroom, and a cozy sitting area — perfect for solo travelers or couples seeking intimacy.",
    image: Room1,
    features: ["1 Bed", "En-suite Bathroom", "Sitting Area", "Breakfast Included"],
    availability: "15 Units Available",
  },
  {
    id: "02",
    title: "Self-Contained Double Suite",
    description: "A spacious fully self-contained suite with two comfortable beds, en-suite bathroom, and a generous living area — ideal for families, friends, or shared stays.",
    image: Room2,
    features: ["2 Beds", "En-suite Bathroom", "Living Area", "Breakfast Included"],
    availability: "15 Units Available",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

const FeaturedRooms = () => (
  <section className="featured-rooms" id="rooms">

    {/* ══ SECTION HEADER ══ */}
    <div className="rooms-header">
      <motion.span className="rooms-header-label" {...inView(0, 10)}>
        Rooms & Suites
      </motion.span>

      <motion.div
        className="rooms-header-rule"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 } satisfies Transition}
      />

      <motion.div {...inView(0.2, 20)}>
        <h2 className="rooms-headline">
          Find Your Perfect Stay
        </h2>
        <div className="rooms-header-actions">
          <button className="rooms-view-all">
            View All Rooms
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>

    {/* ══ ROOM CARDS GRID ══ */}
    <div className="rooms-grid">
      {ROOMS.map((room, index) => (
        <motion.div
          key={room.id}
          className="room-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE, delay: index * 0.15 }}
        >
          {/* Image */}
          <div className="room-image-wrapper">
            <img src={room.image} alt={room.title} />
            <span className="room-availability-badge">{room.availability}</span>
          </div>

          {/* Content */}
          <div className="room-content">
            <h3 className="room-title">{room.title}</h3>
            <p className="room-description">{room.description}</p>

            {/* Features */}
            <div className="room-features">
              {room.features.map((feature) => (
                <span key={feature} className="room-feature">
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Only - No Price */}
            <div className="room-footer">
              <button className="room-book-btn-full">
                Check Availability
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </section>
);

export default FeaturedRooms;