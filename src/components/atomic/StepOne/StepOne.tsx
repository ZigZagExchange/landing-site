import classNames from "classnames";
import { GETSTARTED_TNS, COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import React from "react";

import styles from "./stepOne.module.css";
import Button from "../Button/Button";

const StepOne = ({ className }: any) => {
  const { t } = useTranslation([GETSTARTED_TNS, COMMON_TNS]);
  return (
    <div
      className={classNames(
        styles.stepOne,
        className,
        "border p-5 rounded-2xl border-foreground-400 shadow-2xl  dark:shadow-gray-900"
      )}
    >
      <p className="text-2xl font-semibold text-left capitalize font-work">
        {t("Step 1")}
      </p>
      <p className="mt-2 text-base font-light leading-6 tracking-wider text-left font-work">
        {t(
          "Launch your app by clicking “Start Trading” and connect your wallet."
        )}
      </p>
      <div className="flex flex-col items-center justify-center pt-8 pb-6 mt-4 text-center rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 mix-blend-hard-light">
        <Button className="mx-8 text-xs font-bold uppercase" type="gradient">
          {t("Start Trading")}
        </Button>
        <ArrowNarrowDownIcon className="w-5 h-5 my-2" aria-hidden="true" />
        <Button className="mx-8 text-xs font-bold uppercase" type="gradient">
          {t("connect wallet")}
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
