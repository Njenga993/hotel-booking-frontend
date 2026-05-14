import { motion } from "framer-motion";
import "./featuredRooms.css";

const rooms = [

  {
    title:"Garden Eco Cottage",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description:
    "Surrounded by greenery and peaceful garden spaces, our eco cottages blend natural textures, comfort, and sustainable living.",
    features:["2 Guests", "Garden View", "Organic Breakfast"],
  },

  {
    title:"Heritage Family Suite",
    image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    description:
    "Designed for families seeking warmth, culture, and relaxation, with spacious interiors inspired by indigenous heritage.",
    features:["4 Guests", "Private Lounge", "Nature Balcony"],
  },

  {
    title:"Nature Retreat Cabin",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description:
    "Reconnect with nature through calm earthy interiors, quiet surroundings, and immersive eco-living experiences.",
    features:["2 Guests", "Forest View", "Outdoor Shower"],
  },

];

const FeaturedRooms = () => {

  return (
    <section className="featured-rooms section-padding">

      <div className="container-custom">

        {/* SECTION HEADER */}

        <div className="featured-header">

          <span>
            Stay Experiences
          </span>

          <h2 className="section-title">
            Spaces Designed For Comfort,
            Culture & Nature
          </h2>

          <p className="section-subtitle">
            Every stay at Indigenous Seeds Village is thoughtfully designed
            to blend eco-hospitality, indigenous inspiration,
            and peaceful retreat experiences.
          </p>

        </div>

        {/* ROOMS */}

        <div className="rooms-wrapper">

          {rooms.map((room, index) => (

            <motion.div
              className={`room-card ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
            >

              {/* IMAGE */}

              <div className="room-image">

                <img
                  src={room.image}
                  alt={room.title}
                />

              </div>

              {/* CONTENT */}

              <div className="room-content">

                <div className="room-tag">
                  Eco Luxury Stay
                </div>

                <h3>
                  {room.title}
                </h3>

                <p>
                  {room.description}
                </p>

                {/* FEATURES */}

                <div className="room-features">

                  {room.features.map((feature, idx) => (

                    <span key={idx}>
                      {feature}
                    </span>

                  ))}

                </div>

                <div className="room-buttons">

                  <button className="primary-btn">
                    Book Room
                  </button>

                  <button className="secondary-btn">
                    Explore Stay
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* DECOR */}

      <div className="room-bg-shape" />

    </section>
  );
};

export default FeaturedRooms;