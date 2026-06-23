import { useState } from "react";
import HeroOld from "../components/LandingPage/HeroOld";
import Hero from "../components/LandingPage/Hero";
import JourneyGrid from "../components/LandingPage/JourneyGrid";
import Author from "../components/LandingPage/Author";
import CallToAction from "../components/LandingPage/CallToAction";

function LandingPageNew() {
  const [active, setActive] = useState(0);

  return (
    <div className="landing">
      <Hero />
      {/* <HeroOld /> */}
      <JourneyGrid />
      <Author />
      <CallToAction />
    </div>
  );
}

export default LandingPageNew;
