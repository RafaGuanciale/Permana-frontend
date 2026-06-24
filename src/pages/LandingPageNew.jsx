import { useState } from "react";
import Hero from "../components/LandingPage/Hero";
import Hero2 from "../components/LandingPage/Hero2";
import JourneyGrid from "../components/LandingPage/JourneyGrid";
import Author from "../components/LandingPage/Author";
import CallToAction from "../components/LandingPage/CallToAction";

function LandingPageNew() {
  const [active, setActive] = useState(0);

  return (
    <div className="landing">
      <Hero2 />
      <JourneyGrid />
      <Author />
      <CallToAction />
    </div>
  );
}

export default LandingPageNew;
