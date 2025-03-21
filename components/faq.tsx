import React from "react";
// import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import HyperText from "./ui/hyper-text";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Ecotrader?",
          answer:
            "Ecotrader is a blockchain-based platform that enables fractional ownership of renewable energy projects through asset tokenization. It allows investors to participate in green energy projects by purchasing tokenized shares of special purpose vehicles (SPVs).",
        },
        {
          question: "What is asset tokenization?",
          answer:
            "Asset tokenization is the process of representing ownership of a real-world asset (such as a renewable energy project) on the blockchain using tokens. These tokens can be bought, sold, and traded, making investments more accessible and liquid.",
        },
        {
          question:
            "How does Ecotrader differ from traditional renewable energy investments?",
          answer:
            "Traditional investments in renewable energy require high capital, legal due diligence, and ongoing project management. Ecotrader simplifies this by enabling fractional ownership via blockchain, lowering entry barriers and increasing liquidity.",
        },
      ],
    },
    {
      title: "ECT Token Launch & Utility",
      items: [
        {
          question: "What is launching first—the ECT Token or SPV Tokens?",
          answer:
            "The ECT Token is launching first. SPV Tokens, which represent investments in actual renewable energy projects, will be introduced later. Investors will need to wait for the SPV Token launch before they can directly invest in renewable energy projects.",
        },
        {
          question: "What is the ECT Token used for?",
          answer:
            "The ECT Token is the utility and governance token of the Ecotrader platform. It is used for:\n\n- Staking rewards\n- Governance voting (via the Ecotrader DAO)\n- Paying platform fees\n- Providing liquidity for the ecosystem\n\nECT does not represent ownership in any energy projects. Ownership will be tied to SPV Tokens, launching at a later stage.",
        },
        {
          question: "What is the total supply of ECT Tokens?",
          answer:
            "ECT has a hard cap of 400,000,000 tokens. Supply is regulated through an elastic minting rate and a burn mechanism tied to renewable energy production.",
        },
        {
          question: "What is the ECT Token burn mechanism?",
          answer:
            "A portion of ECT Tokens is burned whenever additional megawatts (MW) of clean energy are added to the platform's portfolio. This helps control supply and increase scarcity.",
        },
        {
          question:
            "Can I invest in renewable energy projects with ECT Tokens?",
          answer:
            "Not directly. ECT Tokens are a utility token for the Ecotrader platform. The ability to invest in renewable energy projects will come with the launch of SPV Tokens.",
        },
      ],
    },
    {
      title: "SPV Tokens & Future Investments",
      items: [
        {
          question: "What are SPV Tokens, and when will they launch?",
          answer:
            "SPV Tokens represent fractional ownership of renewable energy projects. They will allow investors to earn revenue from the projects. SPV Tokens will be launched after the ECT Token is live. The exact launch date will be announced later.",
        },
        {
          question: "What is required to invest in SPV Tokens?",
          answer:
            "To purchase SPV Tokens, users must:\n\n- Complete KYC and AML verification\n- Use a combination of 75% USDT and 25% ECT Tokens for payment\n- Agree to SPV investment terms",
        },
        {
          question: "Can I trade SPV Tokens?",
          answer:
            "Yes, SPV Tokens can be sold to whitelisted investors or back to the holding company, subject to specific restrictions.",
        },
        {
          question:
            "Will SPV Tokens be available on decentralized exchanges (DEXes)?",
          answer:
            "SPV Tokens are asset-backed securities and will have trading restrictions. However, they may be listed on regulated marketplaces that support tokenized securities.",
        },
      ],
    },
    {
      title: "Trading & Liquidity",
      items: [
        {
          question: "Where can I buy and sell ECT Tokens?",
          answer:
            "ECT Tokens will be available for trading on decentralized exchanges (DEXes) and potentially centralized exchanges (CEXes) post-launch.",
        },
        {
          question: "How does Ecotrader ensure token price stability?",
          answer:
            "The ECT Token price is market-driven based on utility and supply dynamics.\n\nThe SPV Token price is backed by the value of the energy projects, calculated as:\n\nSPV Token Value = (Total Projects Value + Total Cash Reserves) / Circulating SPV Token Supply\n\nThis ensures a direct correlation between SPV Token price and the value of underlying assets.",
        },
      ],
    },
    {
      title: "Security & Regulations",
      items: [
        {
          question: "Is Ecotrader compliant with financial regulations?",
          answer:
            "Yes, Ecotrader implements KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures to comply with financial regulations.",
        },
        {
          question: "Are ECT Tokens considered securities?",
          answer:
            "No, ECT Tokens are strictly utility tokens for governance, staking, and platform fees. They do not represent ownership in any renewable energy assets.",
        },
        {
          question: "What legal protections do SPV Token holders have?",
          answer:
            "SPV Tokens represent a legally binding share in a registered company (SPV), giving investors similar legal protections as traditional equity holders.",
        },
      ],
    },
    {
      title: "DeFi Features & Governance",
      items: [
        {
          question: "Can I use my tokens as collateral for loans?",
          answer:
            "Yes, Ecotrader plans to introduce Asset Token Loans, allowing investors to borrow USDT against their SPV Tokens in the future.",
        },
        {
          question: "How does governance work?",
          answer:
            "Ecotrader operates a Decentralized Autonomous Organization (DAO) where ECT holders can vote on:\n\n- Staking rewards and emission rates\n- Treasury fund allocations\n- Token burn mechanisms\n- Platform upgrades",
        },
        {
          question: "What DeFi integrations will be available?",
          answer:
            "- Yield optimization through auto-compounding of rewards\n- SPV Token investment funds for diversified exposure\n- Decentralized Exchange (DEX) listings for ECT Token trading",
        },
      ],
    },
    {
      title: "Token Launch & Future Plans",
      items: [
        {
          question: "When is the ECT Token launching?",
          answer:
            "The exact date and details will be announced on Ecotrader's official website and social media channels.",
        },
        {
          question: "When can I invest in renewable energy projects?",
          answer:
            "Investing in projects via SPV Tokens will be available in a later phase, after the ECT Token launch. Updates will be provided through official Ecotrader channels.",
        },
        {
          question: "What is planned for Ecotrader's future roadmap?",
          answer:
            "- Launch of SPV Tokens for renewable energy investments\n- Introduction of SPV investment funds\n- Development of DeFi lending and staking features\n- Expansion of tokenized energy projects\n- CEX listings",
        },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden font-sans text-foreground">
      <div className="container relative z-10 mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8 mt-8 flex flex-row items-center justify-between gap-4 sm:mb-16 sm:mt-auto">
          <div className="w-48 sm:w-60">
            <Link href="/">
              <Image
                src="/branding/dark-logo.svg"
                alt="Ecotrader.io"
                height="512"
                width="512"
                priority={true}
              />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/integrations/security.png"
              alt="Ecotrader.io"
              height="512"
              width="512"
              className="h-16 w-fit"
            />
            {/* <Link href="">
              <Button
                className="flex flex-row items-center justify-center gap-2 p-6"
                variant="secondary"
              >
                <Image
                  src="/branding/symbol.svg"
                  height={16}
                  width={16}
                  alt="logo"
                  className="hidden md:block"
                />{" "}
                <div>Buy ECT Token</div>
              </Button>
            </Link> */}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h1>

          {faqCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-primary sm:text-2xl">
                <HyperText className="text-xl sm:text-2xl">
                  {category.title}
                </HyperText>
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${index}-${itemIndex}`}
                  >
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {item.answer.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
                          {paragraph.split("\n").map((line, lIndex) => (
                            <React.Fragment key={lIndex}>
                              {line}
                              {lIndex < paragraph.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom CTA */}
      <Footer />
    </div>
  );
};

export default FAQ;
