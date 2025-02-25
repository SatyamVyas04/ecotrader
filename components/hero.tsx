"use client";
import Image from "next/image";
import HyperText from "./ui/hyper-text";

const PrivateSaleLanding = () => {
  return (
    <div className="p-4 text-white md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 mt-8 flex flex-row items-center justify-between gap-4 sm:mb-16 sm:mt-auto">
          <div className="w-48 sm:w-60">
            <Image
              src="dark-logo.svg"
              alt="Ecotrader.io"
              height="512"
              width="512"
              priority={true}
            />
          </div>
          <div>
            <Image
              src="/security.png"
              alt="Ecotrader.io"
              height="512"
              width="512"
              className="h-16 w-fit sm:h-24"
              priority={true}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex flex-col gap-4 lg:grid`}>
          {/* Rest of the existing component remains the same */}
          <div className="mb-8 w-full space-y-5 lg:mb-0">
            <h1 className="mt-8 items-center text-center text-xl font-bold tracking-tighter sm:mt-6 sm:text-5xl">
              EcoTrader&apos;s Real World Assets
              <br />
              <p className="text-xl normal-case tracking-tighter sm:mt-2 sm:text-5xl">
                Your door to the <span className="italic">Energy Sector</span>
              </p>
            </h1>
            <p className="!sm:mt-8 max-w-xl text-center text-sm sm:mx-auto sm:text-lg">
              The Renewable Energy Market is now available to small investors.
              You can take an active part in the Green Energy
            </p>
            <div className="mx-auto my-16 max-h-96 w-[90%] rounded-xl">
              <Image
                src="/mountains.jpg"
                alt="Mountains graphic"
                height={384}
                width={1000}
                className="max-h-96 w-full rounded-xl object-cover sm:hidden"
              />
            </div>
            <div className="absolute right-0 top-0 -z-10 hidden justify-center sm:flex lg:justify-end">
              <Image
                src="section-1.svg"
                alt="Star graphic"
                width="400"
                height="400"
              />
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 text-center uppercase sm:flex-row">
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
        <div className="mx-auto my-16 max-h-96 w-[90%] rounded-xl">
          <Image
            src="/mountains.jpg"
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
