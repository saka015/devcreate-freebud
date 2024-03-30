import HeroCard from "./HeroCard";
import { PiStarFourDuotone } from "react-icons/pi";
const Hero = () => {
  return (
    <div className="mt-[70vh]">
      <div className="text-5xl flex gap-2 text-center justify-center">
        <PiStarFourDuotone className="text-teal-400" />
        <h1 className=" text-white font-semibold ">
          Best place for students to get their first freelance work
        </h1>
      </div>{" "}
      <div className="grid grid-cols-2 mx-48 mt-16 gap-6">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
