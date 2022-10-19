import React, { useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import { GETSTARTED_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import YoutubeModal from "@/components/atomic/YoutubeModal/YoutubeModal";
import styles from "./getStarted.module.css";
import StepOne from "@/components/atomic/StepOne/StepOne";
import StepTwo from "@/components/atomic/StepTwo/StepTwo";
import StepThree from "@/components/atomic/StepThree/StepThree";
import "aos/dist/aos.css";

const GetStarted = () => {
  const { t, i18n } = useTranslation([GETSTARTED_TNS]);
  return (
    <section className={"mt-48 md:px-8"}>
      <p className="text-5xl font-extrabold text-center dark:text-slate-50 text-slate-900 font-work">
        {t("Getting Started is Easy")}
      </p>
      <p className="mt-4 text-xl font-medium text-center font-work text-slate-800 dark:text-slate-200">
        {t("Trading on L2 has never been easier.")}
      </p>
      <div className="mt-16">
        <div className="lg:flex lg:justify-betweem lg:items-center lg:gap-5">
          <div className="basis-1/3">
            <StepOne />
          </div>

          <div className="flex items-center justify-center my-2 lg:hidden ">
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="items-center justify-center hidden my-2 lg:flex">
            <Image
              src="/assets/gradient-arrow-narrow-right.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="basis-1/3">
            <StepTwo />
          </div>
          <div className="flex items-center justify-center my-2 lg:hidden">
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="items-center justify-center hidden my-2 lg:flex ">
            <Image
              src="/assets/gradient-arrow-narrow-right.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="basis-1/3">
            <StepThree />
          </div>
        </div>
        {/* <div className="hidden xl:basis-3/4 xl:block">
          <div
            className={classNames(
              styles.tradingUI,
              "xl:border xl:border-foreground-400 flex justify-center align-center rounded-3xl"
            )}
          >
            <YoutubeModal />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GetStarted;
