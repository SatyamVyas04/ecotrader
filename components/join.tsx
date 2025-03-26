import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { SiCoinmarketcap } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";

const EcotraderTokenCenter = () => {
  return (
    <div className="relative overflow-hidden bg-transparent pb-12 font-sans text-foreground">
      <div className="container relative z-10 mx-auto px-4 py-6">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="relative mb-6 overflow-hidden rounded-lg bg-background/50 bg-[url('/assets/bg_asset_join.png')] bg-cover bg-center p-8 text-center opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl xl:p-12">
          <div className="absolute inset-0 bg-green-600/45 backdrop-blur-sm"></div>
          <h1 className="relative z-10 mb-4 font-polysans text-4xl font-bold text-foreground md:text-6xl xl:text-7xl">
            TOKEN INFORMATION
          </h1>
          <h1 className="relative z-10 mb-6 font-polysans text-4xl font-bold text-primary md:text-6xl xl:text-7xl">
            CENTER
          </h1>
          <p className="relative z-10 mx-auto max-w-3xl text-foreground">
            Explore all essential details about our token, including purchasing
            options, contract information, market listings, community channels,
            tokenomics, analytics tools, and comprehensive guides
          </p>
        </div>

        {/* Purchase Section */}
        <Card className="relative mb-6 cursor-pointer overflow-hidden border-0 bg-primary text-background shadow-lg transition-all duration-300 hover:shadow-xl xl:p-4">
          <CardContent className="p-8">
            <div className="flex flex-col items-start justify-between">
              <div>
                <h2 className="mb-4 font-polysans text-4xl font-bold xl:text-6xl">
                  PURCHASE OUR TOKEN
                </h2>
                <p className="mb-4">
                  Acquire our token seamlessly through Uniswap.{" "}
                  <span className="font-bold">Click the link below</span> to
                  participate in the sale
                </p>
                <div className="my-6 h-1 w-48 bg-accent"></div>
              </div>

              <Link
                target="_blank"
                href="https://app.uniswap.org/explore/tokens/ethereum/0xb96682a8f558b8199a2dc039b1dd8911e5068faf"
              >
                <Button className="flex transform items-center gap-2 bg-background p-6 text-foreground transition-transform duration-200 hover:scale-105 hover:bg-secondary">
                  <img
                    src="/assets/uniswap.png"
                    alt="uniswap"
                    className="h-8 w-8 invert"
                  />
                  Purchase on Uniswap
                </Button>
              </Link>
            </div>
          </CardContent>
          <Image
            src="/branding/symbol.svg"
            height={400}
            width={400}
            alt="logo"
            className="absolute -right-6 bottom-0 hidden opacity-75 mix-blend-multiply grayscale md:block"
          />
        </Card>

        {/* Features Grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
          {/* Market Listings */}
          <Card className="cursor-pointer border-0 bg-white text-card-foreground shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl xl:col-span-2">
            <CardContent className="flex h-full flex-col items-center justify-start p-6 text-background md:items-start">
              <h3 className="mb-2 font-polysans text-2xl font-bold lg:text-3xl xl:text-4xl">
                MARKET LISTINGS
              </h3>
              <p className="mb-4 text-center text-muted sm:text-start">
                Track our token&apos;s performance and market data on these
                platforms
              </p>

              <div className="mt-auto flex w-full flex-col flex-wrap items-center justify-start gap-2 md:flex-row">
                <Link
                  target="_blank"
                  href="https://coinmarketcap.com/dexscan/ethereum/0xe7efbcce50e46b31369aba1dfee1ae3a8aa2bdb4/"
                >
                  <Button className="flex w-full transform items-center gap-2 bg-background p-6 text-foreground transition-transform duration-200 hover:scale-105 hover:bg-secondary md:w-fit">
                    <SiCoinmarketcap className="h-8 w-8" />
                    CoinMarketCap
                  </Button>
                </Link>
                <Link target="_blank" href="">
                  <Button className="flex w-full transform items-center gap-2 bg-primary p-6 text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-primary/90 md:w-fit">
                    <img
                      src="/assets/coingecko.png"
                      alt="coingecko"
                      className="h-6 w-6"
                    />
                    CoinGecko
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="cursor-pointer border-0 bg-white shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <CardContent className="flex h-full flex-col justify-evenly p-6">
              <h3 className="mb-2 text-center font-polysans text-2xl font-bold text-background">
                COMMUNITY & UPDATES
              </h3>

              <div className="mt-4 flex flex-wrap justify-center gap-2 xl:gap-3">
                <Link target="_blank" href="https://t.me/TheEcoTrader">
                  <Button
                    variant="outline"
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaTelegram className="h-6 w-6" />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/ecotrader.io/"
                >
                  <Button
                    variant="outline"
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/ecotrader/?viewAsMember=true"
                >
                  <Button
                    variant="outline"
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Ecotrader.io/"
                >
                  <Button
                    variant="outline"
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </Button>
                </Link>
                <Link target="_blank" href="https://x.com/Ecotrader_io">
                  <Button
                    variant="outline"
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card className="cursor-pointer border-4 border-white bg-background/50 text-end text-foreground shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl xl:col-span-2">
            <CardContent className="p-6">
              <h3 className="mb-2 font-polysans text-2xl font-bold lg:text-3xl xl:text-4xl">
                TOKENOMICS & SECURITY
              </h3>
              <p className="mb-4 text-muted-foreground">
                Understand our token&apos;s distribution, supply, and locking
                mechanisms
              </p>

              <Link target="_blank" href="">
                <Button className="transform bg-primary p-6 text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-primary/90">
                  Tokenomics Details
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="cursor-pointer border-0 bg-primary text-center text-primary-foreground shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="mb-2 font-polysans text-2xl font-bold">
                ANALYTICS
                <br />
                AND TOOLS
              </h3>
              <p className="mb-4">
                Access real-time analytics and data about our token
              </p>

              <Link
                target="_blank"
                href="https://www.dextools.io/app/en/ether/pair-explorer/0xe7efbcce50e46b31369aba1dfee1ae3a8aa2bdb4?t=1743011367077"
              >
                <Button className="mx-auto flex transform items-center gap-2 bg-card p-6 text-card-foreground transition-transform duration-200 hover:scale-105 hover:bg-secondary">
                  <img
                    src="/assets/dextools.png"
                    alt="dextools"
                    className="h-8"
                  />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Guide and Contract Details */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Comprehensive Guide */}
          <Card className="cursor-pointer border-4 border-white bg-background/50 text-foreground shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <CardContent className="p-6">
              <h3 className="mb-4 text-right font-polysans text-2xl font-bold lg:text-5xl xl:text-6xl">
                COMPREHENSIVE GUIDE
              </h3>
              <p className="mb-4 text-right text-muted-foreground">
                Track our token&apos;s performance and market data on these
                platforms
              </p>

              <div className="flex justify-end">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1Tpu3rXuNyzXcVQ9NOTqhvSvMfVIya48n/view?usp=drive_link"
                >
                  <Button className="flex transform items-center gap-2 bg-primary p-6 text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-primary/90">
                    <HiDocumentText />
                    Whitepaper
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contract Details */}
          <Card className="cursor-pointer border-0 bg-white text-background shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <CardContent className="flex h-full flex-col p-6">
              <h3 className="mb-4 font-polysans text-4xl font-bold">
                SMART CONTRACT DETAILS
              </h3>
              <p className="mb-4 text-muted">
                Acquire our token seamlessly through Uniswap.{" "}
                <span className="font-bold">Click the link below</span> to
                participate in the sale
              </p>
              <div className="my-6 ml-auto h-1 w-48 bg-primary"></div>
              <Link
                href="https://app.uniswap.org/explore/tokens/ethereum/0xb96682a8f558b8199a2dc039b1dd8911e5068faf"
                className="mt-auto self-end"
              >
                <Button
                  className="w-fit max-w-52 transform cursor-pointer rounded-md bg-primary p-6 text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-background hover:text-foreground"
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  0xb966...68FaF
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EcotraderTokenCenter;
