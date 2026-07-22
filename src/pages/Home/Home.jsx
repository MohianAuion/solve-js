import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

import Roadmap from "../../components/Roadmap/Roadmap";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      
      <Roadmap />
      {/* Test Dev */}
      <Testimonials />
    </>
  );
};

export default Home;