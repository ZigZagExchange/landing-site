import classNames from "classnames";
import React from "react";
import { GETSTARTED_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import RoadMapItem from "@/components/atomic/RoadMapItem/RoadMapItem";
import styles from "./roadMap.module.css";

const data = [
  {
    date: "October 2021",
    title: "$100k Grant",
    text: "First funding raised by $100k grant",
  },
  {
    date: "October 2021",
    title: "Launch",
    text: "Launch on zkSync 1.0 with initial pairs (ETH/USDT, ETH/USDC, USDC/USDT)",
  },
  {
    date: "November 2021",
    title: "Assemble founding team",
    text: "“If you want to go fast, go alone. If you want to go far, go together.”",
  },
  {
    date: "November 2021",
    title: "Raise liquidity",
    text: "Further raising of funds for development & pair liquidity",
  },
  {
    date: "December 2021",
    title: "New trading pairs",
    text: "Implement new trading pairs (WBTC-USDC, WBTC-USDT, ETH/WBTC)",
  },
  {
    date: "December 2021",
    title: "Scale up with developers",
    text: "Expand core development team",
  },
];

const RoadMap = () => {
  const { t, i18n } = useTranslation([GETSTARTED_TNS]);
  return (
    <section
      className={classNames(
        styles.roadmap,
        "text-center relative mt-48 mb-16 mx-8 md:mx-0"
      )}
    >
      <p
        data-aos="fade-up"
        className="z-20 text-4xl font-semibold tracking-wider text-center md:text-5xl"
      >
        Our Roadmap
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-4 text-xl font-light tracking-wider text-center "
      >
        {t("ZigZag’s milestones and vision for the future")}
      </p>
      <div className="flex flex-row mt-16 lg:ml-40 md:mx-16 lg:justify-start md:justify-between">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1200"
          data-aos-duration="2000"
          className="text-left md:basis-1/4 basis-1/3"
        >
          <div className="flex items-start">
            <p className="-mt-1.5 text-xl font-light tracking-wider font-work">
              Q3-21
            </p>
            <div className="flex flex-col items-center justify-center ml-4">
              <div className="w-4 h-4 border-2 border-foreground-900 bg-slate-900"></div>
              <div className="w-0.5 h-6 bg-slate-50"></div>
            </div>
          </div>
          <div className="flex items-start">
            <p className="-mt-1.5 text-xl font-light tracking-wider font-work">
              Q4-21
            </p>
            <div className="flex flex-col items-center justify-center ml-4">
              <div className="w-4 h-4 border-2 border-foreground-900 bg-slate-900"></div>
              <div className="w-0.5 h-6 bg-slate-50"></div>
            </div>
          </div>
          <div className="flex items-start">
            <p className="-mt-1.5 text-xl font-light tracking-wider font-work">
              Q1-22
            </p>
            <div className="flex flex-col items-center justify-center ml-4">
              <div className="w-4 h-4 border-2 border-foreground-900 bg-gradient-to-r from-primary-900 to-secondary-900"></div>
              <div className="w-0.5 h-6 bg-slate-50"></div>
            </div>
          </div>
          <div className="flex items-start">
            <p className="-mt-1.5 text-xl font-light tracking-wider font-work">
              Q2-22
            </p>
            <div className="flex flex-col items-center justify-center ml-4">
              <div className="w-4 h-4 border-2 border-foreground-900 bg-slate-900"></div>
            </div>
          </div>
        </div>
        <div className="space-y-5 md:basis-7/12 basis-2/3">
          {data.map((item, index) => {
            return <RoadMapItem data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
