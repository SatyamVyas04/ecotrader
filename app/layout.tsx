import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecotrader",
  description:
    "Ecotrader empowers small investors to participate in the renewable energy market. Invest in solar, wind, hydrogen, and waste-to-energy projects while earning passive income and fighting climate change.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/ECOnew.png",
    },
  ],
  metadataBase: new URL("https://www.ecotrader.io"), // Replace with actual domain
  openGraph: {
    title: "Ecotrader: Revolutionizing Renewable Energy Investments",
    description:
      "Join the green energy revolution. Invest in sustainable projects and earn passive income while making a positive impact on the planet.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SpaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
