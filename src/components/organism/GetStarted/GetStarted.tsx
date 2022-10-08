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
    <section className={"mt-48 mx-8 md:mx-0"}>
      <p
        data-aos="fade-up"
        data-aos-offset="200"
        className="text-4xl font-semibold tracking-wider text-center md:text-5xl"
      >
        {t("Getting Started is Easy")}
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-4 text-base font-light tracking-wider text-center md:text-xl "
      >
        {t("Trading on L2 has never been easier.")}
      </p>
      <div className="mt-16 xl:ml-40 xl:mr-0 xl:gap-6 lg:mx-8 md:mx-16 xl:flex xl:flex-row">
        <div className="xl:items-center xl:justify-center xl:basis-1/4 xl:block lg:flex lg:justify-betweem lg:items-center lg:gap-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="1800"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-anchor=".step-element"
            className="basis-1/3"
          >
            <StepOne />
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="2400"
            data-aos-anchor=".arrow-element"
            data-aos-duration="1000"
            className="flex items-center justify-center my-2 lg:hidden xl:flex"
          >
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2400"
            data-aos-anchor=".arrow-element"
            data-aos-duration="1000"
            className="items-center justify-center hidden my-2 xl:hidden lg:flex md:hidden "
          >
            <Image
              src="/assets/gradient-arrow-narrow-right.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1800"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-anchor=".step-element"
            className="basis-1/3"
          >
            <StepTwo />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="2400"
            data-aos-duration="1000"
            data-aos-anchor=".arrow-element"
            className="flex items-center justify-center my-2 lg:hidden xl:flex"
          >
            <Image
              src="/assets/gradient-arrow-narrow-down.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2400"
            data-aos-duration="1000"
            data-aos-anchor=".arrow-element"
            className="items-center justify-center hidden my-2 xl:hidden lg:flex md:hidden"
          >
            <Image
              src="/assets/gradient-arrow-narrow-right.svg"
              width={20}
              height={20}
              alt="narrow-down"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1800"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-anchor=".step-element"
            className="basis-1/3"
          >
            <StepThree />
          </div>
        </div>
        <div className="hidden xl:basis-3/4 xl:block">
          <div
            className={classNames(
              styles.tradingUI,
              "xl:border xl:border-foreground-400 flex justify-center align-center"
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
