"use client";
import Image from "next/image";
import HyperText from "./ui/hyper-text";
import { TextAnimate } from "./ui/text-animate";
import Header from "./header";

const PrivateSaleLanding = () => {
  return (
    <div className="p-4 text-white md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className={`flex flex-col gap-4 lg:grid`}>
          {/* Rest of the existing component remains the same */}
          <div className="mb-8 w-full space-y-5 lg:mb-0 2xl:relative">
            <h1 className="mt-8 items-center text-center font-polysans text-xl font-bold tracking-wide sm:mt-6 sm:text-6xl">
              EcoTrader&apos;s Real World Assets
              <br />
              <p className="text-xl normal-case sm:mt-2 sm:text-3xl md:text-6xl">
                Your door to the <br className="xl:hidden" />
                <TextAnimate
                  by="character"
                  startOnView={true}
                  animation="slideRight"
                  delay={0.5}
                  className="inline italic text-primary"
                >
                  Energy Sector
                </TextAnimate>
              </p>
            </h1>
            <p className="!sm:mt-8 max-w-xl text-center text-sm opacity-50 sm:mx-auto sm:text-lg">
              The Renewable Energy Market is now available to small investors.
              You can take an active part in the Green Energy
            </p>
            <div className="mx-auto my-16 max-h-96 w-[90%] rounded-xl">
              <Image
                src="/assets/mountains.jpg"
                alt="Mountains graphic"
                height={384}
                width={1000}
                className="max-h-96 w-full rounded-xl object-cover sm:hidden"
              />
            </div>
            {/* <div className="absolute right-0 top-0 -z-10 hidden justify-center sm:flex lg:justify-end">
              <Image
                src="/assets/section-1.svg"
                alt="Star graphic"
                width="400"
                height="400"
              />
            </div> */}
          </div>
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 text-center uppercase sm:flex-row">
            <HyperText className="text-lg">Happy to Integrate with</HyperText>
            <Image
              src="/integrations/Diamante.png"
              alt="Mountains graphic"
              width={200}
              height={200}
              className=""
            />
          </div>
        </div>
        <div className="mx-auto my-16 max-h-96 w-[90%] rounded-xl">
          <Image
            src="/assets/mountains.jpg"
            alt="Mountains graphic"
            height={384}
            width={1000}
            className="hidden max-h-96 w-full rounded-xl object-cover sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateSaleLanding;
