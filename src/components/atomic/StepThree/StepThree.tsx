import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import React from "react";
import classNames from "classnames";

const StepThree = ({ className }: any) => {
  const { t } = useTranslation([COMMON_TNS]);
  return (
    <div
      className={classNames(
        className,
        "p-5 border shadow rounded-2xl border-foreground-400 dark:shadow-gray-900"
      )}
    >
      <p className="text-2xl font-semibold text-left capitalize font-work dark:text-slate-50 text-slate-900 ">
        {t("Step 3")}
      </p>
      <p className="mt-2 text-base font-normal leading-6 text-left font-work text-slate-600 dark:text-slate-400">
        {t("Start trading!")}
      </p>
      <div className="mt-4 text-left bg-[url('/assets/chart.png')] 2xl:h-44 xl:h-52 lg: h-52 bg-cover bg-no-repeat">
        {/* <Image
          src="/assets/chart.png"
          alt="swap"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
        /> */}
      </div>
    </div>
  );
};

export default StepThree;
