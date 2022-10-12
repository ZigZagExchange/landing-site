import classNames from "classnames";
import React from "react";
import { BsTwitter, BsGithub, BsDiscord, BsTelegram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";

const content = [
  {
    category: "ZIGZAG ECOSYSTEM",
    items: [
      {
        name: "Orderbook DEX",
        url: "",
      },
      {
        name: "Mammoth Pool",
        url: "",
      },
      {
        name: "zzNFT Marketplace",
        url: "",
      },
    ],
  },
  {
    category: "RESOURCES",
    items: [
      {
        name: "Documentation",
        url: "",
      },
      {
        name: "Uptime Status",
        url: "",
      },
      {
        name: "Github",
        url: "",
      },
      {
        name: "Blog",
        url: "",
      },
      {
        name: "zkRollups Ecosystem",
        url: "",
      },
    ],
  },
  {
    category: "LINKS",
    items: [
      {
        name: "zkSync",
        url: "",
      },
      {
        name: "StarkNet",
        url: "",
      },
      {
        name: "Argent",
        url: "",
      },
      {
        name: "CoinGecko",
        url: "",
      },
      {
        name: "Coinmarketcap",
        url: "",
      },
    ],
  },
  {
    category: "COMMUNITY",
    items: [
      {
        name: "Twitter",
        url: "",
      },
      {
        name: "Discord",
        url: "",
      },
      {
        name: "Telegram",
        url: "",
      },
      {
        name: "Forum",
        url: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <div
        className={classNames(
          styles.footer,
          "grid grid-cols-6 mt-44 gap-16 pb-16  border-b-2 border-foreground-400"
        )}
      >
        <div className="col-span-2">
          <Link href="/" passHref={true}>
            <Image
              src="/assets/logo.png"
              alt="Vercel Logo"
              width={100}
              height={32}
            />
          </Link>
          <p className="mt-5 font-light leading-8 tracking-wide text-white font-work">
            ZigZag is a native, easy-to-use, reliable, fully secure and low fee
            Decentralized Exchange built on ZK Rollups.
          </p>
          <div className="flex items-center gap-10 mt-7">
            <BsTwitter className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            <BsGithub className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            <BsDiscord className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            <BsTelegram className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
          </div>
        </div>
        {content.map((data: any, idx: any) => {
          return (
            <div className="flex flex-col gap-4" key={idx}>
              <p className="text-base font-medium font-work">{data.category}</p>
              {data.items.map((item: any, index: any) => {
                return (
                  <a
                    href="https://trade.zigzag.exchange/"
                    className=" text-base !font-light font-work text-foreground-800"
                    rel="noopener noreferrer"
                    target="_blank"
                    key={index}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="py-10 text-center">
        <p className="font-normal font-work text-foreground-800">
          © 2022 ZigZag. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
