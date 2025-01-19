import React from "react";
import { Sun, Wind, Battery } from "lucide-react";
import Image from "next/image";

const EnergyMapSection = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-6 bg-transparent">
        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-background/40 hover:border-primary/50 transition-all">
          <Image
            src="/map.png"
            alt="Energy Map"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cards Container */}
        <div className="space-y-4 grid">
          {/* Solar Fields Card */}
          <div className="rounded-3xl border border-white/10 bg-background/40 p-6 group hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-6">
              <Sun className="w-24 my-auto text-primary group-hover:text-background shrink-0 h-full transition-colors" />
              <div className="space-y-4">
                <h2 className="text-white text-2xl font-bold group-hover:text-primary-foreground transition-colors">
                  SOLAR FIELDS
                </h2>
                <ul className="space-y-2 text-gray-300 group-hover:text-primary-foreground/90 transition-colors">
                  <li>Greece (25MW)</li>
                  <li>Crete (50MW)</li>
                  <li>Macedonia (15MW)</li>
                  <li>Bulgaria (15MW)</li>
                  <li>Romania (150MW)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wind Turbines Card */}
          <div className="rounded-3xl border border-white/10 bg-background/40 p-6 group hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-6">
              <Wind className="w-24 my-auto text-primary group-hover:text-background shrink-0 h-full transition-colors" />
              <div className="space-y-4">
                <h2 className="text-white text-2xl font-bold group-hover:text-primary-foreground transition-colors">
                  WIND TURBINES
                </h2>
                <p className="text-gray-300 group-hover:text-primary-foreground/90 transition-colors">
                  Romania (150MW)
                </p>
              </div>
            </div>
          </div>

          {/* Energy Storage Card */}
          <div className="rounded-3xl border border-white/10 bg-background/40 p-6 group hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-6">
              <Battery className="w-24 my-auto text-primary group-hover:text-background shrink-0 h-full transition-colors" />
              <div className="space-y-4">
                <h2 className="text-white text-2xl font-bold group-hover:text-primary-foreground transition-colors">
                  ENERGY STORAGE
                </h2>
                <p className="text-gray-300 group-hover:text-primary-foreground/90 transition-colors">
                  Romania (50MW)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/section-4.svg"
        alt="Pattern"
        width={0}
        height={0}
        className="absolute top-1/2 -translate-y-1/2 right-0 h-auto w-dvw -z-10"
      />
    </div>
  );
};

export default EnergyMapSection;
