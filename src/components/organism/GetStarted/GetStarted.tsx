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
    <section className={"mt-48 md:mx-0"}>
      <p className="text-4xl font-semibold tracking-wider text-center font-work md:text-5xl">
        {t("Getting Started is Easy")}
      </p>
      <p className="mt-4 text-xl !font-light font-work tracking-wide text-center text-foreground-800">
        {t("Trading on L2 has never been easier.")}
      </p>
      <div className="mt-16 xl:mr-0 xl:gap-6 xl:flex xl:flex-row">
        <div className="xl:items-center xl:justify-center xl:basis-1/4 xl:block lg:flex lg:justify-betweem lg:items-center lg:gap-5">
          <div className="basis-1/3">
            <StepOne />
          </div>

          <div className="flex items-center justify-center my-2 lg:hidden xl:flex">
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="items-center justify-center hidden my-2 xl:hidden lg:flex md:hidden ">
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
          <div className="flex items-center justify-center my-2 lg:hidden xl:flex">
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div className="items-center justify-center hidden my-2 xl:hidden lg:flex md:hidden">
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
        <div className="hidden xl:basis-3/4 xl:block">
          <div
            className={classNames(
              styles.tradingUI,
              "xl:border xl:border-foreground-400 flex justify-center align-center rounded-3xl"
            )}
          >
            <YoutubeModal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
