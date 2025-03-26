import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function header() {
  return (
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
          className="hidden h-16 w-fit md:block"
        />
        <Link href="">
          <Button
            className="flex flex-row items-center justify-center gap-2 md:p-6"
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
        </Link>
      </div>
    </div>
  );
}
