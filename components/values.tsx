import Image from "next/image";
import React from "react";

const ValuesSection = () => {
  const values = [
    {
      icon: "🌍",
      title: "Sustainability",
      description:
        "We are committed to fostering a greener planet by actively advancing clean energy solutions and promoting practices that ensure environmental longevity.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Driving the future with cutting-edge technology, we enhance efficiency and optimize renewable energy systems for sustainable progress.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Partnering with stakeholders and communities, we align efforts to create impactful, scalable solutions in renewable energy projects.",
    },
    {
      icon: "⚖️",
      title: "Integrity",
      description:
        "Transparency and accountability define our actions, ensuring trust and ethical standards in every step of our journey toward a sustainable future.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-center font-polysans text-4xl font-bold md:text-5xl lg:text-6xl xl:text-9xl">
            Our Values
          </h2>
          {/* <p className="text-center max-w-3xl mx-auto opacity-60">
						Discover the core principles that guide our mission and
						shape our commitment to sustainable energy solutions.
					</p> */}
        </div>

        <div className="relative">
          {/* Featured Image - Left Side */}
          <div className="absolute top-0 z-10 hidden lg:block lg:-translate-x-24 lg:-translate-y-24">
            <div className="absolute h-[200px] w-[300px] -rotate-12">
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30" />
              <Image
                src="/assets/windmills.png"
                alt="Renewable Energy"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div
                  className={`h-full rounded-2xl border border-zinc-700 p-10 text-center backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground`}
                >
                  <div className="mb-6 text-4xl">{value.icon}</div>
                  <h3 className="mb-4 font-polysans text-3xl font-bold tracking-wide sm:text-5xl">
                    {value.title}
                  </h3>
                  <p className="text-sm opacity-60">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Pattern - Right Side */}
      <Image
        src="/assets/section-3.svg"
        alt="Pattern"
        width={0}
        height={0}
        className="absolute right-0 top-2/3 -z-10 h-auto w-[500px] -translate-y-1/2"
      />
    </section>
  );
};

export default ValuesSection;
