import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import TopicsPreview from "../../components/TopicsPreview/TopicsPreview";
import Roadmap from "../../components/Roadmap/Roadmap";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <TopicsPreview />
      <Roadmap />
      <Testimonials />
    </>
  );
};

export default Home;