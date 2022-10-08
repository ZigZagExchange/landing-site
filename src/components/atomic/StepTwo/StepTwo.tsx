import { GETSTARTED_TNS, COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import React from "react";
import classNames from "classnames";

const StepTwo = ({ className }: any) => {
  const { t } = useTranslation([GETSTARTED_TNS, COMMON_TNS]);
  return (
    <div
      className={classNames(
        className,
        "p-5 border shadow-2xl rounded-2xl border-foreground-400 dark:shadow-gray-900"
      )}
    >
      <p className="text-2xl font-semibold text-left capitalize font-work">
        {t("Step 2")}
      </p>
      <p className="mt-2 text-base font-light leading-6 tracking-wider text-left font-work">
        {t("Migrate funds over via the ZigZag bridge.")}
      </p>
      <div className="mt-4 text-left">
        <Image
          src="/assets/swap.png"
          alt="swap"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default StepTwo;
