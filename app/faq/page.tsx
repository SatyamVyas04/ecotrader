"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamically import FAQ with loading
const FAQ = dynamic(() => import("../../components/faq"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isFAQLoaded, setIsFAQLoaded] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Handle FAQ load complete
  const handleFAQLoad = () => {
    setIsFAQLoaded(true);
  };

  return (
    <div
      className={`transition-opacity duration-500 ${
        isFAQLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div onLoad={handleFAQLoad}>
        <FAQ />
      </div>
    </div>
  );
}
