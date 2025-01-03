"use client";
import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

const isTimerExpired = true;

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
				<div
					className={`flex flex-col-reverse lg:grid gap-4 ${
						isTimerExpired
							? "lg:grid-cols-[35%_65%]"
							: "lg:grid-cols-[40%_60%]"
					}`}
				>
					{/* Left Side Content */}
					<div className="space-y-6">
						{/* Waiting List Form */}
						<div className="mt-8">
							<div
								className={`opacity-0 text-center sm:text-start justify-center sm:justify-start flex flex-wrap gap-x-2 w-full ${
									isTimerExpired
										? "text-3xl -mt-8 mb-4 sm:text-8xl tracking-tighter"
										: "text-lg mb-4 mt-12 sm:mt-6"
								}`}
							>
								<h3>
									{isTimerExpired
										? "PRESALE SOON ON"
										: "PRIVATE SALE LAUNCHING SOON!"}{" "}
								</h3>
								<span className="text-red-500 text-3xl sm:text-6xl mt-4 sm:mt-auto tracking-tighter">
									{isTimerExpired
										? "ALPHALAUNCHER"
										: "JOIN THE WAITING LIST"}{" "}
								</span>
							</div>
							{/* <Link
								href="https://ect.ecotrader.io/"
								target="_blank"
							>
								<div className="group relative px-8 py-3 bg-primary text-background rounded-lg overflow-hidden transform hover:scale-105 transition-all ease-in-out shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer">
									<span className="relative z-10 font-bold tracking-wider">
										ECT NOW
									</span>

									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/75 to-transparent -translate-x-full animate-shimmer group-hover:animate-none transition-all z-10"></div>

									<ArrowUpRight
										className="ml-2 opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 text-black transition-all"
										size={20}
									/>
								</div>
							</Link> */}
						</div>
					</div>

					{/* Rest of the existing component remains the same */}
					<div className="space-y-5 w-full mb-8 lg:mb-0">
						<h1 className="text-xl mt-8 sm:mt-6 sm:text-5xl font-bold tracking-tighter text-center lg:text-right">
							EcoTrader&apos;s Real World Assets
							<br />
							<p className="text-xl sm:mt-2 sm:text-5xl tracking-tighter normal-case">
								Your door to the{" "}
								<span className="italic">Energy Sector</span>
							</p>
						</h1>
						<p className="text-sm sm:text-lg text-center lg:text-right !sm:mt-8 max-w-xl lg:ml-auto">
							The Renewable Energy Market is now available to
							small investors. You can take an active part in the
							Green Energy
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
