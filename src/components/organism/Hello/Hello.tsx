import React from "react";
import { useState, useEffect } from "react";
import { COMMON_TNS } from "@/lib/i18n/consts";

import { useTranslation } from "react-i18next";
// import { useTheme } from "next-themes";
// import { useRouter } from "next/router";
import Button from "@/components/atomic/Button/Button";
import PriceCard from "@/components/atomic/PriceCard/PriceCard";
import classNames from "classnames";

import styles from "./hello.module.css";

type props = {
  onClickRollupBtn?: () => void;
};

const Hello = ({ onClickRollupBtn }: props) => {
  const { t, i18n } = useTranslation([COMMON_TNS]);

  return (
    <section
      className={classNames(
        styles.hello,
        "relative xl:bg-[url('/assets/mascot2.png')] lg:bg-[url('/assets/mascot3.png')] bg-[url('/assets/mascot1.png')] bg-no-repeat xl:bg-right-bottom lg:bg-left-top md:bg-right-top 2xl:bg-40% xl:bg-50% lg:bg-30% md:bg-30% bg-50%"
      )}
    >
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="false"
        className="text-4xl font-extrabold tracking-tight text-center whitespace-pre-wrap pt-36 text-slate-900 dark:text-white xl:pt-52 md:text-6xl font-work "
      >
        {t("Join the Future of Trading")}
      </p>

      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
        className="mx-12 mt-2 font-medium leading-normal text-center whitespace-pre-wrap md:text-lg md:mt-6 text-slate-800 dark:text-slate-200 md:mx-0 font-work"
      >
        {t(
          "Zigzag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups."
        )}
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
        className="flex flex-col items-center justify-center gap-4 mx-16 mt-8 text-center md:mx-0 md:flex-row"
      >
        <a
          href="https://trade.zigzag.exchange/"
          rel="noopener noreferrer"
          target="_blank"
          className="!hover:no-underline"
        >
          <Button
            className="px-2 py-2.5 text-base font-semibold  font-work md:w-100 hover:no-underline"
            type="gradient"
          >
            {t("Trade on zkSync Lite")}
          </Button>
        </a>
         <a
          href="https://zap.zigzag.exchange/"
          rel="noopener noreferrer"
          target="_blank"
          className="!hover:no-underline"
        >
          <Button
            className="px-2 py-2.5 text-base font-semibold font-work md:w-100 hover:no-underline"
            type="gradient"
          >
            {t("Cross chain Swap with ZAP")}
          </Button>
        </a>
        {/* <a
          href="https://arbitrum.zigzag.exchange/"
          rel="noopener noreferrer"
          target="_blank"
          className="!hover:no-underline"
        >
          <Button
            className="px-6 py-2.5 text-base font-semibold  font-work md:w-100 hover:no-underline"
            type="gradient"
          >
            {t("Trade on Arbitrum")}
          </Button>
        </a> */}
      </div>

      {/* <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
        className="flex flex-col items-center justify-center gap-4 mx-16 mt-8 text-center md:mx-0 md:flex-row"
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="!hover:no-underline"
        >
          <Button
            className="px-3 py-2.5 text-base font-semibold  font-work md:w-100 hover:no-underline"
            type="gradient"
          >
            {t("INVISIBL3: DEX + Perps for professionals that want privacy, low fees & fast transactions (Coming Soon)")}
          </Button>
        </a>
      </div> */}

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-1 2xl:left-38 xl:left-16 xl:block"
      >
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A"/>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-1 right-1 xl:right-1 xl:block"
      >
        <PriceCard symbol="AAVE" name="aave" fillColor="#A35FA4" />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-52 2xl:left-44 xl:left-44 xl:block"
      >
        <PriceCard symbol="DAI" name="dai" fillColor="#F9AF1C" />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-26 left-10 xl:left-10 xl:block"
      >
        <PriceCard symbol="LINK" name="Chainlink" fillColor="#2A5ADA" />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-22 2xl:right-1 xl:right-1 xl:block"
      >
        <PriceCard
          symbol="ZZ"
          name="zigzag-2"
          title="ZigZag"
          logo="/assets/logo.svg"
          fillColor="#04DBDA"
        />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="absolute hidden top-52 2xl:right-44 xl:right-16 xl:block"
      >
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="flex flex-col items-center justify-around gap-8 mt-16 md:gap-0 md:flex-row xl:hidden"
      >
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A" />
        <PriceCard
          symbol="ZZ"
          name="zigzag-2"
          title="ZigZag"
          logo="/assets/logo.svg"
          fillColor="#04DBDA"
        />
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>
    </section>
  );
};

export default Hello;
