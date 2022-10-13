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
        url: "https://trade.zigzag.exchange/",
      },
      {
        name: "Mammoth Pool",
        url: "https://mammoth.zigzag.exchange/",
      },
      {
        name: "ZigZag Labs",
        url: "https://zigzaglabs.io/",
      },
    ],
  },
  {
    category: "RESOURCES",
    items: [
      {
        name: "Documentation",
        url: "https://docs.zigzag.exchange/",
      },
      {
        name: "Uptime Status",
        url: "https://status.zigzag.exchange/",
      },
      {
        name: "Github",
        url: "https://github.com/ZigZagExchange",
      },
      {
        name: "Blog",
        url: "https://blog.zigzag.exchange/",
      },
      {
        name: "zkRollups Ecosystem",
        url: "https://zigzaglabs.io/",
      },
    ],
  },
  {
    category: "LINKS",
    items: [
      {
        name: "zkSync",
        url: "https://zksync.io/",
      },
      {
        name: "StarkNet",
        url: "https://starknet.io/",
      },
      {
        name: "Argent",
        url: "https://www.argent.xyz/",
      },
      {
        name: "CoinGecko",
        url: "https://www.coingecko.com/en/coins/zigzag",
      },
      {
        name: "Coinmarketcap",
        url: "https://coinmarketcap.com/currencies/zigzag/",
      },
    ],
  },
  {
    category: "COMMUNITY",
    items: [
      {
        name: "Twitter",
        url: "https://twitter.com/ZigZagExchange",
      },
      {
        name: "Discord",
        url: "https://t.co/yk7f1m0nmE",
      },
      {
        name: "Telegram",
        url: "https://t.me/zigzagexchange",
      },
      {
        name: "Forum",
        url: "https://forum.zigzaglabs.io/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="md:px-8">
      <div
        className={classNames(
          styles.footer,
          "grid md:grid-cols-3 grid-cols-1 mt-44 lg:gap-16 gap-10 pb-16  border-b-2 border-foreground-400 "
        )}
      >
        <div>
          <Link href="/" passHref={true}>
            <Image
              src="/assets/logo.png"
              alt="Vercel Logo"
              width={100}
              height={32}
            />
          </Link>
          <p className="mt-5 font-light leading-8 tracking-wide text-white font-work">
            A decentralized order book exchange powered by zero-knowledge
            technology.
          </p>
          <div className="flex items-center gap-10 mt-7">
            <a
              href="https://twitter.com/ZigZagExchange"
              className=" text-base !font-light font-work text-foreground-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsTwitter className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            </a>
            <a
              href="https://github.com/ZigZagExchange"
              className=" text-base !font-light font-work text-foreground-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGithub className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            </a>
            <a
              href="https://t.co/yk7f1m0nmE"
              className=" text-base !font-light font-work text-foreground-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsDiscord className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            </a>
            <a
              href="https://t.me/zigzagexchange"
              className=" text-base !font-light font-work text-foreground-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsTelegram className="w-6 h-6 cursor-pointer text-foreground-700 hover:text-white" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-5 lg:grid-cols-4">
          {content.map((data: any, idx: any) => {
            return (
              <div className="flex flex-col gap-4 md:ml-10 lg:ml-0" key={idx}>
                <p className="text-base font-medium font-work">
                  {data.category}
                </p>
                {data.items.map((item: any, index: any) => {
                  return (
                    <a
                      href={item.url}
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
