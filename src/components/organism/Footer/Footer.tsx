import classNames from "classnames";
import React from "react";
import { BsTwitter, BsGithub, BsDiscord, BsTelegram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

import styles from "./footer.module.css";

const content = [
  {
    category: "Resources",
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
        name: "GitHub",
        url: "https://github.com/ZigZagExchange",
      },
      {
        name: "Blog",
        url: "https://blog.zigzag.exchange/",
      },
    ],
  },
  {
    category: "Links",
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
        name: "CoinGecko",
        url: "https://www.coingecko.com/en/coins/zigzag",
      },
      {
        name: "CoinMarketCap",
        url: "https://coinmarketcap.com/currencies/zigzag/",
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        name: "Twitter",
        url: "https://twitter.com/ZigZagExchange",
      },
      {
        name: "Discord",
        url: "https://discord.gg/znyRTSWTJQ",
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
  const { t } = useTranslation([COMMON_TNS]);
  const { theme } = useTheme();
  return (
    <div className="md:px-8">
      <div
        className={classNames(
          styles.footer,
          "grid grid-cols-1 md:grid-cols-3 mt-44 lg:gap-16 gap-10 pb-16"
        )}
      >
        <div>
          <Link href="/" passHref={true}>
            {theme === "dark" ? (
              <Image
                src="/assets/logo.png"
                alt="Vercel Logo"
                width={100}
                height={32}
              />
            ) : (
              <Image
                src="/assets/logo-dark.png"
                alt="Vercel Logo"
                width={100}
                height={32}
              />
            )}
          </Link>
          <p className="mt-5 font-normal leading-8 tracking-wide font-work text-slate-800 dark:text-slate-200">
            {t(
              "A decentralized order book exchange powered by zero-knowledge technology."
            )}
          </p>
          <div className="flex items-center gap-10 mt-7">
            <a
              href="https://twitter.com/ZigZagExchange"
              className=" text-base !font-light font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsTwitter className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://github.com/ZigZagExchange"
              className=" text-base !font-light font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGithub className="w-6 h-6 cursor-pointer " />
            </a>
            <a
              href="https://discord.gg/znyRTSWTJQ"
              className=" text-base !font-light font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsDiscord className="w-6 h-6 cursor-pointer " />
            </a> 
            <a
              href="https://t.me/zigzagexchange"
              className=" text-base !font-light font-work dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsTelegram className="w-6 h-6 cursor-pointer " />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-5 lg:grid-cols-3">
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
                      className=" text-base !font-normal dark:hover:text-sky-400 hover:text-sky-500 text-slate-800 dark:text-slate-200 font-work  hover:underline hover:underline-offset-4 "
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
        <p className="font-normal font-work text-slate-600 dark:text-slate-400">
          © 2023 ZigZag. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
