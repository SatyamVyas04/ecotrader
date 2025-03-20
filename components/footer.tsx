import Image from "next/image";
import React from "react";

type SocialMedia = {
  name: string;
  url: string;
  icon: string;
};

const socialMediaLinks: SocialMedia[] = [
  {
    name: "Telegram",
    url: "https://t.me/TheEcoTrader",
    icon: "/socials/telegram.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/ecotrader/?viewAsMember=true",
    icon: "/socials/linkedin.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ecotrader.io/",
    icon: "/socials/insta.png",
  },
  {
    name: "Twitter",
    url: "https://x.com/Ecotrader_io",
    icon: "/socials/x.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Ecotrader.io/",
    icon: "/socials/facebook.png",
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary py-10 text-center text-background">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/branding/light-logo.svg"
          alt="Ecotrader Logo"
          width={200}
          height={200}
          className="w-32 sm:w-40 md:w-48"
        />
      </div>

      {/* Social Media Icons */}
      <div className="mb-6 flex justify-center space-x-6">
        {socialMediaLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <Image
              src={social.icon}
              alt={`${social.name} icon`}
              width={32}
              height={32}
              className="hover:opacity-80"
            />
          </a>
        ))}
      </div>

      {/* Navigation Links */}
      <nav className="mb-6 flex flex-wrap justify-center gap-8">
        <a
          href="https://drive.google.com/file/d/1Tpu3rXuNyzXcVQ9NOTqhvSvMfVIya48n/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="font-polysans text-lg transition-colors hover:text-background/80 hover:underline"
        >
          White Paper
        </a>
        {/* <a
          href="/faq"
          className="font-polysans text-lg transition-colors hover:text-background/80 hover:underline"
        >
          FAQ
        </a> */}
      </nav>

      {/* Copyright */}
      <div className="border-t border-background/20 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Ecotrader. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
