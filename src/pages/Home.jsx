import "../styles/Home.css";

import Button from "../components/Button";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
    <div className="home flex flex-col justify-center pt-64">
      <h1 className="text-teal-400 font-bold text-6xl text-center">
        Freelance Marketplace for Students
      </h1>
      <div className="flex justify-center mt-10">
        <Button>Explore</Button>
      </div>
      </div>
      <Hero/>
      </>
  );
};

export default Home;
