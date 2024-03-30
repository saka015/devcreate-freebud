import HeroCard from "./HeroCard";
import { PiStarFourDuotone } from "react-icons/pi";
import {Accordion, AccordionItem} from "@nextui-org/react";
const defaultContent =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const Hero = () => {

  return (
    <div className="mt-48">
      <div className="text-5xl flex gap-2 text-center justify-center">
        <PiStarFourDuotone className="text-yellow-400" />
        <h1 className=" text-black font-semibold tracking-wide">
          Best place for students to get their first freelance work
        </h1>
      </div>{" "}
      <div className="grid grid-cols-2 mx-48 mt-16 gap-6">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
      <div className="mx-48 mt-20 mb-20 borderhh-2 shadow-lg rounded-md bg-blue-50">
      <Accordion variant="light">
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
  }    

export default Hero;
