import React from "react";
import { useState, useEffect } from "react";
import { COMMON_TNS, HELLO_TNS } from "@/lib/i18n/consts";

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
  const { t, i18n } = useTranslation([HELLO_TNS, COMMON_TNS]);

  return (
    <section
      className={classNames(
        styles.hello,
        "relative xl:bg-[url('/assets/mascot2.png')] lg:bg-[url('/assets/mascot3.png')] bg-[url('/assets/mascot1.png')] bg-no-repeat xl:bg-right-bottom lg:bg-left-top md:bg-right-top 2xl:bg-40% xl:bg-50% lg:bg-30% md:bg-30% bg-50%"
      )}
    >
      <p className="text-4xl font-extrabold leading-6 tracking-tight text-center whitespace-pre-wrap text-slate-900 dark:text-white pt-28 xl:pt-52 md:text-6xl font-work ">
        {t("Join the Future of Trading")}
      </p>

      <p className="mx-12 text-lg font-medium leading-normal text-center whitespace-pre-wrap md:mt-6 text-slate-800 dark:text-slate-200 md:mx-0 font-work">
        {t(
          "Zigzag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups."
        )}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 mx-16 mt-8 text-center md:mx-0 md:flex-row">
        <a
          href="https://trade.zigzag.exchange/"
          rel="noopener noreferrer"
          target="_blank"
          className="!hover:no-underline"
        >
          <Button
            className="px-8 py-2.5 text-base font-semibold  font-work md:w-100 hover:no-underline"
            type="gradient"
          >
            {t("Start Trading")}
          </Button>
        </a>
        <Button
          className="py-2 text-base font-semibold border-2 rounded-lg whitespace-nowrap text-slate-800 border-slate-700 dark:border-slate-400 font-work dark:text-slate-300 hover:dark:border-foreground-900 hover:dark:text-foreground-900"
          onClick={onClickRollupBtn}
        >
          {t("What Are ZK Rollups?")}
        </Button>
      </div>

      <div className="absolute hidden top-28 2xl:left-28 xl:left-16 xl:block">
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A" />
      </div>

      <div className="absolute hidden bottom-18 2xl:left-44 xl:left-36 xl:block">
        <PriceCard
          symbol="ZZ"
          name="zigzag-2"
          title="ZigZag"
          logo="/assets/logo.svg"
          fillColor="#8247E5"
        />
      </div>

      <div className="absolute hidden top-52 2xl:right-44 xl:right-16 xl:block">
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>

      <div className="flex flex-col items-center justify-around gap-8 mt-16 md:gap-0 md:flex-row xl:hidden">
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A" />
        <PriceCard
          symbol="ZZ"
          name="zigzag-2"
          title="ZigZag"
          logo="/assets/logo.svg"
          fillColor="#8247E5"
        />
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>
    </section>
  );
};

export default Hello;
