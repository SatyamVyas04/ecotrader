"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamically import Hero with loading
const Hero = dynamic(() => import("../components/hero"), {
  ssr: false,
  loading: () => null,
});

import Plan from "../components/plan";
import Values from "../components/values";
import Offer from "../components/offer";
import Map from "../components/map";
import Footer from "../components/footer";

export default function Home() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Handle Hero load complete
  const handleHeroLoad = () => {
    setIsHeroLoaded(true);
  };

  return (
    <div
      className={`transition-opacity duration-500 ${
        isHeroLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div onLoad={handleHeroLoad}>
        <Hero />
      </div>

      {isHeroLoaded && (
        <>
          <div data-aos="fade-up">
            <Plan />
          </div>

          <div data-aos="fade-up">
            <Values />
          </div>

          <div data-aos="fade-up">
            <Offer />
          </div>

          <div data-aos="fade-up">
            <Map />
          </div>

          <div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
