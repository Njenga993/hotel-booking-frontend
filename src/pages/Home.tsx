import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import FeaturedRooms from "../components/rooms/FeaturedRooms";
import RestaurantExperience from "../components/restaurant/RestaurantExperience";
import Experiences from "../components/experiences/Experiences";
import Gallery from "../components/gallery/Gallery";
import TestimonialsCTA from "../components/testimonials/TestimonialsCTA";

const Home = () => {
  return (
    <MainLayout>

      <Hero />
      <About />
      <FeaturedRooms />
      <RestaurantExperience />
      <Experiences />
      <Gallery />
      <TestimonialsCTA />
    </MainLayout>
  );
};

export default Home;