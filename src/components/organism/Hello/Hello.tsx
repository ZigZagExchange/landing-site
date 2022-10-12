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

const Hello = () => {
  const { t, i18n } = useTranslation([HELLO_TNS, COMMON_TNS]);

  return (
    <section className={classNames(styles.hello, "relative")}>
      <p className="pt-32 text-4xl font-semibold leading-tight text-center whitespace-pre-wrap xl:pt-52 lg:text-7xl md:text-5xl xs:font-work ">
        {t("Join the Future of Trading")}
      </p>

      <p className="mx-12 text-base font-light leading-normal tracking-wider text-center whitespace-pre-wrap lg:mt-6 dark:text-foreground-800 md:mt-0 md:mx-0 font-work">
        {t(
          "Zigzag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups."
        )}
      </p>

      <div className="flex flex-col justify-center gap-4 mx-16 mt-8 text-center md:mx-0 md:flex-row">
        <Button
          className="px-8 py-2 text-base font-bold uppercase font-work md:w-100"
          type="gradient"
        >
          {t("Start Trading")}
        </Button>
        <Button className="px-8 py-2 text-base font-bold uppercase border-2 rounded-lg dark:border-foreground-800 font-work dark:text-foreground-800 hover:dark:border-foreground-900 hover:dark:text-foreground-900">
          {t("What Are ZK Rollups?")}
        </Button>
      </div>

      <div className="absolute hidden top-28 2xl:left-28 xl:left-16 xl:block">
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A" />
      </div>

      <div className="absolute hidden bottom-18 2xl:left-44 xl:left-36 xl:block">
        <PriceCard symbol="ZigZag" name="zigzag-2" fillColor="#8247E5" />
      </div>

      <div className="absolute hidden top-52 2xl:right-44 xl:right-16 xl:block">
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>

      <div className="flex flex-col items-center justify-around gap-8 mt-16 md:gap-0 md:flex-row xl:hidden">
        <PriceCard symbol="BTC" name="bitcoin" fillColor="#F7931A" />
        <PriceCard symbol="ZigZag" name="zigzag-2" fillColor="#8247E5" />
        <PriceCard symbol="ETH" name="ethereum" fillColor="#627EEA" />
      </div>
    </section>
  );
};

export default Hello;
