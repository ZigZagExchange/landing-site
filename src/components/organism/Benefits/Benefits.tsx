import React, { useEffect, useState } from "react";
import BenefitItem from "@/components/atomic/BenefitItem/BenefitItem";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const data = [
  {
    title: "Unparalleled Quotes & Deep Liquidity",
    bgUrl: "bg-[url('/assets/unparalled-quotes.svg')]",
    text: "We offer extremely low slippage for trades of all sizes, quotes that compete with ones offered by centralized exchanges",
  },
  {
    title: "High Scalability",
    bgUrl: "bg-[url('/assets/security.svg')]",
    text: "By using ZK Rollups we are able to offer near-zero swap fees with nearly instantaneous transactions.",
  },
  {
    title: "Decentralized & Secure",
    bgUrl: "bg-[url('/assets/fast-withdrawl.svg')]",
    text: "ZigZag aims to be fully decentralized and open source.",
  },
  {
    title: "CEX Price Feeds",
    bgUrl: "bg-[url('/assets/unparalled-quotes.svg')]",
    text: "All price feeds are fetched from centralized exchanges,  always guaranteeing the best price possible.",
  },
];

const Benefits = () => {
  const { locale } = useRouter();
  const { t } = useTranslation([COMMON_TNS]);
  const [selected, setSelected] = useState(data);

  useEffect(() => {
    const p: any = data.map((item) => {
      return { ...item, title: t(item.title), text: t(item.text) };
    });
    setSelected(p);
  }, [locale, t]);

  return (
    <section className="text-center">
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        className="mt-32 text-4xl font-extrabold text-center md:text-5xl text-slate-900 dark:text-white md:mx-4 md:mt-0"
      >
        {t("Benefits and Features")}
      </p>
      <div className="grid gap-5 mt-16 md:px-8 lg:grid-cols-4 md:grid-cols-2 xl:gap-10 ">
        {selected.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay={100 * (index + 1)}
              key={index}
            >
              <BenefitItem data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
