import React from "react";

const WhatWeOfferSection = () => {
  const offerings = [
    {
      number: "1",
      title: "PROJECT DEVELOPMENT",
      description:
        "Ecotrader collaborates with stakeholders to identify and evaluate renewable energy projects, ensuring feasibility through detailed studies and expert analysis for impactful outcomes.",
    },
    {
      number: "2",
      title: "ENGINEERING, CONSTRUCTION",
      description:
        "Providing comprehensive EPC services, Ecotrader delivers quality-assured projects adhering to environmental guidelines, from design to construction, ensuring sustainability and efficiency.",
    },
    {
      number: "3",
      title: "OPERATIONS, MAINTENANCE",
      description:
        "Ecotrader ensures seamless project management by offering end-to-end operational solutions, maintaining infrastructure, and optimizing performance for long-term success.",
    },
    {
      number: "4",
      title: "POWER SALE & PPA'S",
      description:
        "Facilitating flexible power purchase agreements, Ecotrader supports short and long-term energy trading, adapting to market needs and advancing clean energy access.",
    },
  ];

  return (
    <div className="my-4 bg-transparent p-4 md:p-8">
      <h1 className="-z-10 -mb-4 px-2 text-center text-5xl font-bold text-white md:-mb-8 md:text-9xl">
        WHAT WE OFFER
      </h1>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 md:gap-6">
        {offerings.map((offering) => (
          <div
            key={offering.number}
            className={`group rounded-xl border border-white/10 bg-background p-4 transition-all duration-300 hover:bg-primary md:p-8`}
          >
            <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-[auto,1fr] md:gap-8">
              <span className="mb-2 flex h-full items-center justify-start text-6xl font-bold text-primary transition-all group-hover:rotate-12 group-hover:text-background md:mb-0 md:justify-center md:text-9xl">
                {offering.number}.
              </span>
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-polysans text-xl font-bold text-white transition-all group-hover:text-background md:text-3xl">
                  {offering.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-300 transition-all group-hover:text-background">
                  {offering.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
