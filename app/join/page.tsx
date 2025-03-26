"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";

// Dynamically import Join with loading
const Join = dynamic(() => import("../../components/join"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [isJoinLoaded, setIsJoinLoaded] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Handle Join load complete
  const handleJoinLoad = () => {
    setIsJoinLoaded(true);
  };

  return (
    <div
      className={`transition-opacity duration-500 ${
        isJoinLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div onLoad={handleJoinLoad}>
        <Join />
        <Footer />
      </div>
    </div>
  );
}
