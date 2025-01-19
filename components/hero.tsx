"use client";
import Image from "next/image";
import HyperText from "./ui/hyper-text";

const PrivateSaleLanding = () => {
  return (
    <div className="text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-row justify-between items-center gap-4 mb-8 mt-8 sm:mt-auto sm:mb-16">
          <div className="w-48 sm:w-60">
            <Image
              src="dark-logo.svg"
              alt="Ecotrader.io"
              height="512"
              width="512"
              priority={true}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex flex-col lg:grid gap-4`}>
          {/* Rest of the existing component remains the same */}
          <div className="space-y-5 w-full mb-8 lg:mb-0">
            <h1 className="text-xl mt-8 sm:mt-6 sm:text-5xl font-bold tracking-tighter text-center items-center">
              EcoTrader&apos;s Real World Assets
              <br />
              <p className="text-xl sm:mt-2 sm:text-5xl tracking-tighter normal-case">
                Your door to the <span className="italic">Energy Sector</span>
              </p>
            </h1>
            <p className="text-sm sm:text-lg text-center !sm:mt-8 max-w-xl sm:mx-auto">
              The Renewable Energy Market is now available to small investors.
              You can take an active part in the Green Energy
            </p>
            <div className="mx-auto w-[90%] max-h-96 my-16 rounded-xl">
              <Image
                src="/mountains.jpg"
                alt="Mountains graphic"
                height={384}
                width={1000}
                className="w-full max-h-96 object-cover rounded-xl sm:hidden"
              />
            </div>
            <div className="hidden sm:flex justify-center lg:justify-end absolute right-0 top-0 -z-10">
              <Image
                src="section-1.svg"
                alt="Star graphic"
                width="400"
                height="400"
              />
            </div>
          </div>
          <div className="w-full mx-auto items-center justify-center uppercase text-center flex flex-col gap-2 sm:flex-row">
            <HyperText className="text-lg">Happy to Integrate with</HyperText>
            <Image
              src="/Diamante_White_Horizontal.png"
              alt="Mountains graphic"
              width={200}
              height={200}
              className=""
            />
          </div>
        </div>
        <div className="mx-auto w-[90%] max-h-96 my-16 rounded-xl">
          <Image
            src="/mountains.jpg"
            alt="Mountains graphic"
            height={384}
            width={1000}
            className="w-full max-h-96 object-cover rounded-xl hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateSaleLanding;
