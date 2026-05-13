import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>

      <section className="min-h-screen flex items-center justify-center">
        <div className="container-custom text-center">

          <h1 className="section-title">
            Indigenous Seeds Village
          </h1>

          <p className="max-w-2xl mx-auto mt-6">
            Eco-luxury hospitality inspired by indigenous heritage,
            organic living, and nature-centered experiences.
          </p>

          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <button className="primary-btn">
              Book a Stay
            </button>

            <button className="secondary-btn">
              Explore More
            </button>
          </div>

        </div>
      </section>

    </MainLayout>
  );
};

export default Home;