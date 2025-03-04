import Image from "next/image";
import React from "react";

type SocialMediaLinks = {
  [key: string]: {
    url: string;
    icon: string;
  };
};

const socialMediaLinks: SocialMediaLinks = {
  telegram: {
    url: "https://t.me/TheEcoTrader",
    icon: "/socials/telegram.svg",
  },
  linkedin: {
    url: "https://www.linkedin.com/company/ecotrader/?viewAsMember=true",
    icon: "/socials/linkedin.png",
  },
  instagram: {
    url: "https://www.instagram.com/ecotrader.io/",
    icon: "/socials/insta.png",
  },
  twitter: {
    url: "https://x.com/Ecotrader_io",
    icon: "/socials/x.png",
  },
  facebook: {
    url: "https://www.facebook.com/Ecotrader.io/",
    icon: "/socials/facebook.png",
  },
};

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary py-6 text-center text-background">
      {/* Top Section: Logo */}
      <div className="mb-4 mt-4 flex flex-col items-center">
        <Image
          src="/branding/light-logo.svg" // Replace with your logo path
          alt="Ecotrader Logo"
          width={1000}
          height={1000}
          className="mx-12 mb-4 w-full max-w-md px-8"
        />
      </div>

      {/* Social Media Icons */}
      <div className="mb-4 flex justify-center gap-4">
        {Object.keys(socialMediaLinks).map((key) => (
          <a
            key={key}
            href={socialMediaLinks[key].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={socialMediaLinks[key].icon}
              width={32}
              height={32}
              alt={`${key} icon`}
            />
          </a>
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/1Tpu3rXuNyzXcVQ9NOTqhvSvMfVIya48n/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="my-4 font-polysans text-xl transition-colors hover:text-background/80 hover:underline">
          White Paper
        </h1>
      </a>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-background/20 pt-4">
        <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center">
          <p>
            Copyright © {new Date().getFullYear()} Ecotrader • All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
