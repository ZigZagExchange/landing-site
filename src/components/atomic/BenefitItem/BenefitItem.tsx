import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import styles from "./benefitItem.module.css";

type BenefitItemProps = {
  data: { title: string; bgUrl: any; text: string };
};

const BenefitItem = ({ data }: BenefitItemProps) => {
  const [over, setOver] = useState(false);

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
        `transition-all duration-100 ease-out hover:ease-in hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 h-72 ${data.bgUrl} 
        transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-100 rounded-lg p-4 border border-green-900 cursor-pointer`
      )}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseleave}
    >
      <p className="p-2 text-lg font-semibold tracking-wide text-left font-work">
        {data.title}
      </p>
      {over && (
        <p className="p-4 pt-3 text-base font-normal leading-6 tracking-wide text-left transition ease-in-out transform duration-800 font-work ">
          {data.text}
        </p>
      )}
      <p className="absolute flex items-center text-sm font-medium cursor-pointer bottom-3 font-work text-primary-900 hover:text-primary-800 right-3">
        Read More
        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
      </p>
    </div>
  );
};

export default BenefitItem;
