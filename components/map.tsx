import React from "react";
import { Sun, Wind, Battery } from "lucide-react";
import Image from "next/image";

const EnergyMapSection = () => {
  return (
    <div className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 bg-transparent p-4 md:grid-cols-[1.5fr,1fr] md:p-8">
        {/* Map Container */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-background/40 transition-all hover:border-primary/50">
          <Image
            src="/map.png"
            alt="Energy Map"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cards Container */}
        <div className="grid space-y-4">
          {/* Solar Fields Card */}
          <div className="group rounded-3xl border border-white/10 bg-background/40 p-6 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary">
            <div className="flex items-start gap-6">
              <Sun className="my-auto h-full w-24 shrink-0 text-primary transition-colors group-hover:text-background" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-primary-foreground">
                  SOLAR FIELDS
                </h2>
                <ul className="space-y-2 text-gray-300 transition-colors group-hover:text-primary-foreground/90">
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
          <div className="group rounded-3xl border border-white/10 bg-background/40 p-6 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary">
            <div className="flex items-start gap-6">
              <Wind className="my-auto h-full w-24 shrink-0 text-primary transition-colors group-hover:text-background" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-primary-foreground">
                  WIND TURBINES
                </h2>
                <p className="text-gray-300 transition-colors group-hover:text-primary-foreground/90">
                  Romania (150MW)
                </p>
              </div>
            </div>
          </div>

          {/* Energy Storage Card */}
          <div className="group rounded-3xl border border-white/10 bg-background/40 p-6 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary">
            <div className="flex items-start gap-6">
              <Battery className="my-auto h-full w-24 shrink-0 text-primary transition-colors group-hover:text-background" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-primary-foreground">
                  ENERGY STORAGE
                </h2>
                <p className="text-gray-300 transition-colors group-hover:text-primary-foreground/90">
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
        className="absolute right-0 top-1/2 -z-10 h-auto w-dvw -translate-y-1/2"
      />
    </div>
  );
};

export default EnergyMapSection;
