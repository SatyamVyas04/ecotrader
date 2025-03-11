import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      url: "/branding/symbol.svg",
    },
  ],
  metadataBase: new URL("https://www.ecotrader.io"),
  openGraph: {
    siteName: "Ecotrader",
    title: "Ecotrader: Revolutionizing Renewable Energy Investments",
    description:
      "Join the green energy revolution. Invest in sustainable projects and earn passive income while making a positive impact on the planet.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/seo/EcotraderTwitterBanner.png",
        width: 3001,
        height: 1001,
        alt: "Ecotrader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecotrader: Revolutionizing Renewable Energy Investments",
    description:
      "Join the green energy revolution. Invest in sustainable projects and earn passive income while making a positive impact on the planet.",
    images: ["/seo/EcotraderTwitterBanner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased max-w-screen-2xl mx-auto`}>{children}</body>
    </html>
  );
}
