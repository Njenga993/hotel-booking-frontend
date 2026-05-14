import { motion } from "framer-motion";
import "./gallery.css";

const galleryImages = [

  {
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title:"Nature Retreats",
    large:true,
  },

  {
    image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title:"Organic Cuisine",
  },

  {
    image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    title:"Traditional Dining",
  },

  {
    image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title:"Outdoor Experiences",
    large:true,
  },

  {
    image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title:"Eco Luxury Rooms",
  },

  {
    image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    title:"Seed Heritage",
  },

];

const Gallery = () => {

  return (
    <section className="gallery-section section-padding">

      <div className="container-custom">

        {/* HEADER */}

        <div className="gallery-header">

          <span>
            Visual Journey
          </span>

          <h2 className="section-title">
            Explore The Atmosphere
            Of Indigenous Seeds Village
          </h2>

          <p className="section-subtitle">
            Discover peaceful landscapes, organic dining,
            eco-inspired spaces, and immersive cultural experiences
            through moments captured across the village.
          </p>

        </div>

        {/* GALLERY GRID */}

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <motion.div
              key={index}
              className={`gallery-item ${item.large ? "large" : ""}`}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.7 }}
              viewport={{ once:true }}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <h3>
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* DECOR */}

      <div className="gallery-gradient" />

    </section>
  );
};

export default Gallery;