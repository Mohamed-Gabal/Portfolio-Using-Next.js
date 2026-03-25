import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";

const Home = () => {
  return (
    <div>
      {/* Import Page Hero */}
      <Hero />
      {/* Import Page Services */}
      <Services />
      {/* Import Page Resume */}
      <Resume />
    </div>
  );
};
export default Home;
