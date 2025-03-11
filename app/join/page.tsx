import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaDiscord, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { HiDocumentText } from 'react-icons/hi';
import { SiCoinmarketcap } from 'react-icons/si';
import { RiCoinsFill } from 'react-icons/ri';
import { BiAnalyse } from 'react-icons/bi';
import Image from 'next/image';

const EcotraderTokenCenter = () => {
  return (
    <div className="bg-background text-foreground font-sans relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image src="/assets/section-3.svg" alt="bg asset" height={2000} width={2000} className="h-[600px] w-[600px] absolute right-0 top-0 object-cover" />
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="mb-8 mt-8 flex flex-row items-center justify-between gap-4 sm:mb-16 sm:mt-auto">
          <div className="w-48 sm:w-60">
            <Image
              src="/branding/dark-logo.svg"
              alt="Ecotrader.io"
              height="512"
              width="512"
              priority={true}
            />
          </div>
          <div className='flex flex-row items-center gap-4'>
            <Image
              src="/integrations/security.png"
              alt="Ecotrader.io"
              height="512"
              width="512"
              className="h-16 w-fit hidden md:block"
            />
            <Button className='flex flex-row items-center justify-center gap-2 p-6' variant="secondary" >
              <Image src="/branding/symbol.svg" height={16} width={16} alt="logo" className='hidden md:block' /> <div>Buy ECT Token</div></Button>
          </div>
      </div>
        
        {/* Hero Section */}
        <div className="bg-primary/50 opacity-100 rounded-lg p-8 xl:p-12 mb-6 text-center relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-4 font-polysans text-foreground z-10 relative">TOKEN INFORMATION</h1>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 text-primary font-polysans z-10 relative">CENTER</h1>
          <p className="max-w-3xl mx-auto text-foreground z-10 relative">
            Explore all essential details about our token, including purchasing options, contract information, market 
            listings, community channels, tokenomics, analytics tools, and comprehensive guides
          </p>
          <Image src="/assets/bg_asset_join.png" alt="Mountains asset" height={1000} width={1000} className="w-full h-full object-cover absolute inset-0 opacity-50 backdrop-blur-sm" />
        </div>
        
        {/* Purchase Section */}
        <Card className="bg-primary overflow-hidden relative text-background mb-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer xl:p-4">
          <CardContent className="p-8">
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-4xl xl:text-6xl font-bold mb-4 font-polysans">PURCHASE OUR TOKEN</h2>
                <p className="mb-4">Acquire our token seamlessly through Uniswap. <span className="font-bold">Click the link below</span> to participate in the sale</p>
                <div className="h-1 bg-accent w-48 my-6"></div>
              </div>
              
              <Button className="bg-background text-foreground hover:bg-secondary flex items-center gap-2 p-6 transform hover:scale-105 transition-transform duration-200">
                <FiExternalLink />
                Purchase on Uniswap
              </Button>
            </div>
          </CardContent>
          <Image src="/branding/symbol.svg" height={400} width={400} alt="logo" className='absolute -right-6 bottom-0 hidden md:block mix-blend-multiply grayscale opacity-75' />
        </Card>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          {/* Market Listings */}
          <Card className="bg-white text-card-foreground border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer lg:col-span-2">
            <CardContent className="p-6 h-full flex flex-col items-start justify-start text-background">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 font-polysans">MARKET LISTINGS</h3>
              <p className="mb-4 text-muted">Track our token&apos;s performance and market data on these platforms</p>
              
              <div className="flex gap-2  mt-auto">
                <Button className="p-6 bg-background text-foreground hover:bg-secondary flex items-center gap-2 transform hover:scale-105 transition-transform duration-200">
                  <SiCoinmarketcap />
                  CoinMarketCap
                </Button>
                <Button className="p-6 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 transform hover:scale-105 transition-transform duration-200">
                  <RiCoinsFill />
                  CoinGecko
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Community */}
          <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
            <CardContent className="p-6 h-full flex flex-col justify-evenly">
              <h3 className="text-2xl text-background text-center font-bold mb-2 font-polysans">COMMUNITY & UPDATES</h3>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Button variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <FaDiscord className="h-6 w-6" />
                </Button>
                <Button variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <FaInstagram className="h-6 w-6" />
                </Button>
                <Button variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <FaLinkedin className="h-6 w-6" />
                </Button>
                <Button variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <FaFacebook className="h-6 w-6" />
                </Button>
                <Button variant="outline" className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <FaTwitter className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Tokenomics */}
          <Card className="bg-background text-foreground shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer lg:col-span-2 border-4 border-white text-end">
            <CardContent className="p-6">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 font-polysans">TOKENOMICS & SECURITY</h3>
              <p className="text-sm mb-4 text-muted-foreground">Understand our token&apos;s distribution, supply, and locking mechanisms</p>
              
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 p-6 transform hover:scale-105 transition-transform duration-200">
                Tokenomics Details
              </Button>
            </CardContent>
          </Card>
          
          {/* Analytics */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer text-end">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-polysans">ANALYTICS<br />AND TOOLS</h3>
              <p className="text-sm mb-4">Access real-time analytics and data about our token</p>
              
              <Button className="bg-card text-card-foreground hover:bg-secondary flex items-center gap-2 transform hover:scale-105 transition-transform duration-200 ml-auto p-6">
                <BiAnalyse />
                Dextools
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Guide and Contract Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Comprehensive Guide */}
          <Card className="bg-background text-foreground border-4 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
            <CardContent className="p-6">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 font-polysans text-right">COMPREHENSIVE GUIDE</h3>
              <p className="text-sm mb-4 text-muted-foreground text-right">Track our token&apos;s performance and market data on these platforms</p>
              
              <div className="flex justify-end">
                <Button className="p-6 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 transform hover:scale-105 transition-transform duration-200">
                  <HiDocumentText />
                  White-paper
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Contract Details */}
          <Card className="bg-white text-background border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-4xl font-bold mb-4 font-polysans">SMART CONTRACT DETAILS</h3>
              <p className="text-sm mb-4 text-muted">Acquire our token seamlessly through Uniswap. <span className="font-bold">Click the link below</span> to participate in the sale</p>
              <div className="h-1 bg-primary w-48 my-6 ml-auto"></div>
              <Button className="p-6 mt-auto bg-primary text-primary-foreground rounded-md text-center hover:bg-background hover:text-foreground transition-all duration-200 cursor-pointer w-fit self-end transform hover:scale-105">
                0x234d...24085
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EcotraderTokenCenter;