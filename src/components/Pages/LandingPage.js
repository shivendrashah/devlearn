import React from "react";
import { Hero } from "../Hero/Hero";
import { FeatureOne } from "../Features/FeatureOne";
import { FeatureTwo } from "../Features/FeatureTwo";
import { Footer } from "../Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <Footer />
    </div>
  );
};

export default LandingPage;
