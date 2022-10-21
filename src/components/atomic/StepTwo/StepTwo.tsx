import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import React from "react";
import classNames from "classnames";

const StepTwo = ({ className }: any) => {
  const { t } = useTranslation([COMMON_TNS]);
  return (
    <div
      className={classNames(
        className,
        "p-5 border shadow rounded-2xl border-foreground-400 dark:shadow-gray-900"
      )}
    >
      <p className="text-2xl font-semibold text-left capitalize font-work dark:text-slate-50 text-slate-900 ">
        {t("Step 2")}
      </p>
      <p className="mt-2 text-base font-normal leading-6 text-left font-work text-slate-600 dark:text-slate-400">
        {t("Migrate funds over via the ZigZag bridge.")}
      </p>
      <div className="mt-4 text-left bg-[url('/assets/swap.png')] h-44 bg-cover bg-no-repeat">
        {/* <Image
          src="/assets/swap.png"
          alt="swap"
          width="100%"
          height="80%"
          layout="responsive"
          objectFit="contain"
        /> */}
      </div>
    </div>
  );
};

export default StepTwo;
