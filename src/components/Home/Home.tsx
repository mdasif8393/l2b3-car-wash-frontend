import Hero from "../Hero/Hero";
import FeaturedServices from "./FeaturedServices";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="container ">
      <Hero />
      <OurServices />
      <FeaturedServices />
    </div>
  );
};

export default Home;
