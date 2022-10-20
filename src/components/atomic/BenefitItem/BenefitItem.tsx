import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import styles from "./benefitItem.module.css";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";

type BenefitItemProps = {
  data: { title: string; bgUrl: any; text: string };
};

const BenefitItem = ({ data }: BenefitItemProps) => {
  const [over, setOver] = useState(false);

  const { t } = useTranslation([COMMON_TNS]);

  const onMouseOver = () => {
    setOver(true);
  };

  const onMouseleave = () => {
    setOver(false);
  };

  return (
    <div
      className={classNames(
        styles.benefitItem,
        !over && `${data.bgUrl}`,
        `bg-no-repeat bg-cover bg-center relative bg-gradient-to-r from-primary-600 to-secondary-600 h-72 shadow
         duration-150 ease-in-out hover:-translate-y-1 hover:scale-100 rounded-xl p-4 cursor-pointer`
      )}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseleave}
    >
      <p className="p-2 text-lg font-bold text-left font-work dark:text-slate-50 text-slate-900">
        {data.title}
      </p>
      {over && (
        <p className="p-4 pt-3 text-base font-medium text-left transition ease-in-out transform duration-800 font-work dark:text-slate-300 text-slate-700">
          {data.text}
        </p>
      )}
      <p className="absolute flex items-center text-sm font-semibold cursor-pointer bottom-3 font-work text-primary-900 hover:text-primary-800 right-3">
        {t("Read More")}
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </p>
    </div>
  );
};

export default BenefitItem;
