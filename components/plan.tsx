import Image from "next/image";
import React from "react";

const EnergyPlanSection = () => {
  const plans = [
    {
      icon: "☀️",
      title: "Solar Fields",
      description:
        "Harness the power of the sun to drive clean energy solutions. Our solar initiatives focus on large-scale photovoltaic installations to provide affordable, sustainable power globally.",
      phase: 1,
    },
    {
      icon: "H₂",
      title: "Green Hydrogen",
      description:
        "Leading the transition to a hydrogen-powered future. By producing green hydrogen through renewable energy, we enable clean fuel alternatives for industries and transportation.",
      phase: 1,
    },
    {
      icon: "⚡",
      title: "Energy Storage",
      description:
        "Empowering energy independence with advanced storage solutions. We integrate battery systems to ensure a reliable, uninterrupted supply of renewable power anytime, anywhere.",
      phase: 1,
    },
    {
      icon: "🌪️",
      title: "Wind Turbines",
      description:
        "We utilize wind farms to maximize efficiency and deliver renewable energy to communities worldwide.",
      phase: 2,
    },
    {
      icon: "♻️",
      title: "Waste-to-Energy",
      description:
        "Transforming waste into a sustainable resource. Our projects convert organic and industrial waste into clean energy, reducing landfill reliance and greenhouse emissions.",
      phase: 2,
    },
    {
      icon: "🔥",
      title: "Biogas Power Plants",
      description:
        "Pioneering bio-energy by capturing methane and biogas. These turbines convert organic matter into renewable power, supporting sustainable energy transitions for industries and homes.",
      phase: 2,
    },
  ];

  return (
    <section className="relative w-full py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-4">
					Our Plan
				</h2> */}
        <p className="mx-auto mb-12 max-w-4xl text-center text-xl font-bold opacity-75 xl:-translate-y-12">
          Earn passive income and make a positive impact on the Earth -
          it&apos;s that simple Renewable energy investments made possible
          through blockchain, promoting transparency and sustainability. By
          tokenizing projects, we empower communities to support green energy
          initiatives and fight climate change effectively
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="group relative">
              <div className="rounded-2xl border border-zinc-800 bg-background p-8 text-center transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground">
                <div className="mb-6 text-4xl">{plan.icon}</div>
                <h3 className="font-polysans mb-4 text-2xl font-bold">
                  {plan.title}
                </h3>
                <p className="text-sm font-semibold opacity-60">
                  {plan.description}
                </p>
                {plan.phase === 1 && index === 2 && (
                  <div className="absolute right-0 top-0 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground sm:-translate-y-[50%] sm:translate-x-[50%]">
                    <div className="rotate-12 text-base font-extrabold transition-all group-hover:rotate-0">
                      PHASE <br /> <p className="text-5xl">I</p>
                    </div>
                  </div>
                )}
                {plan.phase === 2 && index == 3 && (
                  <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground sm:-translate-x-[50%] sm:-translate-y-[50%]">
                    <div className="-rotate-12 text-base font-extrabold transition-all group-hover:rotate-0">
                      PHASE <br /> <p className="text-5xl">II</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/assets/section-2.svg"
        alt="Plan"
        width={0}
        height={0}
        className="absolute left-0 top-0 -z-10 h-full w-auto"
      />
    </section>
  );
};

export default EnergyPlanSection;
