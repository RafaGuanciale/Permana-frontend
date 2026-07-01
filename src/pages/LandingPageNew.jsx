import Hero2 from "../components/LandingPage/Hero2";
import JourneyGrid from "../components/LandingPage/JourneyGrid";
import Project from "../components/LandingPage/Project";
import CallToAction from "../components/LandingPage/CallToAction";

function LandingPageNew() {

  return (
    <div className="landing">
      <Hero2 />
      <JourneyGrid />
      <Project />
      <CallToAction />
    </div>
  );
}

export default LandingPageNew;
