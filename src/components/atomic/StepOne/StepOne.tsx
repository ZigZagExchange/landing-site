import classNames from "classnames";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import React from "react";

import styles from "./stepOne.module.css";
import Button from "../Button/Button";

const StepOne = ({ className }: any) => {
  const { t } = useTranslation([COMMON_TNS]);
  return (
    <div
      className={classNames(
        styles.stepOne,
        className,
        "border p-5 rounded-2xl border-foreground-300 shadow dark:shadow-gray-900"
      )}
    >
      <p className="text-2xl font-semibold text-left capitalize font-work dark:text-slate-50 text-slate-900 ">
        {t("Step 1")}
      </p>
      <p className="mt-2 text-base font-normal leading-6 text-left font-work text-slate-600 dark:text-slate-400">
        {t(
          "Launch your app by clicking “Start Trading” and connect your wallet."
        )}
      </p>
      <div className="flex flex-col items-center justify-center pt-8 pb-6 mt-4 text-center rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 mix-blend-hard-light">
        <Button
          className="mx-8 text-xs font-bold uppercase"
          type="gradient"
          disabled
        >
          {t("Start Trading")}
        </Button>
        <ArrowNarrowDownIcon className="w-5 h-5 my-2" aria-hidden="true" />
        <Button
          className="mx-8 text-xs font-bold uppercase"
          type="gradient"
          disabled
        >
          {t("connect wallet")}
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
