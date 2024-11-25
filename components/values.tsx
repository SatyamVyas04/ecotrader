import Image from "next/image";
import React from "react";

const ValuesSection = () => {
	const values = [
		{
			icon: "🌍",
			title: "SUSTAINABILITY",
			description:
				"We strive to create a lasting, positive environmental impact through the promotion, development, and integration of renewable energy sources.",
		},
		{
			icon: "💡",
			title: "INNOVATION",
			description:
				"We constantly explore and examine new technology that can improve our energy projects, driving efficiency and improving cost-effectiveness.",
		},
		{
			icon: "🤝",
			title: "COLLABORATION",
			description:
				"We work closely with stakeholders, partners, and communities to ensure the successful execution of our renewable energy projects.",
		},
		{
			icon: "⚖️",
			title: "INTEGRITY",
			description:
				"We uphold the highest ethical standards in our business practices, remaining transparent and accountable to our clients and partners.",
		},
	];

	return (
		<section className="w-full py-12 relative overflow-hidden">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="flex flex-col items-center mb-16">
					<h2 className="text-4xl font-bold text-center mb-4">
						Our Values
					</h2>
					<p className="text-center max-w-3xl mx-auto opacity-60">
						Risus commodo id odio turpis pharetra elementum.
						Pulvinar porta porta feugiat scelerisque in elit. Morbi
						rhoncus, tellus, eros consequat magna semper orci a
						tincidunt.
					</p>
				</div>

				<div className="relative">
					{/* Featured Image - Left Side */}
					<div className="absolute top-0 lg:-translate-x-24 lg:-translate-y-24 lg:block z-10 hidden">
						<div className="absolute w-[300px] h-[200px] -rotate-12">
							<div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30" />
							<Image
								src="/windmills.png"
								alt="Renewable Energy"
								fill
								className="object-cover rounded-3xl"
							/>
						</div>
					</div>

					{/* Values Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						{values.map((value, index) => (
							<div key={index} className="relative group">
								<div
									className={`p-8 bg-background border border-zinc-800 rounded-2xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center`}
								>
									<div className="text-4xl mb-6">
										{value.icon}
									</div>
									<h3 className="text-4xl font-bold mb-4">
										{value.title}
									</h3>
									<p className="text-sm opacity-60">
										{value.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Background Pattern - Right Side */}
			<Image
				src="/section-3.svg"
				alt="Pattern"
				width={0}
				height={0}
				className="absolute top-2/3 -translate-y-1/2 right-0 h-auto w-[500px] -z-10"
			/>
		</section>
	);
};

export default ValuesSection;