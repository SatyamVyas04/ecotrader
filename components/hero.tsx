/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCountdownTimer } from "./timer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SALE_END_DATE = "2023-11-30T00:00:00";

const PrivateSaleLanding = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Use the custom hook for timer logic
	const { timeLeft, isTimerExpired } = useCountdownTimer(SALE_END_DATE);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setEmailError("");

		try {
			// Check if email already exists in the waitlist
			const response = await fetch("/api/check-waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const result = await response.json();

			if (result.exists) {
				// Email already in waitlist
				setEmailError("This email is already on the waitlist.");
				setIsSubmitting(false);
				return;
			}

			// If not exists, add to waitlist
			const addResponse = await fetch("/api/add-to-waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const addResult = await addResponse.json();

			if (addResult.success) {
				// Clear email and show success message
				setEmail("");
				setEmailError("Successfully added to the waitlist!");
			} else {
				setEmailError("Failed to add to waitlist. Please try again.");
			}
		} catch (error) {
			setEmailError("An error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

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
					{/* <button className="w-auto px-2 py-1 sm:px-4 sm:py-2 border border-white rounded-lg hover:bg-white hover:text-background transition-all text-xs sm:text-base">
						Connect Wallet
					</button> */}
				</div>

				{/* Main Content */}
				<div
					className={`flex flex-col-reverse lg:grid gap-4 ${
						isTimerExpired
							? "lg:grid-cols-[30%_70%]"
							: "lg:grid-cols-[40%_60%]"
					}`}
				>
					{/* Left Side Content */}
					<div className="space-y-6">
						{!isTimerExpired && (
							<div className="grid grid-cols-4 gap-3">
								{[
									{ value: timeLeft.days, label: "DAYS" },
									{ value: timeLeft.hours, label: "HOURS" },
									{
										value: timeLeft.minutes,
										label: "MINUTES",
									},
									{
										value: timeLeft.seconds,
										label: "SECONDS",
									},
								].map(({ value, label }) => (
									<div
										key={label}
										className="bg-zinc-900 p-4 sm:py-8 rounded-lg text-center"
									>
										<div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">
											{value}
										</div>
										<div className="text-[10px] sm:text-[14px] text-blue-400">
											{label}
										</div>
									</div>
								))}
							</div>
						)}

						{/* Waiting List Form */}
						<div className="mt-8">
							<div
								className={`text-center justify-center sm:justify-start flex flex-wrap gap-x-2 w-full ${
									isTimerExpired
										? "text-3xl -mt-8 mb-4 sm:text-8xl tracking-tighter"
										: "text-lg mb-4 mt-12 sm:mt-6"
								}`}
							>
								<h3>
									{isTimerExpired
										? "PRESALE"
										: "PRIVATE SALE LAUNCHING SOON!"}{" "}
								</h3>
								<span className="text-red-500 text-3xl sm:text-7xl">
									{isTimerExpired
										? "IS NOW LIVE"
										: "JOIN THE WAITING LIST"}{" "}
								</span>
							</div>
							{/* <form
								onSubmit={handleSubmit}
								className="flex flex-col sm:flex-row gap-4"
							>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									className="flex-grow px-4 py-2 bg-transparent border border-secondary rounded-lg focus:outline-none focus:border-primary"
									required
								/>
								<button
									type="submit"
									disabled={isSubmitting}
									className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-white hover:text-black transition-all disabled:opacity-50"
								>
									{isSubmitting
										? "Submitting..."
										: "Subscribe"}
								</button>
							</form>
							{emailError && (
								<div className="mt-4 text-center animate-bounce text-primary">
									{emailError}
								</div>
							)}
							<Link
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
							</Link>
						</div>
					</div>*/}

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
